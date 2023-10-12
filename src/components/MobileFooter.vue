<template>
  <div class="mobile-footer">
    <div class="overlap-wrapper">
      <div class="overlap-5">
        <div class="left">
          <img class="rectangle" src="@/assets/img/rectangle-129.png" />
          <div class="text-wrapper-10">주식회사 엠쓰리시스템즈</div>
          <div class="flexcontainer">
            <p class="text">
              <span class="span">사업자등록번호 : 221-88-02146&nbsp;&nbsp; |&nbsp;&nbsp; 대표자: 김인한<br /></span>
            </p>
            <p class="text">
              <span class="span">[서울사무소]서울시 서초구 서초중앙로 188 아크로비스타 사무동 L-422호<br /></span>
            </p>
            <p class="text">
              <span class="span">[기술연구소] 서울시 서초구 서초중앙로 188 아크로비스타 사무동 L-410호<br /></span>
            </p>
            <p class="text"><span class="span">대표전화: +82-2-595-0203</span></p>
          </div>
        </div>
        <div class="right">
          <div class="box">
            <div class="overlap-group-wrapper">
              <div class="overlap-group">
                <div class="ellipse-2"></div>
                <div class="ellipse"></div>
              </div>
            </div>
            <a href="https://www.youtube.com/@m3systems537" target="_blank" rel="noopener noreferrer">
              <div class="vector-wrapper">
                <img class="vector" src="@/assets/img/vector-27.svg" />
              </div>
            </a>
            <img class="img" src="@/assets/img/rectangle-131.png" />
          </div>
          <div class="flexcontainer">
            <p class="text">
              <span class="text-wrapper-3" @click="isShowTermsOfService = true">이용약관&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
              <span class="text-wrapper-4">|</span>
              <span class="text-wrapper-3" @click="isShowPrivecyPolicy = true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 개인정보처리방침침 </span>
            </p>
            <p class="text">Copyright 2023 m3systems.All Rights Reserved.</p>
          </div>
        </div>        
      </div>
    </div>
    <privacy-policy v-if="isShowPrivecyPolicy" @close="isShowPrivecyPolicy = false"/>
    <terms-of-service v-if="isShowTermsOfService" @close="isShowTermsOfService = false"/>
  </div>
</template>
<script>
import PrivacyPolicy from '@/components/PrivacyPolicy.vue';
import TermsOfService from '@/components/TermsOfService.vue';

export default {
  name: 'MobileFooter',
  components: { PrivacyPolicy, TermsOfService },
  data() {
    return {
      isShowPrivecyPolicy: false,
      isShowTermsOfService: false
    }
  },
  methods: {
  }
}
</script>
<style scoped>
  a {
    display: inline-flex;
    padding: 3px 0;    
  }
</style>