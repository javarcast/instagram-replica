import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import '@/assets/css/global.css';
import FontAwesomeIcon from './utils/fontawesome';

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
