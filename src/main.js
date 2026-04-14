import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'
import { authStore } from './stores/auth'

inject()
injectSpeedInsights()

// Inizializza auth prima di montare l'app:
// popola authStore.user/profile e risolve authReady
// in modo che i router guard abbiano lo stato corretto
authStore.init().then(() => {
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
})
