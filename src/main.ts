import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/index.less'
import 'normalize.css'

import router from './router'
import store, { setupStore } from './store'

import { globalRegister } from './global'

const app = createApp(App)
app.use(globalRegister)

setupStore()
app.use(router).use(store).mount('#app')
