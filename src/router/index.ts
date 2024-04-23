import { createRouter, createWebHistory } from 'vue-router'
import RequestsView from '@/views/requests/RequestsView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'requests',
      component: RequestsView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/request-details',
      name: 'request-details',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/requests/RequestDetailsView.vue')
    }
  ]
})

export default router
