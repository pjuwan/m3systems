<template>
  <div class="header">
    <div class="overlap-2">
      <!--<img class="earth-globe" src="@/assets/img/earth-globe-1-1.png" />-->
      <div class="text-wrapper-11" @click="goMenu('Home')">M House</div>
      <div class="text-wrapper-12" @click="goMenu('Question')">문의하기</div>
      <div class="text-wrapper-12">브랜드스토리</div>
      <div class="text-wrapper-12">전체모델</div>
    </div>
    <!--<img class="union" src="@/assets/img/union.png" />-->
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {}
  },
  methods: {
    goMenu(menuNm) {
      this.$router.push({ name: menuNm });
    }
  }  
}
</script>