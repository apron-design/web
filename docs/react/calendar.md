# 日历 Calendar

用于按月展示日期，并可选地开启单日或日期区间选择。支持限制可选范围、标注不可预约日期及其原因。

## 何时使用

- 展示月历或某月日期状态
- 选择单个日期或一段日期
- 展示可预约、已约满、已预约等日期状态

## 示例

### 展示模式

默认仅展示当前月份，不允许选择。可传入 `month` 指定初始展示月份；不传时使用当前月份。使用 `showToday` 可强调今天，默认不强调。

:::demo
```jsx
import { Calendar } from '@apron-design/react';

export default () => (
  <Calendar
    month={new Date(2026, 10, 1)}
    selectionMode="none"
    showToday
  />
);
```
:::

### 单日选择

设置 `selectionMode="single"` 开启单日选择；可用 `defaultValue` 设置初始选中日期，也可以通过 `value` 和 `onChange` 控制选中值。

:::demo
```jsx
import { Calendar } from '@apron-design/react';

export default () => (
  <Calendar
    month={new Date(2026, 10, 1)}
    selectionMode="single"
    defaultValue={new Date(2026, 10, 16)}
  />
);
```
:::

### 区间选择和日期限制

`selectionMode="range"` 可选择起止日期。`availableDates` 设置允许选择的日期白名单；`disabledDates` 设置不可选日期。两者都支持单个 `Date` 或 `{ start, end }` 日期范围。不可选范围可附带 `reason`，并可通过 `active` 标记与当前用户有关的状态（例如“已预约”）。

:::demo
```jsx
import { Calendar } from '@apron-design/react';

export default () => (
  <Calendar
    month={new Date(2026, 10, 1)}
    selectionMode="range"
    defaultValue={{ start: new Date(2026, 10, 16), end: new Date(2026, 10, 18) }}
    availableDates={[
      { start: new Date(2026, 10, 5), end: new Date(2026, 10, 26) },
    ]}
    disabledDates={[
      { start: new Date(2026, 10, 11), end: new Date(2026, 10, 13), reason: '已约满' },
      { start: new Date(2026, 10, 20), end: new Date(2026, 10, 20), reason: '已预约', active: true },
    ]}
  />
);
```
:::

### 移动端铺满容器

设置 `fullWidth` 后日历占满父容器，七列平均分配宽度，日期字号保持不变。

:::demo
```jsx
import { Calendar } from '@apron-design/react';

export default () => (
  <div style={{ width: '100%', maxWidth: '360px' }}>
    <Calendar month={new Date(2026, 10, 1)} fullWidth />
  </div>
);
```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| month | 当前展示月份；不传时使用当前月份。传入后可通过 `onMonthChange` 同步月份 | `Date` | 当前月份 |
| selectionMode | 选择模式：`none` 仅展示，`single` 单日选择，`range` 区间选择 | `'none' \| 'single' \| 'range'` | `'none'` |
| value | 受控选中值：单日模式传 `Date`，区间模式传 `{ start, end }` | `CalendarValue` | - |
| defaultValue | 非受控初始选中值，格式同 `value` | `CalendarValue` | `null` |
| availableDates | 可选日期白名单；设置后仅范围内日期可选 | `CalendarDateConstraint[]` | - |
| disabledDates | 不可选日期；日期范围可附带原因和 `active` 状态 | `CalendarDateConstraint[]` | `[]` |
| onChange | 选中日期或日期区间变化时触发 | `(value: CalendarValue) => void` | - |
| onMonthChange | 用户切换展示月份时触发 | `(month: Date) => void` | - |
| showToday | 是否强调今天的日期 | `boolean` | `false` |
| fullWidth | 是否铺满父容器宽度；列宽平均分配且字号不变 | `boolean` | `false` |
| className | 附加到日历根节点的类名 | `string` | - |

### 日期范围类型

```ts
interface CalendarDateRange {
  start: Date;
  end: Date;
  reason?: string;
  active?: boolean;
}

type CalendarDateConstraint = Date | CalendarDateRange;
type CalendarValue = Date | { start: Date; end: Date } | null;
```

- 显式设置 `reason` 时会显示在日期数字下方；不设置时不会显示原因文案，但不可选状态仍有默认提示。
- `active: true` 用于标识“已预约”等与当前用户关联的不可选状态，以浅蓝样式显示。
- 日期区间按首尾均包含处理；选择范围如果包含不可选日期，则不会完成该次选择。
