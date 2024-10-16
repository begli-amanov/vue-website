import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Primevue
import Aura from '@primevue/themes/aura'
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },

  ripple: true,
})
app.mount('#app')
