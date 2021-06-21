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
const GettingStarted = () => import('../views/GettingStarted.vue')
const AlertDoc = () => import('../views/component/AlertDoc.vue')
const ButtonDoc = () => import('../views/component/ButtonDoc.vue')
const CardDoc = () => import('../views/component/CardDoc.vue')
const DropdownDoc = () => import('../views/component/DropdownDoc.vue')
const FormDoc = () => import('../views/component/FormDoc.vue')
const NavDoc = () => import('../views/component/NavDoc.vue')
const SidebarDoc = () => import('../views/component/SidebarDoc.vue')
const TabsDoc = () => import('../views/component/TabsDoc.vue')
const CollapseDoc = () => import('../views/component/CollapseDoc.vue')
const ModalDoc = () => import('../views/component/ModalDoc.vue')
const FirebaseLoginDoc = () => import('../views/page/FirebaseLoginDoc.vue')
const FirebaseRegisterDoc = () => import('../views/page/FirebaseRegisterDoc.vue')

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
    path: '/component/tabs',
    name: 'TabsDoc',
    component: TabsDoc
  },
  {
    path: '/component/collapse',
    name: 'CollapseDoc',
    component: CollapseDoc
  },
  {
    path: '/component/modal',
    name: 'ModalDoc',
    component: ModalDoc
  },
  {
    path: '/page/firebase-login',
    name: 'FirebaseLoginDoc',
    component: FirebaseLoginDoc
  },
  {
    path: '/page/firebase-register',
    name: 'FirebaseRegisterDoc',
    component: FirebaseRegisterDoc
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
