<template>
  <div class="mobile-header" :class="{overlap: showMenu}">
    <div class="menu" v-if="!showMenu">
      <div class="text-wrapper-3" @click="goMenu('MobileHome')">M House</div>
        <div class="group-wrapper" @click="showMenuList()">
          <div class="group-2">
          <div class="rectangle"></div>
          <div class="rectangle-2"></div>
          <div class="rectangle-3"></div>
        </div>
      </div>
    </div>
    <div class="menu-kor" v-if="showMenu">
      <div class="overlap-group-wrapper">
        <div class="overlap-group">
          <div class="group"><div class="text-wrapper">English</div></div>
          <div class="div">
            <div class="title" @click="goMenu('MobileHome')">M House</div>
            <div class="group-wrapper" @click="showMenuList()">
              <div class="group-2">
                <div class="rectangle"></div>
                <div class="rectangle-2"></div>
                <div class="rectangle-3"></div>
              </div>
            </div>
          </div>
          <div class="text-wrapper-2" @click="goMenu('MobileBrandStory')">브랜드스토리</div>
          <div class="menu-wrapper" @click="goMenu('MobileHouseModelList')">전체모델</div>
          <div class="div-wrapper"><div class="text-wrapper" @click="goMenu('MobileQuestion')">문의하기</div></div>
          <div class="text-wrapper-4">프리미엄모델</div>
          <div class="text-wrapper-5">스탠다드모델</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MobileHeader',
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    showMenuList() {
      this.showMenu = !this.showMenu;
    },
    goMenu(menuNm) {
      this.showMenu = false;
      this.$router.push({ name: menuNm });
    }
  }
}
</script>