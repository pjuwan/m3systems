import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import MobileHome from '@/views/MobileHome.vue'
import Menu from './menu'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
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

// 페이지 이동 후 처리
router.afterEach((to, from) => {
  // 모델 ID 존재시 검색상태 유지
  if (!(from.params?.id || to.params?.id)) {
    store.commit('searchParams', null);
  }

  scrollToTop();
});

export default router;