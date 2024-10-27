import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/favor',
      component: () => import('@/views/FavorView.vue')
    },
  ]
})

export default router
