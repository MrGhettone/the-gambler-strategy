import './assets/scss/main.scss';
// import 'bootstrap';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

inject();
injectSpeedInsights();

const app = createApp(App)

app.use(router)

app.mount('#app')
