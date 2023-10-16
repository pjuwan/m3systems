import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import MobileHome from '@/views/MobileHome.vue'
import Menu from './menu'
import store from '@/store'

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

// 페이지 상단으로 스크롤하는 함수
function scrollToTop() {
  window.scrollTo(0, 0); // 가로 스크롤 위치와 세로 스크롤 위치를 (0, 0)으로 설정
}

// 페이지 이동 후 페이지를 상단으로 스크롤
router.afterEach((to, from) => {
  if (!(from.params?.id || to.params?.id)) {
    store.commit('setSearch', null);
    store.commit('setCurrentPage', null);
  }
  scrollToTop();
});

export default router;