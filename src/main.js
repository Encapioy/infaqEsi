import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// Storage URL
app.config.globalProperties.storage = import.meta.env.VITE_BASE_URL + '/storage'

app.mount('#app')