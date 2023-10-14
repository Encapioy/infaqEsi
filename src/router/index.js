import { createRouter, createWebHistory } from 'vue-router'
import { useToken } from "../stores/auth.js"
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/infaq-payment/:id',
      name: 'infaq-payment',
      component: () => import('../views/PaymentView.vue')
    },
    {
      path: '/infaq-login',
      name: 'infaq-login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/infaq-find/:id',
      name: 'infaq-find',
      component: () => import('../views/FindView.vue')
    },
    {
      path: '/infaq-add',
      name: 'infaq-add',
      component: () => import('../views/AddView.vue')
    },
    {
      path: '/infaq-edit/:id',
      name: 'infaq-edit',
      component: () => import('../views/EditView.vue')
    },
  ]
})

export default router
