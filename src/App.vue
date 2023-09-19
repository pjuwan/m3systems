<template>
  <div id="app">
    <MobileMain v-if="isMobile"/>
    <PCMain v-else />
  </div>
</template>

<script>
import MobileMain from './page/mobile/MobileMain.vue'
import PCMain from './page/pc/PCMain.vue'

export default {
  name: 'App',
  components: {
    MobileMain,
    PCMain
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
