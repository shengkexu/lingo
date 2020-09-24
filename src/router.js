import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './pages/home.vue'
import Case from './pages/case.vue'

const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home', component: Home},
  {path: '/case/:id', component: Case},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
