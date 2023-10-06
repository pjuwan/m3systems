<template>
  <div class="brand-story-page">
    <vue-scroll-snap>
      <div class="item story-wrapper"> 
        <div class="title-area">
          <span class="name">BRAND STORY</span>
          <span class="desc">M House는 주거에 프리미엄을 더합니다</span>
        </div>
        <div id="timeArea" class="time-area">
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
  
export default {
  name: 'MobileBrandStroy',
  props: {
  },
  components: {VueScrollSnap},  
  data() {
    return {
    }
  },
  mounted() {
    document.body.classList.add('modal-open');
    const animatedBox = document.getElementById('animatedBox');
    const circleArea = document.getElementById('circleArea');
    const circleAreaText = document.getElementById('circleAreaText');
    const timeArea = document.getElementById('timeArea');
 
    // box 애니메이션 종료 후 설정
    animatedBox.addEventListener('animationend', () => {
      circleArea.classList.add('on');
      timeArea.classList.add('on');
      circleAreaText.classList.add('on');
      // animatedBox.style.display = 'none';
      console.log('end');
    });
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
  min-height: 813.925px;
  &.story-wrapper {
    background-image: url('@/assets/img/story/main.png');
    background-size: 100% 191px;
    background-repeat: no-repeat;
    background-position: top;
    position: relative;
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
      transition: opacity 3s; /* opacity 속성에 대한 트랜지션 설정 */      
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
        transition: opacity 5s; /* opacity 속성에 대한 트랜지션 설정 */
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
      top: 16%;
      left: 5%;
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
.scroll-snap-container {
  height: 813.925px;
  width: 100%;
}

/* 브랜드 스토리 애니메이션 */
@keyframes box-ani {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(0, 100px);
  }  
}

@keyframes box-ani-left {
  from {
    // transform: translate(0, 100x);
  }
  to {
    transform: translate(100px, 100px);
    opacity: 0; /* 애니메이션 종료 시 요소를 투명하게 만듭니다. */
  }
}

@keyframes box-ani-center {
  from {
    // transform: translate(0, 0);
  }
  to {
    transform: translate(0, 100px); /* 위에서 아래로 이동 */
    opacity: 0; /* 애니메이션 종료 시 요소를 투명하게 만듭니다. */
  }
}

@keyframes box-ani-right {
  from {
    // transform: translate(100px, 0);
  }
  to {
    transform: translate(-100px, 100px); /* 오른쪽에서 왼쪽으로 이동 */
    opacity: 0; /* 애니메이션 종료 시 요소를 투명하게 만듭니다. */
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
    // animation: box-ani 1s linear forwards;
    // animation: rotate 1s linear forwards 1s, scale 1s linear forwards 2s, colorChange 1s linear forwards 3s, box-ani 1s linear forwards;
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
      animation: box-ani 2s linear forwards, box-ani-left 0.5s linear forwards 1.0s;
    }
    &.two {
      left: 39%;
      animation: box-ani 2s linear forwards, box-ani-center 0.5s linear forwards 1.0s;
    }
    &.three {
      left: 70%; 
      animation: box-ani 2s linear forwards, box-ani-right 0.5s linear forwards 1.0s;
    }    
  }
}

.box.animated {
  animation: none; /* box-ani 애니메이션 제거 */
}

/* 애니메이션이 완료된 후 .round 요소를 보이게 합니다. */
.box.animated + .item.story-wrapper .circle-area {
  display: none;
  opacity: 0;
}
</style>