# 表单 Form

高性能、易扩展的表单解决方案，支持数据录入、校验和提交功能。

## 何时使用

- 需要进行数据录入和校验的场景
- 构建登录、注册、设置等表单页面
- 需要复杂表单交互和状态管理的应用

## 示例

### 基础表单

最简单的表单使用方式，包含基本的字段和提交功能。
:::demo
```vue
<template>
  <div style="width: 400px;">
    <ad-form
      @finish="handleFinish"
      @finish-failed="handleFinishFailed"
    >
      <ad-form-item name="username" label="用户名" required>
        <ad-input placeholder="请输入用户名" />
      </ad-form-item>
      <ad-form-item name="email" label="邮箱" :rules="[{ type: 'email', message: '请输入有效的邮箱' }]">
        <ad-input placeholder="请输入邮箱" />
      </ad-form-item>
      <ad-form-item name="password" label="密码" required :rules="[{ min: 6, message: '密码至少6位' }]">
        <ad-input type="password" placeholder="请输入密码" />
      </ad-form-item>
      <ad-form-item>
        <ad-button type="submit" variant="primary">提交</ad-button>
      </ad-form-item>
    </ad-form>
  </div>
</template>

<script setup>
const handleFinish = (values) => {
  console.log('Form submitted:', values);
  alert('表单提交成功！\n' + JSON.stringify(values, null, 2));
};

const handleFinishFailed = (errors) => {
  console.log('Form errors:', errors);
};
</script>
```
:::

### 表单布局

支持三种不同的表单布局：垂直（默认）、水平和内联。
:::demo
```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 32px;">
    <!-- 垂直布局（默认） -->
    <div style="width: 400px;">
      <h4>Vertical Layout (Default)</h4>
      <ad-form layout="vertical">
        <ad-form-item name="name" label="姓名">
          <ad-input placeholder="请输入姓名" />
        </ad-form-item>
        <ad-form-item name="phone" label="电话">
          <ad-input placeholder="请输入电话" />
        </ad-form-item>
      </ad-form>
    </div>

    <!-- 水平布局 -->
    <div style="width: 500px;">
      <h4>Horizontal Layout</h4>
      <ad-form layout="horizontal" :label-width="80" label-align="right">
        <ad-form-item name="name" label="姓名">
          <ad-input placeholder="请输入姓名" />
        </ad-form-item>
        <ad-form-item name="phone" label="电话">
          <ad-input placeholder="请输入电话" />
        </ad-form-item>
        <ad-form-item name="address" label="地址">
          <ad-input placeholder="请输入地址" />
        </ad-form-item>
      </ad-form>
    </div>

    <!-- 内联布局 -->
    <div style="width: 600px;">
      <h4>Inline Layout</h4>
      <ad-form layout="inline">
        <ad-form-item name="keyword" label="关键词">
          <ad-input placeholder="搜索..." />
        </ad-form-item>
        <ad-form-item name="category" label="分类">
          <ad-select
            :options="[
              { label: '全部', value: 'all' },
              { label: '文章', value: 'article' },
              { label: '产品', value: 'product' },
            ]"
            placeholder="选择分类"
          />
        </ad-form-item>
        <ad-form-item>
          <ad-button variant="primary">搜索</ad-button>
        </ad-form-item>
      </ad-form>
    </div>
  </div>
</template>
```
:::

### 浮动标签

使用浮动标签模式，节省空间并提升用户体验。
:::demo
```vue
<template>
  <div style="width: 400px;">
    <h4>Floating Label Mode</h4>
    <ad-form floating-label>
      <ad-form-item name="username" label="用户名" required>
        <ad-input />
      </ad-form-item>
      <ad-form-item name="email" label="邮箱">
        <ad-input />
      </ad-form-item>
      <ad-form-item name="password" label="密码" required>
        <ad-input type="password" />
      </ad-form-item>
      <ad-form-item>
        <ad-button type="submit" variant="primary" style="width: 100%;">登录</ad-button>
      </ad-form-item>
    </ad-form>
  </div>
</template>
```
:::

### 表单验证

支持多种验证规则，包括必填、长度、正则表达式、邮箱、URL等。
:::demo
```vue
<template>
  <div style="width: 400px;">
    <h4>Form Validation</h4>
    <ad-form
      @finish="handleFinish"
      @finish-failed="handleFinishFailed"
    >
      <ad-form-item
        name="username"
        label="用户名"
        required
        :rules="[
          { min: 3, message: '用户名至少3个字符' },
          { max: 20, message: '用户名最多20个字符' },
        ]"
      >
        <ad-input placeholder="3-20个字符" />
      </ad-form-item>
      <ad-form-item
        name="email"
        label="邮箱"
        required
        :rules="[{ type: 'email', message: '请输入有效的邮箱地址' }]"
      >
        <ad-input placeholder="example@email.com" />
      </ad-form-item>
      <ad-form-item
        name="password"
        label="密码"
        required
        :rules="[
          { min: 8, message: '密码至少8个字符' },
          { pattern: /[A-Z]/, message: '密码需包含大写字母' },
          { pattern: /[0-9]/, message: '密码需包含数字' },
        ]"
        help="密码至少8位，需包含大写字母和数字"
      >
        <ad-input type="password" placeholder="输入密码" />
      </ad-form-item>
      <ad-form-item
        name="website"
        label="个人网站"
        :rules="[{ type: 'url', message: '请输入有效的URL' }]"
      >
        <ad-input placeholder="https://example.com" />
      </ad-form-item>
      <ad-form-item name="agree" required :rules="[{ required: true, message: '请同意服务条款' }]">
        <ad-checkbox>我同意服务条款</ad-checkbox>
      </ad-form-item>
      <ad-form-item>
        <ad-button type="submit" variant="primary">注册</ad-button>
      </ad-form-item>
    </ad-form>
  </div>
</template>

<script setup>
const handleFinish = (values) => {
  alert('验证通过！\n' + JSON.stringify(values, null, 2));
};

const handleFinishFailed = (errors) => {
  console.log('验证失败:', errors);
};
</script>
```
:::

### 使用 useForm Hook

通过 useForm Hook 获取表单实例，实现更复杂的表单操作。
:::demo
```vue
<template>
  <div style="width: 400px;">
    <h4>Using useForm Hook</h4>
    <ad-form :form="form">
      <ad-form-item name="name" label="姓名" required>
        <ad-input placeholder="请输入姓名" />
      </ad-form-item>
      <ad-form-item name="email" label="邮箱" :rules="[{ type: 'email' }]">
        <ad-input placeholder="请输入邮箱" />
      </ad-form-item>
      <ad-form-item name="age" label="年龄">
        <ad-input placeholder="请输入年龄" />
      </ad-form-item>
      <ad-form-item>
        <div style="display: flex; gap: 8px;">
          <ad-button @click="handleFill">填充数据</ad-button>
          <ad-button @click="handleReset">重置</ad-button>
          <ad-button variant="primary" @click="handleValidate">验证</ad-button>
        </div>
      </ad-form-item>
    </ad-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useForm } from '@apron-design/vue-next';

const form = useForm();

const handleFill = () => {
  form.setFieldsValue({
    name: '张三',
    email: 'zhangsan@example.com',
    age: '25',
  });
};

const handleReset = () => {
  form.resetFields();
};

const handleValidate = async () => {
  try {
    const values = await form.validateFields();
    alert('验证通过！\n' + JSON.stringify(values, null, 2));
  } catch (errors) {
    console.log('验证失败:', errors);
  }
};
</script>
```
:::

### 初始值

为表单设置初始值，并监听值的变化。
:::demo
```vue
<template>
  <div style="width: 400px;">
    <h4>With Initial Values</h4>
    <ad-form
      :initial-values="{
        username: 'admin',
        email: 'admin@example.com',
        role: 'admin',
      }"
      @values-change="handleValuesChange"
    >
      <ad-form-item name="username" label="用户名">
        <ad-input />
      </ad-form-item>
      <ad-form-item name="email" label="邮箱">
        <ad-input />
      </ad-form-item>
      <ad-form-item name="role" label="角色">
        <ad-select
          :options="[
            { label: '管理员', value: 'admin' },
            { label: '用户', value: 'user' },
            { label: '访客', value: 'guest' },
          ]"
        />
      </ad-form-item>
    </ad-form>
  </div>
</template>

<script setup>
const handleValuesChange = (changed, all) => {
  console.log('Changed:', changed, 'All:', all);
};
</script>
```
:::

## API

### ad-form

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| initial-values | 初始值 | `Partial<T>` | - |
| layout | 表单布局 | `'horizontal' \| 'vertical' \| 'inline'` | `'vertical'` |
| floating-label | 是否使用浮动标签 | `boolean` | `false` |
| label-width | 标签宽度（horizontal 布局时有效） | `number \| string` | - |
| label-align | 标签对齐方式 | `'left' \| 'right'` | `'right'` |
| disabled | 是否禁用整个表单 | `boolean` | `false` |

### ad-form-item

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 字段名 | `string` | - |
| label | 标签文本 | `string` | - |
| required | 是否必填（显示红色星号） | `boolean` | `false` |
| rules | 验证规则 | `ValidationRule[]` | `[]` |
| floating-label | 是否使用浮动标签（覆盖 Form 级别设置） | `boolean` | - |
| help | 帮助文本 | `string` | - |
| extra | 额外提示 | `string` | - |
| no-label | 是否隐藏标签 | `boolean` | `false` |
| label-width | 标签宽度（覆盖 Form 级别设置） | `number \| string` | - |
| value-prop-name | 值属性名 | `string` | `'value'` |
| trigger | 触发方式 | `string` | `'onChange'` |
| validate-trigger | 值收集触发方式 | `string \| string[]` | `'onBlur'` |

### useForm

获取表单实例的 Hook。

```typescript
const form = useForm();
```

### FormInstance

| 方法 | 说明 | 类型 |
| --- | --- | --- |
| getFieldValue | 获取字段值 | `(name: keyof T) => unknown` |
| getFieldsValue | 获取所有字段值 | `() => T` |
| setFieldValue | 设置字段值 | `(name: keyof T, value: unknown) => void` |
| setFieldsValue | 设置多个字段值 | `(values: Partial<T>) => void` |
| resetFields | 重置字段 | `() => void` |
| validateFields | 验证所有字段 | `() => Promise<T>` |
| validateField | 验证单个字段 | `(name: keyof T) => Promise<unknown>` |
| getFieldError | 获取字段错误 | `(name: keyof T) => string \| undefined` |
| getFieldsError | 获取所有字段错误 | `() => Record<keyof T, string \| undefined>` |
| isFieldTouched | 字段是否被触摸过 | `(name: keyof T) => boolean` |
| isFieldValidating | 字段是否正在验证 | `(name: keyof T) => boolean` |
| submit | 提交表单 | `() => void` |

### ValidationRule

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| required | 是否必填 | `boolean` |
| message | 错误信息 | `string` |
| min | 最小长度 | `number` |
| max | 最大长度 | `number` |
| pattern | 正则表达式 | `RegExp` |
| validator | 自定义验证器 | `(value: unknown) => Promise<void> \| void` |
| type | 类型验证 | `'string' \| 'number' \| 'email' \| 'url'` |