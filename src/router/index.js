import Home from '../views/Home.vue'
import { createRouter, createWebHistory  } from 'vue-router'

const history = createWebHistory()
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/products',
    name: 'Products',

    component: () => import('../views/Product/Index.vue'),
    meta: {
      layout: 'default'
    }
  }

]
const router = createRouter({
  linkActiveClass: 'active',
  history,
  routes
})

export { router }
