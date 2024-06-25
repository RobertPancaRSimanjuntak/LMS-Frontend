import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/global.css';
import router from './router/index';
import '@fortawesome/fontawesome-free/css/all.css';
import store from './Stores/stores';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
