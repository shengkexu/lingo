import { createApp } from 'vue'
import App from './App.vue'
import './style/reset.css'
import './style/main.css'
import router from './router.js'

const app = createApp(App)







app.use(router);
app.mount('#app');
// createApp(App)
// .use(router)
// .mount('#app')
