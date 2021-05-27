import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GettingStarted from '../views/GettingStarted.vue'

import AlertDoc from '../views/component/AlertDoc.vue'
import ButtonDoc from '../views/component/ButtonDoc.vue'
import CardDoc from '../views/component/CardDoc.vue'
import DropdownDoc from '../views/component/DropdownDoc.vue'
import FormDoc from '../views/component/FormDoc.vue'
import NavDoc from '../views/component/NavDoc.vue'
import SidebarDoc from '../views/component/SidebarDoc.vue'
import FirebaseLoginDoc from '../views/page/FirebaseLoginDoc.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/docs/getting-started',
    name: 'GettingStarted',
    component: GettingStarted
  },
  {
    path: '/component/alert',
    name: 'AlertDoc',
    component: AlertDoc
  },
  {
    path: '/component/button',
    name: 'ButtonDoc',
    component: ButtonDoc
  },
  {
    path: '/component/card',
    name: 'CardDoc',
    component: CardDoc
  },
  {
    path: '/component/dropdown',
    name: 'DropdownDoc',
    component: DropdownDoc
  },
  {
    path: '/component/form',
    name: 'FormDoc',
    component: FormDoc
  },
  {
    path: '/component/nav',
    name: 'NavDoc',
    component: NavDoc
  },
  {
    path: '/component/sidebar',
    name: 'SidebarDoc',
    component: SidebarDoc
  },
  {
    path: '/page/firebase-login',
    name: 'FirebaseLoginDoc',
    component: FirebaseLoginDoc
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
