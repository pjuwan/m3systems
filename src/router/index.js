import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import MobileHome from '@/views/MobileHome.vue'
import Menu from './menu'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...Menu,
    {
      path: '/',
      component: Home,
      name: 'Home'
    },
    {
      path: '/mobile',
      component: MobileHome,
      name: 'MobileHome'
    }
  ],
});

export default router;