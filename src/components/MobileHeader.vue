<template>
  <div class="mobile-header" :class="{overlap: showMenu}">
    <div class="menu-kor">
      <div class="overlap-group-wrapper">
        <div class="overlap-group">
          <div class="div">
            <div class="title" @click="goMenu('MobileHome', '')">M House</div>
            <div class="group-wrapper" @click="showMenuList()">
              <div class="group-2">
                <div class="rectangle"></div>
                <div class="rectangle-2"></div>
                <div class="rectangle-3"></div>
              </div>
            </div>
          </div>
          <div class="text-wrapper-2" @click="goMenu('MobileBrandStory', 'M100')">브랜드스토리</div>
          <div class="menu-wrapper" @click="goMenu('MobileHouseModelList', 'M200')">전체모델</div>
          <div class="div-wrapper">
            <div class="text-wrapper" @click="goMenu('MobileQuestion', 'M300')">문의하기</div>
          </div>
          <div class="text-wrapper-4" @click="goMenu('MobileHouseModelList', 'M201')">프리미엄모델</div>
          <div class="text-wrapper-5" @click="goMenu('MobileHouseModelList', 'M202')">스탠다드모델</div>
          <div class="group"><div class="text-wrapper">English</div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store';

export default {
  name: 'MobileHeader',
  data() {
    return {
      showMenu: false
    }
  },
  beforeDestroy() {
    document.body.classList.remove('hidden');
  },  
  methods: {
    showMenuList() {
      this.showMenu = !this.showMenu;

      // 메뉴 위치 고정
      if (this.showMenu) {
        document.body.classList.add('hidden');
      } else {
        document.body.classList.remove('hidden');
      }
    },
    goMenu(menuNm, menuId) {
      this.showMenu = false;
      store.commit('setMenuId', menuId);
      document.body.classList.remove('hidden');
      this.$router.push({ name: menuNm });
    }
  }
}
</script>