# v-clickable

## 说明

使用一个指令就可以让你的文本/字体图标变成可点击的样式。
同时支持 vue2 和 vue3。

## 安装

```bash
npm install v-clickable
```

## 注册指令

**Vue3**

```javascript
// main.js
import { createApp } from 'vue'
import vClickable from 'v-clickable'
import App from './App.vue'

createApp(App).use(vClickable).mount('#app')

```

**Vue2**
```javascript
// main.js
import Vue from 'vue'
import vClickable from 'v-clickable'
...
Vue.use(vClickable)
new Vue({
    ...
})
```

## 使用

```html
<span v-clickable>点击</span>
```

## API

|属性   |说明   |类型|是否必传|默认值 |
|-------|------|----|-------|-------|
|type   |按钮类型，可选值：primary/success/warning/danger/info|string|否|primary|
|button |是否按钮样式，开启则鼠标移入时带浅灰色背景。与 link 不能同时传。|boolean|否|false|
|link   |是否链接样式，开启则有下划线。与 button 不能同时传。|boolean|否|false|

**例子**

```html
<span v-clickable="{
    type: 'warning',
    link: true
}">点击</span>
```