<template>
  <div id="mobileBrandStroy" class="brand-story-page">
    <vue-scroll-snap>
      <div class="item story-wrapper"> 
        <img src="@/assets/img/story/main.png" />
        <div class="title-area">
          <span class="name">BRAND STORY</span>
          <span class="desc">M House는 주거에 프리미엄을 더합니다</span>
        </div>
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
        <div class="title-area">
          <span>라이프스타일에</span>
          <span><strong>딱맞는공간</strong></span>
        </div>
        <vueper-slides
          class="no-shadow thumbnails"
          ref="vueperslides1"
          @slide="$refs.vueperslides2 && $refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
          :arrows="false"
          :bullets="true"
          :dragging-distance="50"
          bullets-outside
          fixed-height="277px"
          transition-speed="250"
        >
          <vueper-slide>
            <template v-slot:content>
              <div class="content">
                <div class="image-area">
                  <img src="@/assets/img/story/style.png" />
                </div>
              </div>
            </template>
          </vueper-slide>
          <vueper-slide>
            <template v-slot:content>
              <div class="content">
                <div class="image-area">
                  <img src="@/assets/img/story/style2.png" />
                </div>
              </div>
            </template>
          </vueper-slide>          
        </vueper-slides>
        <vueper-slides
          fade
          class="no-shadow thumbnails"
          ref="vueperslides2"
          @slide="$refs.vueperslides1 && $refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
          :arrows="false"
          :bullets="false"
          :dragging-distance="50"
          fixed-height="345px"
          transition-speed="250"          
        >
          <vueper-slide>
            <template v-slot:content>
              <div class="content">
                <div class="text-area">
                  <span class="title">UNIVERSALMODULE</span>
                  <span class="life">홀로라이프를 즐기는</span>
                  <span class="household">1인 가구</span>
                  <img src="@/assets/img/story/line.svg" />
                  <span class="text">내면의 성장과 함께하는 일상의 아름다움,</span>
                  <span class="text">당신만의 힐링 스페이스가 여기에 있습니다.</span>
                </div>
              </div>
            </template>
          </vueper-slide>
          <vueper-slide>
            <template v-slot:content>
              <div class="content">
                <div class="text-area">
                  <span class="title">UNIVERSALMODULE</span>
                  <span class="life">넓은 공간을 지향하는</span>
                  <span class="household">다인 가구</span>
                  <img src="@/assets/img/story/line.svg" />
                  <span class="text">나만의 시간과 가족과의 특별한 시간이 공존하는 이곳,</span>
                  <span class="text">편안함과 행복이 여기에 있습니다.</span>
                </div>
              </div>
            </template>
          </vueper-slide>          
        </vueper-slides>        
      </div>
      <div class="item architecture-wrapper">
        <div class="bg"></div>
        <img src="@/assets/img/story/esg_m.png" />
        <div class="title">
          <span>자연과 공생하는 공간을 연구합니다</span>
          <span class="name">ESG 건축</span>
        </div>
        <div class="txt one">
          <span>지구환경과 동떨어질 수 없다는 게</span>
          <span>현재를 살아가는 우리들의 삶입니다.</span>
          <span>전통적인 방식은 건설현장으로 공급되는</span>
          <span>자재의 30%가 건설 폐기물로 남게 됩니다.</span>
        </div>
        <div class="txt two">
          <span>설계, 제조, 관리에서 3R(Relocatable,</span>
          <span>Reusable, Reliable) 추구를 통해</span>
          <span>사회적 책임을 다할 수 있습니다.</span>
        </div>
        <div class="txt three">
          <span>환경을 생각하고 미래의 세대까지</span>
          <span>생각하고 있는 신뢰 가능한</span>
          <span>프리미엄 모듈러 기업입니다.</span>
        </div>        
      </div>
    </vue-scroll-snap>
  </div>
</template>
<script>
import VueScrollSnap from "vue-scroll-snap";
import { VueperSlides, VueperSlide } from 'vueperslides';
import store from '@/store'
// import 'vueperslides/dist/vueperslides.css';
  
export default {
  name: 'MobileBrandStroy',
  props: {
  },
  components: {
    VueScrollSnap,
    VueperSlides,
    VueperSlide
  },
  data() {
    return {
    }
  },
  created() {
    store.commit('setScrolltoTop', false);
  },
  mounted() {
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
    document.body.classList.remove('hidden');
    store.commit('setScrolltoTop', true);
  },
  methods: {
  }
}
</script>
<style lang="scss">
#mobileBrandStroy {
  .item {
    /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
    min-height: 813.925px;
    &.story-wrapper {
      position: relative;
      img {
        width: 100%;
        height: 20%;
        position: absolute;
        left: 0%;
        top: -1%;
        transform: scale(10);
        animation: image-scale 1s linear forwards; /* 이미지 스케일 애니메이션 */
        animation-delay: 1s;
      }
      span {
        color: #FFF;
        text-align: center;
        font-family: Pretendard;
        font-size: 25px;
        font-style: normal;
        // font-weight: 600;
        line-height: normal;          
      }
      .title-area {
        width: 100%;
        position: absolute;
        top: 8%;
        .name {
          text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.50);
          font-weight: 600;
          display: block;
        }
        .desc {
          text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
          font-size: 13px;
          font-weight: 300;
          display: block;
        }
      }
      .time-area {
        display: inline-flex;
        flex-direction: column;
        margin: 206px 0 0 0;
        width: 100%;
        opacity: 0;
        transition: opacity 2s; /* opacity 속성에 대한 트랜지션 설정 */
        visibility: hidden;
        animation: text-ani 1s linear forwards; /* 이미지 스케일 애니메이션, 2초 동안 실행 */
        animation-delay: 2s;
        &.on {
          opacity: 1; /* 보이는 상태에서 투명도를 1로 설정 */
          visibility: visible; /* 요소를 보이게 설정 */
        }
        span {
          display: inline-flex;
          justify-content: center;        
        }
        span:first-child {
          color: #000;
          font-size: 25px;
          font-weight: 300;
          line-height: 121.336%;
        }
        span:last-child {
          color: #000;
          font-size: 25px;
          font-weight: 600;
          line-height: 121.336%;  
        }
      }
      .circle-area {
        display: inline-grid;
        justify-content: center;
        margin: 53px 0 0 0;
        text-align: center;
        width: 100%;
        opacity: 0;
        transition: opacity 1s; /* opacity 속성에 대한 트랜지션 설정 */      
        &.on {
          opacity: 1;
        }
        .circle {
          width: 366px;
          height: 366px;
          border-radius: 310px;
          opacity: 0.15;
          background: #C8C8C8;
        }
        .text {
          position: absolute;
          top: 55%;
          width: 100%;
          display: grid;
          text-align: center;
          z-index: 5;
          color: #111;
          opacity: 0;
          transition: opacity 3s; /* opacity 속성에 대한 트랜지션 설정 */
          &.on {
            opacity: 1;
          }
          span {
            color: #000;
            font-size: 14px;
            font-weight: 300;
            line-height: 188.336%;
            letter-spacing: -0.14px;
            strong {
              font-weight: 600;            
            }
          }        
        }
      }
    }
    &.life-wrapper {
      background-color: #000;
      display: flex;
      flex-direction: column;
      span {
        color: #FFF;
        text-align: center;
        font-family: Pretendard;
        font-size: 30px;
        font-style: normal;
        font-weight: 300;
        line-height: 121.336%; /* 36.401px */
      }
      strong {
        font-weight: 600;
      }    
      .title-area {
        display: inline-flex;
        flex-direction: column;
        margin: 20px 0;
      }
      .image-area {
        text-align: center;
        width: 100%;     
        img {
          width: 335.773px;
          height: 262.1px;
          border-radius: 10px;
        }
      }
      .text-area {
        display: flex;
        flex-direction: column;
        margin: 10px 0 0 0;
        img {
          width: 3px;
          height: 14.516px;
          flex-shrink: 0;
          text-align: center;
          position: relative;
          left: 51%;
          margin: 25px 0;        
        }
        .title {
          font-family: Morena;
          font-size: 11.628px;
          font-weight: 400;
          line-height: 155.836%; /* 18.12px */
        }
        .life {
          font-size: 15.988px;
          font-weight: 100;
          line-height: 99.336%; /* 15.882px */
          margin: 5px 0;
        }
        .household {
          font-size: 39.244px;
          font-weight: 900;
          line-height: 100%;
        }
        .text {
          font-size: 13px;
          font-weight: 300;
          line-height: 155.836%; /* 20.259px */
          letter-spacing: -0.13px;      
        }
      }
    }
    &.architecture-wrapper {
      position: relative;
      span {
        color: #FFF;
        text-align: center;
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 300;
        line-height: 155.836%; /* 20.259px */
        letter-spacing: -0.13px;
      }
      .bg {
        height: 100%;
        background: rgba(0, 0, 0, 0.40);
        position: absolute;
        width: 100%;  
      }
      img {
        width: 100%;
      }
      .title {
        position: absolute;
        top: 14%;
        left: 19%;
        display: flex;
        flex-direction: column;      
        span {
          color: #FFF;
          text-align: center;
          font-family: Pretendard;
          font-size: 15.988px;
          font-style: normal;
          font-weight: 100;
          line-height: 99.336%;
        }
        .name {
          margin-top: 9px;
          font-size: 39.244px;
          font-weight: 900;
          line-height: 100%;    
        }
      }
      .txt {
        span {
          letter-spacing: -0.19px;
        }
        &.one {
          position: absolute;
          top: 31%;
          left: 6%;
          text-align: center;
          width: 56%;
          display: grid;       
        }
        &.two {
          width: 52%;
          position: absolute;
          top: 51%;
          left: 29%;
          display: grid;       
        }
        &.three {
          width: 54%;
          position: absolute;
          top: 65%;
          left: 6%;
          display: grid;      
        }
      }     
    }
  }

  /* 브랜드 스토리 애니메이션 */
  @keyframes image-scale {
    0% {
      transform: scale(10); // 이미지 10배로 확대
    }
    100% {
      transform: scale(1); // 이미지 원래대로 설정
    }
  }

  // 텍스트박스 보이도록 설정
  @keyframes text-ani {
    to {
      visibility: visible;
      opacity: 1;
    }
  }

  // 위에서 아래로 이동 (모든 원형 동시 적용)
  @keyframes box-down {
    from {
      transform: translate(0, 0);
    }
    to {
      visibility: visible;
      transform: translate(0, 200px);
    }  
  }

  // 왼쪽에서 오른쪽 아래로 이동
  @keyframes box-ani-left {
    to {
      transform: translate(100px, 200px);
      opacity: 0;
    }
  }

  // 위에서 아래로 이동
  @keyframes box-ani-center {
    to {
      transform: translate(0, 200px);
      opacity: 0;
    }
  }

  // 오른쪽에서 왼쪽 아래로 이동
  @keyframes box-ani-right {
    to {
      transform: translate(-100px, 200px);
      opacity: 0;
    }
  }

  #animatedBox {
    display: block;
    margin: 15px 0;
    .box {
      flex-direction: column;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100.259px;
      height: 100.259px;
      position: absolute;
      visibility: hidden;
      span {
        color: #000;
        text-align: center;
        font-family: Pretendard;
        font-size: 19.363px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: -0.194px;
      }
      .round {
        width: 100%;
        height: 100%;
        background-color: #C8C8C8;
        position: absolute;
        border-radius: 459px;
        opacity: 0.15;      
      }
      &.one {
        left: 7%;
        animation: box-down 2s linear forwards, box-ani-left 0.5s linear forwards;
        animation-delay: 2s, 3s;
      }
      &.two {
        left: 39%;
        animation: box-down 2s linear forwards, box-ani-center 0.5s linear forwards;
        animation-delay: 2s, 3s;
      }
      &.three {
        left: 70%; 
        animation: box-down 2s linear forwards, box-ani-right 0.5s linear forwards;
        animation-delay: 2s, 3s;
      }
    }
  }

   // 이미지 슬라이딩
  .vueperslides__bullets {
    button {
      color: #CECECE;
    }
  }

  // 스크롤 스냅 스타일
  .scroll-snap-container {
    height: 813.925px;
    width: 100%;
  }  
}
</style>