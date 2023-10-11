<template>
  <div id="app">
    <template v-if="isMobile">
      <MobileHeader />
      <router-view :isMobileDevice="isMobileDevice" />
      <ScrollToTopButton />
      <MobileFooter />
    </template>
    <template v-else>
      <Header />
      <router-view />
      <ScrollToTopButton />
      <Footer />
    </template>
  </div>
</template>

<script>
import ScrollToTopButton from './components/ScrollToTopButton.vue'
import MobileHeader from '@/components/MobileHeader.vue'
import MobileFooter from '@/components/MobileFooter.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import store from '@/store'

export default {
  name: 'App',
  components: {
    MobileHeader,
    MobileFooter,
    ScrollToTopButton,
    Header,
    Footer
  },
  data() {
    return {
      isMobileDevice: false
    };
  },
  mounted() {
    const userAgent = navigator.userAgent;
    console.log(userAgent);

    // 사용자 에이전트 문자열을 기반으로 PC 또는 모바일 판단
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      this.isMobileDevice = true;
    }

    window.addEventListener('resize', this.setRouterConfig);
    this.setRouterConfig();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setRouterConfig);
  },
  computed: {
    isMobile() {
      return store.state.isMobile;
    }
  },
  methods: {
    setRouterConfig() {
      store.commit('setMobileStatus');
      const currentRouteName = this.$route.name;
      let name = `${this.isMobile ? 'Mobile' : ''}${currentRouteName.replace('Mobile', '')}`;
      this.$router.push({ name: name });
    },
  },  
}
</script>
