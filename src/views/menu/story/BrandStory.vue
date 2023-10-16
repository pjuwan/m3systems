<template>
  <div id="brandStroy" class="brand-story-page">
    <vue-scroll-snap>
      <div class="item story-wrapper"> 
        <div class="title-area">
          <span class="name">BRAND STORY</span>
          <span class="desc">M House는 주거에 프리미엄을 더합니다</span>
        </div>      
      </div>
      <div class="item circle-wrapper">
        <div class="time-area">
          <span>시간은 흘러가지만,</span>
          <span>행복은 여기에 머무릅니다.</span>
        </div>
        <div id="animatedBox">
          <div class="box one">
            <div class="round"></div>
            <span>시간</span>
          </div>
          <div class="box two">
            <div class="round"></div>
            <span>노력</span>
          </div>
          <div class="box three">
            <div class="round"></div>
            <span>비용</span>
          </div>
        </div>        
        <div id="circleArea" class="circle-area">
          <div class="circle">
          </div>
          <div id="circleAreaText" class="text">
            <span><strong>끊임없는 연구개발</strong>로 발전시켜온 모듈러 주택</span>
            <span>플랫폼을 통한 <strong>혁신적인 공정 관리</strong></span>
            <span>라이프스타일에 맞춘 <strong>내 삶과 함께하는 공간</strong></span>
          </div>
        </div>      
      </div>
      <div class="item life-wrapper">
        <div class="left">
          <div class="text-area">
            <span class="title">UNIVERSALMODULE</span>
            <span class="life">홀로라이프를 즐기는</span>
            <span class="household">1인 가구</span>
            <img src="@/assets/img/story/line.svg" />
            <span class="text">내면의 성장과 함께하는 일상의 아름다움,</span>
            <span class="text">당신만의 힐링 스페이스가 여기에 있습니다.</span>
          </div>
        </div>
        <div class="right">
          <div class="desc">
            <span>라이프스타일에<strong>딱맞는공간</strong></span>
          </div>
          <div class="image-area">
            <img src="@/assets/img/story/style.png" />
          </div>
        </div>      
      </div>
      <div class="item life-wrapper">
        <div class="left">
          <div class="text-area">
            <span class="title">UNIVERSALMODULE</span>
            <span class="life">넓은 공간을 지향하는</span>
            <span class="household">다인 가구</span>
            <img src="@/assets/img/story/line.svg" />
            <span class="text">나만의 시간과 가족과의 특별한 시간이 공존하는 이곳,</span>
            <span class="text">편안함과 행복이 여기에 있습니다.</span>
          </div>
        </div>
        <div class="right">
          <div class="desc">
            <span>라이프스타일에<strong>딱맞는공간</strong></span>
          </div>
          <div class="image-area">
            <img src="@/assets/img/story/style2.png" />
          </div>
        </div>
      </div>
      <div class="item esg-wrapper">
        <div class="bg"></div>
        <img src="@/assets/img/story/esg.png" />
        <div class="title">
          <span>자연과 공생하는 공간을 연구합니다</span>
          <span class="name">ESG 건축</span>
        </div>
        <div class="txt one">
          <span>ESG, 사회적 책임을 다하는 건축</span>
          <span>지구환경과 동떨어질 수 없다는 게 현재를 살아가는 우리들의 삶입니다.</span>
          <span>전통적인 방식은 건설현장으로 공급되는</span>
          <span>자재의 30%가 건설 폐기물로 남게 됩니다.</span>
        </div>
        <div class="txt two">
          <span>설계, 제조, 관리에서 3R(Relocatable, Reusable, Reliable)</span>
          <span>추구를 통해 사회적 책임을 다할 수 있습니다.</span>
        </div>
        <div class="txt three">
          <span>환경을 생각하고 미래의 세대까지 생각하고 있는</span>
          <span>신뢰 가능한 프리미엄 모듈러 기업입니다.</span>
        </div>        
      </div>
    </vue-scroll-snap>
  </div>
</template>
<script>
import VueScrollSnap from "vue-scroll-snap";
import store from '@/store';

export default {
  name: 'BrandStroy',
  components: {VueScrollSnap},
  mounted() {
    // 스크롤 고정
    store.commit('setScrolltoTop', false);
    document.body.classList.add('hidden');

    const animatedBox = document.getElementById('animatedBox');

    // Box 애니메이션 종료 직후 설정
    animatedBox.addEventListener('animationend', () => {
      const circleArea = document.getElementById('circleArea');
      const circleAreaText = document.getElementById('circleAreaText');
      // 원형 먼저 나타나도록 설정
      circleArea.classList.add('on');

      // 1초 후에 텍스트 문구가 보여지도록 설정
      setTimeout(function() {
        circleAreaText.classList.add('on');
      }, 1000);
    })    
  },
  beforeDestroy() {
    // 스크롤 고정 해제
    document.body.classList.remove('hidden');
    store.commit('setScrolltoTop', true);
  },
  methods: {
  }
}
</script>