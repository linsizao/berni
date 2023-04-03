## berni-ui

---

vue3+ts+vite 组件库模板

ps:

- 组件需要暴露 name 属性，可使用 `defineOptions({ name: 'xxx' })` 方法
  external: ['vue', /\.less/, '@berni-ui/utils', 'ant-design-vue'],
- 第三方库需要排除在了打包内容外，在 vite.config.ts 添加 `build.rollupOptions.external` 选项
