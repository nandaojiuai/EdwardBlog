import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/dark/css-vars.css'

// 全局禁止 F12 键
// window.addEventListener('keydown', function (event) {
//   if (event.key === 'F12') {
//     event.preventDefault()
//   }
// })
//
// // 全局禁止右键菜单
// window.addEventListener('contextmenu', function (event) {
//   event.preventDefault()
// })
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.mount('#app')
