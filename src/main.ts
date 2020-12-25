import "./assets/icon/iconfont.css";
import { createApp } from 'vue'
import Router from '@/router';
import App from './App.vue'
import Element3 from 'element3';

createApp(App)
  .use(Element3)
  .use(Router)
  .mount('#app')
