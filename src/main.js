import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
// ui component
import Navbar from '@/components/Navbar'
import Dropdown from '@/components/Dropdown'
import Button from '@/components/Button'
import Text from '@/components/form/Text'
import Area from '@/components/form/Area'
import Select from '@/components/form/Select'
import File from '@/components/form/File'
import Alert from '@/components/Alert'
import Cards from '@/components/Card'
import Sidebar from '@/components/Sidebar'
import ButtonIcon from '@/components/ButtonIcon'
import Tabs from '@/components/Tabs'
import Collapse from '@/components/Collapse'
import Modal from '@/components/Modal'
import Footer from '@/components/Footer'

const app = createApp(App)
app.component('Navbar', Navbar)
app.component('Dropdown', Dropdown)
app.component('Button', Button)
app.component('Text', Text)
app.component('Area', Area)
app.component('Select', Select)
app.component('File', File)
app.component('Alert', Alert)
app.component('Cards', Cards)
app.component('Sidebar', Sidebar)
app.component('ButtonIcon', ButtonIcon)
app.component('Tabs', Tabs)
app.component('Collapse', Collapse)
app.component('Modal', Modal)
app.component('Footer', Footer)
app.use(router)
app.mount('#app')
