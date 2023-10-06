<template>
  <div v-if="isScrolltoTop" class="scroll-to-top" @click="scrollToTop()">
    <img src="@/assets/img/common/top.svg" />
  </div>
</template>
<script>
import store from '@/store'

export default {
  name: 'ScrollToTopButton',
  computed: {
    isScrolltoTop() {
      return store.state.isScrolltoTop;
    }
  },  
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>