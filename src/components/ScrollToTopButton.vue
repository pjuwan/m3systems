<template>
  <div v-if="showButton" class="scroll-to-top" @click="scrollToTop()">
    <img src="@/assets/img/common/top.svg" />
  </div>
</template>
<script>
export default {
  name: 'ScrollToTopButton',
  data() {
    return {
      showButton: true
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>