import { createApp } from 'vue';
import App from './App.vue';
import store from './store/store'; 
import router from './router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


createApp(App)
  .use(store)
  .use(router)
  .mount('#app');

const token = store.getters.token;
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}