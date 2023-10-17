import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/index.vue'),
  },
  // 添加默认路由
  {
    path: '/:catchAll(.*)', // 匹配所有路径
    redirect: '/', // 重定向到首页
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
