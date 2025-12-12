# 文本域 Textarea

用于多行文本输入。

## 何时使用

- 需要输入多行文本时
- 需要限制字数的文本输入时
- 需要可清除功能的多行文本输入时

## 示例

### 基础用法

最简单的文本域用法。
:::demo
```jsx
import { Textarea } from '@apron-design/react';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div>
      <h4>默认 (3行)</h4>
      <Textarea placeholder="Please enter..." />
    </div>
    <div>
      <h4>有内容</h4>
      <Textarea defaultValue="This is a textarea with some content. It supports multiple lines of text." />
    </div>
  </div>
);
```
:::

### 不同行数

可以设置不同的行数。
:::demo
```jsx
import { Textarea } from '@apron-design/react';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div>
      <h4>3 行（默认）</h4>
      <Textarea rows={3} placeholder="3 rows textarea..." />
    </div>
    <div>
      <h4>5 行</h4>
      <Textarea rows={5} placeholder="5 rows textarea..." />
    </div>
    <div>
      <h4>8 行</h4>
      <Textarea rows={8} placeholder="8 rows textarea..." />
    </div>
  </div>
);
```
:::

### 可清除文本域

带清除图标的文本域，点击图标清除内容。
:::demo
```jsx
import { useState } from 'react';
import { Textarea } from '@apron-design/react';

export default () => {
  const [value, setValue] = useState('可清除的内容');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        clearable
        onClear={() => setValue('')}
        placeholder="输入内容后显示清除按钮"
      />
      <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
        当前值: {value || '(空)'}
      </p>
    </div>
  );
};
```
:::

### 字数限制

可以设置最大字数限制，并在右下角显示计数。
:::demo
```jsx
import { Textarea } from '@apron-design/react';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div>
      <h4>字数限制（右下角显示计数）</h4>
      <Textarea max={200} defaultValue="This is some text content." placeholder="最多输入200字..." />
    </div>
    <div>
      <h4>字数限制 + 可清除</h4>
      <Textarea max={100} clearable defaultValue="Combined features" />
    </div>
  </div>
);
```
:::

### 禁用状态

展示禁用状态的文本域。
:::demo
```jsx
import { Textarea } from '@apron-design/react';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div>
      <h4>禁用</h4>
      <Textarea disabled defaultValue="Disabled textarea" />
    </div>
    <div>
      <h4>禁用（有内容）</h4>
      <Textarea disabled defaultValue="Disabled textarea with content" />
    </div>
  </div>
);
```
:::

## API

### Textarea Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rows | 默认行数 | `number` | `3` |
| clearable | 是否显示清除按钮 | `boolean` | `false` |
| onClear | 清除时的回调 | `() => void` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| max | 最大字数限制，设置后显示字数计数 | `number` | - |
| value | 输入框内容（受控） | `string` | - |
| defaultValue | 输入框默认内容 | `string` | - |
| onChange | 输入框内容变化时的回调 | `React.ChangeEventHandler<HTMLTextAreaElement>` | - |
| onFocus | 输入框获得焦点时的回调 | `React.FocusEventHandler<HTMLTextAreaElement>` | - |
| onBlur | 输入框失去焦点时的回调 | `React.FocusEventHandler<HTMLTextAreaElement>` | - |
| className | 自定义类名 | `string` | - |