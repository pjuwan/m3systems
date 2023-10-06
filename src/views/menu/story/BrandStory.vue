<template>
  <div class="brand-story-page">
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
        <div class="circle-area">
          <div class="circle">
          </div>
          <div class="text">
            <span><strong>끊임없는 연구개발</strong>로 발전시켜온 모듈러 주택</span>
            <span>플랫폼을 통한 <strong>혁신적인 공정 관리</strong></span>
            <span>라이프스타일에 맞춘 <strong>내 삶과 함께하는 공간</strong></span>
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
  
export default {
  name: 'BrandStroy',
  props: {
  },
  components: {VueScrollSnap},  
  data() {
    return {
    }
  },
  created() {
    document.body.classList.add('modal-open');
  },
  beforeDestroy() {
    document.body.classList.remove('modal-open');
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.item {
  /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
  min-height: 1080px;
  &.story-wrapper {
    background-image: url('@/assets/img/story/main.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;    
    .title-area {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 19%;
      left: 36%; 
      .name {
        color: #FFF;
        font-size: 50px;
        font-weight: 600;
        line-height: 121.336%;        
      }
      .desc {
        color: #FFF;
        font-family: Pretendard;
        text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.60);
        font-size: 30px;
        font-weight: 300;     
      }
    }
  }
  &.circle-wrapper {
    display: flex;
    flex-direction: column;
    .time-area {
      display: inline-flex;
      flex-direction: column;
      margin: 175px 0 0 0;
      span {
        display: inline-flex;
        justify-content: center;        
      }
      span:first-child {
        font-size: 59px;
        line-height: 121.336%;
      }
      span:last-child {
        font-size: 59px;
        font-weight: 600;
        line-height: 121.336%;        
      }
    }
    .circle-area {
      display: inline-flex;
      justify-content: center;
      position: relative;
      margin: 27px 0 0 0;      
      .circle {
        border-radius: 739px;
        opacity: 0.15;
        background: #C8C8C8;
        width: 560px;
        height: 560px;
      }
      .text {
        position: absolute;
        top: 35%;
        width: 498px;
        display: grid;
        text-align: center;
        span {
          font-size: 24px;
          line-height: 200.336%;
          letter-spacing: -0.3px;
          strong {
            font-weight: 600;            
          }
        }        
      }
    }
  }
  &.esg-wrapper {
    position: relative;
    span {
      color: #FFF;
      text-align: center;
      font-family: Pretendard;
      font-size: 19px;
      font-style: normal;
      font-weight: 300;  
      line-height: 155.836%; /* 29.609px */
    }
    .bg {
      height: 100%;
      background: rgba(0, 0, 0, 0.40);
      position: absolute;
      width: 100%;  
    }
    .title {
      position: absolute;
      top: 16%;
      left: 5%;
      display: flex;
      flex-direction: column;      
      span {
        font-size: 31.17px;
        font-weight: 100;
        line-height: 99.336%; /* 30.963px */        
      }
      .name {
        font-size: 108.813px;
        font-weight: 900;
        line-height: 90.3%;
        margin-top: 9px;      
      }
    }
    .txt {
      span {
        letter-spacing: -0.19px;
      }
      &.one {
        position: absolute;
        top: 44%;
        left: 8%;
        text-align: center;
        width: 32%;
        display: grid;        
      }
      &.two {
        width: 26%;
        position: absolute;
        top: 56%;
        left: 39%;
        display: grid;        
      }
      &.three {
        width: 23%;
        position: absolute;
        top: 65%;
        left: 62%;
        display: grid;        
      }
    }     
  }
}
.scroll-snap-container {
  height: 1080px;
  width: 100%;
}
</style>