import { createRouter, createWebHistory } from 'vue-router';
// import Blog from '@/views/home/index.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/blog'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/views/login/index.vue")
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import("@/views/home/index.vue")
    },
    {
      path: '/:w+',
      name: '404',
      component: () => import("@/views/404/index.vue")
    }
  ]
})
