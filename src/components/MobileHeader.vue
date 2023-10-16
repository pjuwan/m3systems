<template>
  <div class="mobile-header" :class="{overlap: showMenu}">
    <div class="menu-kor">
      <div class="overlap-group-wrapper">
        <div class="overlap-group">
          <div class="logo-area">
            <div class="title" @click="goMenu('MobileHome', '')">M House</div>
            <img @click="showMenuList()" src="@/assets/img/common/menu.svg"/>
          </div>
          <ul class="menu-list">
            <li>
              <span @click="goMenu('MobileBrandStory', 'M100')">브랜드스토리</span>
            </li>
            <li>
              <span @click="goMenu('MobileHouseModelList', 'M200')">전체모델</span>
              <ul class="submenu">
                <li>
                  <span @click="goMenu('MobileHouseModelList', 'M201')">프리미엄모델</span>
                </li>
                <li>
                  <span @click="goMenu('MobileHouseModelList', 'M202')">스탠다드모델</span>
                </li>
              </ul>
            </li>
            <li>
              <span @click="goMenu('MobileQuestion', 'M300')">문의하기</span>
            </li>
          </ul>
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