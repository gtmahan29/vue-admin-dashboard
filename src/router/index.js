import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Posts from '../views/Posts.vue'
import Users from '../views/Users.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    }
  ]
})

export default router
