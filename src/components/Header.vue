<template>
  <div class="header" :class="{ 'hovered': isHovered }">
    <h2 class="logo" @click="goMenu('Home', '')">M House</h2>
    <div class="menu">
      <!--<img class="earth-globe" src="@/assets/img/earth-globe.png" />-->
      <div class="name">
        <span :class="{selected: menuId === 'M100'}" @click="goMenu('BrandStory', 'M100')">브랜드스토리</span>
      </div>
      <div 
        class="name submenu"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <span :class="{selected: menuId.startsWith('M2')}" @click="goMenu('HouseModelList', 'M200')">전체모델</span>
        <div class="dropdown" :class="{ 'hovered': isHovered }" @mouseover="isHovered = true" @mouseleave="isHovered = false">
          <span class="name" @click="goMenu('HouseModelList', 'M201')">프리미엄 모델</span>
          <span class="name" @click="goMenu('HouseModelList', 'M202')">스탠다드 모델</span>
        </div>        
      </div>
      <div class="name">
        <span :class="{selected: menuId === 'M300'}" @click="goMenu('Question', 'M300')">문의하기</span>
      </div>
    </div>
    <!--<img class="union" src="@/assets/img/union.png" />-->
  </div>
</template>
<script>
import store from '@/store';

export default {
  name: 'Header',
  data() {
    return {
      isHovered: false
    }
  },
  computed: {
    menuId() {
      return store.state.menuId;
    }
  },
  methods: {
    goMenu(menuNm, menuId) {
      store.commit('setMenuId', menuId);
      this.$router.push({ name: menuNm });
    }
  }  
}
</script>