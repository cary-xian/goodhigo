import { createRouter, createWebHistory } from 'vue-router'
import Recomend from '../views/recommend.vue'
import SuperMarket from '../views/supermarket.vue'
import Traval from '../views/traval.vue'
import Mab from '../views/mami&body.vue'
import Insurance from '../views/insurance.vue'
import Mobile from '../views/mobile.vue'

const routes = [
  {
    path:"/", 
    // 重定向
    redirect:'home'
  },
  {
    path: '/home',
    name: 'home',
    component: Recomend
  },
  {
    path: '/market',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component:SuperMarket
  }, 
  {
    path: '/insurance',
    name: 'Insurance',
    component: Insurance
  },
  {
    path: '/mab',
    name: 'mab',
    component: Mab
  },
  {
    path: '/traval',
    name: 'traval',
    component: Traval
  },
  {
    path: '/mobile',
    name: 'moblie',
    component: Mobile
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
