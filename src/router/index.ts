import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import("@/components/login/index.vue")
    },
    {
      path: '/blog',
      component: () => import("@/components/home/index.vue")
    },
    {
      path: '/:w+',
      component: () => import("@/components/404/index.vue")
    }
  ]
})
