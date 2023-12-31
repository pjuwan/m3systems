import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMobile: false,
    isScrolltoTop: true,
    menuId: '',
    search: null,
    currentPage: 1
  },
  mutations: {
    /* innerWidth 768px 기준으로 Mobile 여부에 대한 설정 */
    setMobileStatus(state) {
      state.isMobile = window.innerWidth <= 768;
    },
    /* 스크롤을 보여줄지에 대한 설정 */
    setScrolltoTop(state, value) {
      state.isScrolltoTop = value;
    },
    /* 현재 메뉴 위치 설정 */
    setMenuId(state, value) {
      state.menuId = value;
      sessionStorage.setItem('menuId', value);
    },
    /* 검색 상태 관리 */
    searchParams(state, value) {
      state.search = value?.search || null;
      state.currentPage = value?.currentPage || 1;
    }
  },
});