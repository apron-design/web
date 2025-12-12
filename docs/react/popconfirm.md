# 气泡确认框 PopConfirm

专门用于确认操作的气泡卡片。

## 何时使用

- 需要用户确认某个重要操作时
- 删除、提交等不可逆操作前的确认
- 不想打断用户主要流程但又需要确认操作时

## 示例

### 基础用法

最简单的确认框用法。
:::demo
```jsx
import { PopoverConfirm, Button } from '@apron-design/react';

export default function ConfirmPopover() {
  return (
    <PopoverConfirm
      title="确认删除"
      content="删除后将无法恢复，确定要删除吗？"
      onCancel={() => console.log('取消')}
      onConfirm={() => console.log('确认')}
    >
      <Button variant="primary" danger>删除</Button>
    </PopoverConfirm>
  );
}
```
:::

### 自定义按钮文字

可以自定义确认框中的按钮文字。
:::demo
```jsx
import { PopoverConfirm, Button } from '@apron-design/react';

export default function CustomTextConfirmPopover() {
  return (
    <PopoverConfirm
      title="提交确认"
      content="确定要提交此表单吗？"
      cancelText="返回修改"
      confirmText="确定提交"
      onCancel={() => console.log('返回修改')}
      onConfirm={() => console.log('确定提交')}
    >
      <Button variant="primary">提交</Button>
    </PopoverConfirm>
  );
}
```
:::

### 自定义按钮样式

可以自定义确认框中按钮的样式。
:::demo
```jsx
import { PopoverConfirm, Button } from '@apron-design/react';

export default function CustomVariantConfirmPopover() {
  return (
    <PopoverConfirm
      title="危险操作"
      content="此操作不可逆，请谨慎操作。"
      cancelText="取消"
      confirmText="确认删除"
      cancelVariant="text"
      confirmVariant="primary"
      onCancel={() => console.log('取消')}
      onConfirm={() => console.log('确认删除')}
    >
      <Button danger>危险操作</Button>
    </PopoverConfirm>
  );
}
```
:::

### 搭配链接

确认框也可以与链接搭配使用。
:::demo
```jsx
import { PopoverConfirm, Link } from '@apron-design/react';

export default function LinkConfirmPopover() {
  return (
    <PopoverConfirm
      title="退出登录"
      content="确定要退出登录吗？"
      onCancel={() => console.log('取消')}
      onConfirm={() => console.log('退出登录')}
    >
      <Link>退出登录</Link>
    </PopoverConfirm>
  );
}
```
:::

### 多个 PopConfirm（互斥）

同一时间只能显示一个 PopConfirm，点击新的会关闭旧的。
:::demo
```jsx
import { PopoverConfirm, Button } from '@apron-design/react';

export default function MultiplePopConfirms() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <PopoverConfirm
        title="确认删除"
        content="确定要删除此项目吗？"
        onConfirm={() => console.log('删除项目')}
      >
        <Button danger>删除项目</Button>
      </PopoverConfirm>
      <PopoverConfirm
        title="提交确认"
        content="确定要提交此表单吗？"
        cancelText="返回"
        confirmText="提交"
        onConfirm={() => console.log('提交表单')}
      >
        <Button variant="primary">提交表单</Button>
      </PopoverConfirm>
    </div>
  );
}
```
:::

## API

### PopoverConfirm Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | ReactNode | - |
| content | 内容 | ReactNode | - |
| cancelText | 取消按钮文字 | string | `'取消'` |
| confirmText | 确定按钮文字 | string | `'确定'` |
| cancelVariant | 取消按钮变种 | [ButtonVariant](./button) | `'default'` |
| confirmVariant | 确定按钮变种 | [ButtonVariant](./button) | `'primary'` |
| onCancel | 取消回调 | `() => void` | - |
| onConfirm | 确定回调 | `() => void` | - |
| children | 触发元素 | ReactElement | - |
| className | 自定义类名 | string | - |

## 注意事项

1. PopoverConfirm 是通过 Portal 渲染到 body 上的，确保层级高于其他元素
2. 同一时间只能显示一个 PopoverConfirm，点击新的会自动关闭旧的
3. 点击外部区域或取消按钮会关闭 PopoverConfirm
4. PopoverConfirm 会自动计算位置，确保完全显示在视口内
5. 当窗口大小改变或滚动时，PopoverConfirm 会重新计算位置
6. PopoverConfirm 专门用于确认操作，提供了取消和确定两个按钮