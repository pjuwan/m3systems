<template>
  <div class="footer">
    <div class="group">
      <div class="overlap">
        <div class="left">
          <img class="rectangle" src="@/assets/img/rectangle-129.png" />
          <div class="div">주식회사 엠쓰리시스템즈</div>
          <div class="navbar">
            <p class="text">
              <span class="span">사업자등록번호 : 221-88-02146&nbsp;&nbsp; |&nbsp;&nbsp; 대표자: 김인한<br /></span>
            </p>
            <p class="text">
              <span class="text-wrapper-2">[본사]&nbsp;&nbsp;경상북도 포항시 북구 펑하면 사방공원길 127-16<br /></span>
            </p>
            <p class="text">
              <span class="span"
                >[서울사무소, 기술연구소]&nbsp;&nbsp;서울시 서초구 서초중앙로 188 아크로비스타 사무동 L-422호,
                L-410호<br
              /></span>
            </p>
            <p class="text">
              <span class="span"
                >[제1공장, 제2공장]&nbsp;&nbsp;경기도 이천시 마장면 이치리 146-10, 장암리 688-4<br
              /></span>
            </p>
            <p class="text"><span class="text-wrapper-2">대표전화: +82-2-595-0203</span></p>
          </div>
        </div>
        <div class="right">
          <div class="box">
            <a href="https://www.instagram.com/m3s.korea" target="_blank">
              <div class="overlap-group-wrapper">
                <div class="overlap-group">
                  <div class="ellipse-2"></div>
                  <div class="ellipse"></div>
                </div>
              </div>
            </a>
            <a href="https://www.youtube.com/@m3systems537" target="_blank" rel="noopener noreferrer">
            <div class="vector-wrapper">
                <img class="vector" src="@/assets/img/youbube.svg" />
              </div>
            </a>
            <a href="https://blog.naver.com/m3systems" target="_blank">
              <img class="img" src="@/assets/img/rectangle-131.png" />
            </a>
          </div>
          <p class="p">
            <span class="text-wrapper-3" @click="isShowTermsOfService = true">이용약관&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <span class="text-wrapper-4">|</span>
            <span class="text-wrapper-3" @click="isShowPrivecyPolicy = true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 개인정보처리방침침 </span>
          </p>
          <p class="text-wrapper">Copyright 2023 m3systems.All Rights Reserved.</p>
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
  name: 'Footer',
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