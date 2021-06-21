import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

/*import ButtonDoc from '../views/component/ButtonDoc.vue'
import CardDoc from '../views/component/CardDoc.vue'
import DropdownDoc from '../views/component/DropdownDoc.vue'
import FormDoc from '../views/component/FormDoc.vue'
import NavDoc from '../views/component/NavDoc.vue'
import SidebarDoc from '../views/component/SidebarDoc.vue'
import TabsDoc from '../views/component/TabsDoc.vue'
import CollapseDoc from '../views/component/CollapseDoc.vue'
import ModalDoc from '../views/component/ModalDoc.vue'
import FirebaseLoginDoc from '../views/page/FirebaseLoginDoc.vue'
import FirebaseRegisterDoc from '../views/page/FirebaseRegisterDoc.vue'*/

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/docs/getting-started',
    name: 'GettingStarted',
    component: import('../views/GettingStarted.vue')
  },
  {
    path: '/component/alert',
    name: 'AlertDoc',
    component: import('../views/component/AlertDoc.vue')
  },
  {
    path: '/component/button',
    name: 'ButtonDoc',
    component: import('../views/component/ButtonDoc.vue')
  },
  {
    path: '/component/card',
    name: 'CardDoc',
    component: import('../views/component/CardDoc.vue')
  },
  {
    path: '/component/dropdown',
    name: 'DropdownDoc',
    component: import('../views/component/DropdownDoc.vue')
  },
  {
    path: '/component/form',
    name: 'FormDoc',
    component: import('../views/component/FormDoc.vue')
  },
  {
    path: '/component/nav',
    name: 'NavDoc',
    component: import('../views/component/NavDoc.vue')
  },
  {
    path: '/component/sidebar',
    name: 'SidebarDoc',
    component: import('../views/component/SidebarDoc.vue')
  },
  {
    path: '/component/tabs',
    name: 'TabsDoc',
    component: import('../views/component/TabsDoc.vue')
  },
  {
    path: '/component/collapse',
    name: 'CollapseDoc',
    component: import('../views/component/CollapseDoc.vue')
  },
  {
    path: '/component/modal',
    name: 'ModalDoc',
    component: import('../views/component/ModalDoc.vue')
  },
  {
    path: '/page/firebase-login',
    name: 'FirebaseLoginDoc',
    component: import('../views/page/FirebaseLoginDoc.vue')
  },
  {
    path: '/page/firebase-register',
    name: 'FirebaseRegisterDoc',
    component: import('../views/page/FirebaseRegisterDoc.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
