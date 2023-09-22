<template>
  <div id="app">
    <template v-if="isMobile">
      <MobileHeader />
      <MobileMain />
      <MobileFooter />
    </template>
    <template v-else>
      <Header />
      <Main />
      <Footer />
    </template>
  </div>
</template>

<script>
import MobileHeader from '@/components/MobileHeader.vue'
import MobileMain from '@/views/MobileMain.vue'
import MobileFooter from '@/components/MobileFooter.vue'
import Header from '@/components/Header.vue'
import Main from '@/views/Main.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    MobileHeader,
    MobileMain,
    MobileFooter,
    Header,
    Main,
    Footer
  },
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    const userAgent = navigator.userAgent;
    console.log(userAgent);

    // 사용자 에이전트 문자열을 기반으로 PC 또는 모바일 판단
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      this.isMobile = true;
    }

    window.addEventListener('resize', this.handleWindowSize);
    this.handleWindowSize(); // 초기 로드 시 크기 확인    
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowSize);
  },
  methods: {
    handleWindowSize() {
      if (window.innerWidth <= 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },  
}
</script>
