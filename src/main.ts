import './assets/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './views/App.vue'
import router from './router'
import axios from 'axios'
const app = createApp(App)

app.use(createPinia())
app.use(router,axios)

app.mount('#app')
