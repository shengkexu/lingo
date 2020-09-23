// import { createApp } from 'vue'
// import App from './App.vue'
import Home from './pages/home.vue'
import Case from './pages/case.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home', component: Home},
  {path: '/case', component: Case},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
