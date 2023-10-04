<template>
  <div class="header" :class="{ 'hovered': isHovered }">
    <h2 class="logo" @click="goMenu('Home', '')">M House</h2>
    <div class="menu">
      <!--<img class="earth-globe" src="@/assets/img/earth-globe-1-1.png" />-->
      <div
        class="name"
        @click="goMenu('BrandStory', '001')"
      >
        <span :class="{selected: menuId === '001'}">브랜드스토리</span>
      </div>
      <div 
        class="name submenu"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
        @click="goMenu('HouseModelList', '002')"
      >
        <span :class="{selected: menuId === '002'}">전체모델</span>
        <div class="dropdown" :class="{ 'hovered': isHovered }" @mouseover="isHovered = true" @mouseleave="isHovered = false">
          <div class="name">프리미엄 모델</div>
          <div class="name">스탠다드 모델</div>
        </div>
      </div>
      <div
        class="name"
        @click="goMenu('Question', '003')"
      >
        <span :class="{selected: menuId === '003'}">문의하기</span>
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
      isHovered: false,
      menuId: ''
    }
  },
  methods: {
    goMenu(menuNm, menuId) {
      this.menuId = menuId;
      this.$router.push({ name: menuNm });
    }
  }  
}
</script>