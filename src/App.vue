<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import Main from './page/mobile/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const isMobile = this.isMobile();
      console.log(isMobile);
    },
    isMobile() {
      const userAgent = navigator.userAgent;
      let isCheck = false;

      console.log(userAgent);

      // 사용자 에이전트 문자열을 기반으로 PC 또는 모바일 판단
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        isCheck = true;
      }

      return isCheck;
    }
  }
}
</script>
