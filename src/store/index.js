import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMobile: false,
    isScrolltoTop: true
  },
  mutations: {
    setMobileStatus(state) {
      state.isMobile = window.innerWidth <= 768;
    },
    setScrolltoTop(state, value) {
      state.isScrolltoTop = value;
    }
  },
});