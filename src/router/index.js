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

router.afterEach((to, from) => {
  console.log(router.options.history);
  /*
    const menuStore = useMenuStore();
    const pageStore = usePageStore();
    menuStore.setActiveMenu(to);
    if (router.options.history.state?.dataTableState) {
      pageStore.updatePageState(router.options.history.state?.dataTableState);
    }
    if (router.options.history.state?.searchState) {
      pageStore.updatePageState({
        searchState: router.options.history.state?.searchState,
      });
    }

    const authRequired = !publicRoutes.includes(to.name);
    const cdpAuthenticated = sessionStorage.getItem("cdpAuthenticated");
    if (authRequired && !cdpAuthenticated) {
      location.href = "/";
    }
  */
});

export default router;