<template>
  <div class="header" :class="{ 'hovered': isHovered }">
    <div class="menu">
      <!--<img class="earth-globe" src="@/assets/img/earth-globe-1-1.png" />-->
      <h2 class="logo" @click="goMenu('Home')">M House</h2>
      <div class="name">
        <span>브랜드스토리</span>
      </div>
      <div class="name submenu" @mouseover="isHovered = true" @mouseleave="isHovered = false">
        <span>전체모델</span>
        <div class="dropdown" :class="{ 'hovered': isHovered }" @mouseover="isHovered = true" @mouseleave="isHovered = false">
          <div class="name">프리미엄 모델</div>
          <div class="name">스탠다드 모델</div>
        </div>
      </div>
      <div class="name" @click="goMenu('Question')">
        <span>문의하기</span>
      </div>
    </div>
    <!--<img class="union" src="@/assets/img/union.png" />-->
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      isHovered: false
    }
  },
  methods: {
    goMenu(menuNm) {
      this.$router.push({ name: menuNm });
    }
  }  
}
</script>