import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import "@/assets/scss/globals.scss"
import "@/assets/scss/common.scss"
import "@/assets/scss/style.scss"
import "@/assets/scss/mobile.scss"

// Session Storage에서 menuId 로드
const savedMenuId = sessionStorage.getItem('menuId');
if (savedMenuId) {
  store.commit('setMenuId', savedMenuId);
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
