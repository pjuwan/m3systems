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
  
export default {
  name: 'BrandStroy',
  props: {
  },
  components: {VueScrollSnap},  
  data() {
    return {
    }
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
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
#brandStroy {
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
      position: relative;
      .time-area {
        display: inline-flex;
        flex-direction: column;
        margin: 158px 0 0 0;
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
        opacity: 0;
        transition: opacity 1s; /* opacity 속성에 대한 트랜지션 설정 */      
        &.on {
          opacity: 1;
        }        
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
          opacity: 0;
          transition: opacity 3s; /* opacity 속성에 대한 트랜지션 설정 */
          &.on {
            opacity: 1;
          }          
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
    &.life-wrapper {
      background-color: #000;
      display: flex;
      span {
        color: #FFF;
        text-align: center;
        font-family: Pretendard;
        font-size: 19px;
        font-style: normal;
        font-weight: 300;
      }
      .left {
        display: inline-flex;
        width: 39%;
        background: #000;
        justify-content: center;
        position: relative;
        .text-area {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 30%;        
          img {
            width: 3px;
            height: 75.598px;
            flex-shrink: 0;
            text-align: center;
            position: relative;
            left: 51%;
            margin: 25px 0;        
          }
          .title {
            font-family: Morena;
            font-size: 15px;
            font-weight: 400;
            line-height: 155.836%;
            letter-spacing: 11.85px;
          }
          .life {
            font-size: 43.165px;
            font-weight: 100;
            line-height: 99.336%;
            margin: 10px 0;
          }
          .household {
            font-size: 108.813px;
            font-weight: 900;
            line-height: 90.3%;        
          }
          .text {
            line-height: 155.836%;
            letter-spacing: -0.19px;        
          }
        }
      }
      .right {
        display: inline-flex;
        width: 60.5%;
        position: relative;
        .desc {
          width: 100%;
          transform: rotate(-90deg);
          position: absolute;
          right: 38%;
          top: 43%;
          display: inline-flex;
          justify-content: center;
          span {
            color: #FFF;
            text-align: center;
            font-family: Pretendard;
            font-size: 32px;
            font-style: normal;
            font-weight: 300;
            line-height: 121.336%;
            letter-spacing: 22px;
          }
          strong {
            font-weight: 600;
          }
        }
        .image-area {
          display: inline-flex;
          justify-content: end;
          position: absolute;
          left: 7%;
          top: 16%;
          width: 100%;
          height: 100%;        
          img {
            width: 90%;
            height: 59%;
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

  /* 브랜드 스토리 애니메이션 */
  // 텍스트박스 보이도록 설정
  @keyframes text-ani {
    to {
      visibility: visible;
      opacity: 1;
    }
  }

  // 왼쪽에서 오른쪽 아래로 이동
  @keyframes box-ani-left {
    to {
      transform: translate(300px, 30px);
      opacity: 0;
    }
  }

  // 위에서 아래로 이동
  @keyframes box-ani-center {
    to {
      transform: translate(0, 50px);
      opacity: 0;
    }
  }

  // 오른쪽에서 왼쪽 아래로 이동
  @keyframes box-ani-right {
    to {
      transform: translate(-300px, 30px);
      opacity: 0;
    }
  }
  
  #animatedBox {
    display: block;
    margin: 15px 0;
    position: relative;
    .box {
      flex-direction: column;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 310px;
      height: 310px;
      position: absolute;
      visibility: visible;
      top: 20px;
      span {
        color: #000;
        text-align: center;
        font-family: Pretendard;
        font-size: 53px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: -0.63px;        
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
        left: 14%;
        animation: box-ani-left 0.5s linear forwards;
        animation-delay: 2s;
      }
      &.two {
        left: 41%;
        animation: box-ani-center 0.5s linear forwards;
        animation-delay: 2s;
      }
      &.three {
        left: 68%; 
        animation: box-ani-right 0.5s linear forwards;
        animation-delay: 2s;
      }
    }
  }  

  // 스크롤 스냅 스타일
  .scroll-snap-container {
    height: 1080px;
    width: 100%;
  }
}
</style>