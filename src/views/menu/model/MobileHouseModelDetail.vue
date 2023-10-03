<template>
  <div class="model-detail-page">
    <div class="top-area">
      <div class="top">
        <div class="item">
          <img src="@/assets/img/model/detail/ellipse-12.png" />
          <span class="how">모듈러주택이 궁금하시다면</span>
          <span class="name">모듈러주택</span>
        </div>
        <div class="item">
          <img src="@/assets/img/model/detail/ellipse-14.png" />
          <span class="how">나에게 딱맞는 집을 경험하세요</span>
          <span class="name">주택추천</span>
        </div>
        <div class="item">
          <img src="@/assets/img/model/detail/ellipse-13.png" />
          <span class="how">구매 전, 저희와 상담하세요</span>
          <span class="name">고객상담</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="item-area">
        <div class="imagebox">
          <img src="@/assets/img/model/detail/_1-12.png" />
        </div>
        <div class="description">
          <span class="type">Premium model</span>
          <span class="model">CNK-01-XX-XX</span>
          <span class="short-description-about-model">
            short description about model
          </span>
          <div class="txt">
            210.66m²[57PY] | 2Floors | 5Room | 4Toilet
          </div>          
          <div class="price-area">
            <span class="price">488,700,000</span><span>WON</span>
            <div class="help">
              <span class="i">i</span>
              <span class="round"></span>
            </div>
            <div class="group-165">
            </div>
          </div>            
          <div class="btn-area">
            <button @click="goMenu('MobileQuestion')">문의하기</button>
          </div>
        </div>
      </div>
      <div class="custom-home-recommendation">
        <a href="https://m3systems.co.kr/use-case/plan" target="_blank" rel="noopener noreferrer">
          <div class="more-area">
            <div class="image">
              <div class="text-how-item">
                <p>나에게 딱 맞는 집은 어떤 집일까 ?</p>
                <span>맞춤 주택 추천받기</span>
              </div>
              <div class="text-more-item">
                <span>더 알아보기</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="center-area">
        <div class="center-item">
          <span class="model">CNK-01-XX-XX</span>
          <span>철골구조 프리미엄 주택</span>
          <span class="premium-model">Premium model</span>
          <div class="option-area">
            <div class="option">
              <div class="option-item">
                <img src="@/assets/img/model/detail/area-1.png" />
              </div>
              <span>210.66m²[57PY]</span>
            </div>
            <div class="option">
              <div class="option-item">
                <img src="@/assets/img/model/detail/tile.png" />
              </div>
              <span>2 Floors</span>
            </div>
            <div class="option">
              <div class="option-item">
                <div class="ellipse-39"></div>
                <img src="@/assets/img/model/detail/room.png" />
              </div>
              <span>5 Room</span>
            </div>            
            <div class="option">
              <div class="option-item">
                <img src="@/assets/img/model/detail/public-toilet.png" />
              </div>
              <span>4 Toilet</span>
            </div>
          </div>
        </div>
      </div>
      <div class="center-desc-area">
        <div class="item-area">
          <img src="@/assets/img/model/detail/_1-11.png" />
          <div class="desc-area">
            <span class="model">CNK-01-XX-XX</span>
            <span class="name">철골구조 프리미엄 주택</span>
            <span class="option">
              Premium model | 210.66m²[57PY] | 2Floors | 5Room | 4Toilet
            </span>
            <span>
              CNK-000’S Description blahblahblah Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&#039;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
            </span>
          </div>
        </div>
      </div>
      <div class="floor-plan-area">
        <span class="title">FLOOR PLAN</span>
        <div class="floor-area">
          <div class="group">
            <div class="item-box image">
              <transition name="fade">
                <div v-show="selectedFloor === '01'" class="fade-imagebox">
                  <img src="@/assets/img/model/detail/_1-jm-230421-ver-05-1.png" />
                </div>
              </transition>
              <transition name="fade">
                <div v-show="selectedFloor === '02'" class="fade-imagebox">
                  <img src="@/assets/img/model/detail/jm-230421-ver-051.png" />
                </div>
              </transition>
            </div>            
            <div class="item-box desc">
              <div class="info-area" :class="{on: selectedFloor === '01'}">
                <div class="floor">
                  <div class="circle" :class="{on: selectedFloor === '01'}" @click="selectedFloor = '01'">
                    <span>1F</span>
                  </div>
                </div>
                <div v-show="selectedFloor === '01'" class="text">
                  <span class="area">1층 면적</span>
                  <span>145.81m²</span>
                  <span class="type">[35PY]</span>
                </div>
              </div>
              <div class="info-area" :class="{on: selectedFloor === '02'}">
                <div class="floor">
                  <div class="circle" :class="{on: selectedFloor === '02'}" @click="selectedFloor = '02'">
                    <span>2F</span>
                  </div>
                </div>
                <div v-show="selectedFloor === '02'" class="text">
                  <span class="area">2층 면적</span>
                  <span>96.25m²</span>
                  <span class="type">[20PY]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-area">
        <span class="title">OPTIONS</span>      
        <vueper-slides
          class="no-shadow thumbnails"
          :slide-ratio="1 / 4"
          fixed-height="320px"
          :arrows="false"
          :bullets="false">
          <vueper-slide
            v-for="(slide, i) in modelList"
            :key="i">
            <template v-slot:content>
              <div class="item">
                <img :src="slide.src" width="100%" height="100%">
              </div>
              <div class="text-item">
                <span>CNK-000’S Description blahblahblah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</span>
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
      </div>
      <div class="more-views-area">
        <span class="title">MORE VIEWS</span>
        <div class="view-area">
          <div class="image-item">
            <div class="view">
              <img class="img" src="@/assets/img/model/detail/_1-20.png" />
              <img class="img" src="@/assets/img/model/detail/_1-26.png" />
              <img class="img" src="@/assets/img/model/detail/_1-23.png" />
              <img class="img" src="@/assets/img/model/detail/_1-27.png" />
              <img class="img" src="@/assets/img/model/detail/_1-21.png" />
              <img class="img" src="@/assets/img/model/detail/_1-28.png" />
              <img class="img" src="@/assets/img/model/detail/_1-24.png" />
              <img class="img" src="@/assets/img/model/detail/_1-29.png" />
              <img class="img" src="@/assets/img/model/detail/_1-22.png" />
              <img class="img" src="@/assets/img/model/detail/_1-30.png" />
              <img class="img" src="@/assets/img/model/detail/_1-25.png" />
              <img class="img" src="@/assets/img/model/detail/_1-31.png" />
            </div>
          </div>
          <div class="video-area">
            <div class="video">
              <img src="@/assets/img/model/detail/_250723-6-1.png" />
              <img class="play" src="@/assets/img/common/play.svg" />
            </div>
            <div class="video">
              <img src="@/assets/img/model/detail/_250723-6-1.png" />
              <img class="play" src="@/assets/img/common/play.svg" />
            </div>            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: "MobileHouseModelDetail",
  components: {
    VueperSlides,
    VueperSlide
  },
  data() {
    return {
      selectedFloor: '01',
      modelList: [{
        src: require("@/assets/img/model/detail/_1-35.png"),
      },
      {
        src: require("@/assets/img/model/detail/_1-36.png"),
      },
      {
        src: require("@/assets/img/model/detail/_1-37.png"),
      }]
    };
  },
  methods: {
    goMenu(menuNm) {
      this.$router.push({ name: menuNm });
    }
  },
};
</script>
<style scoped lang="scss">
.model-detail-page {
  background: #ffffff;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.content {
  .item-area {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    .imagebox {
      width: 100%;
      display: inline-flex;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .description {
      display: inline-flex;
      width: 100%;
      flex-direction: column;
      text-align: left;
      padding-left: 15px;
      span {
        color: #000;
        font-family: Pretendard;
        font-size: 9.073px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      .type {
        color: #6C6C6C;
        margin: 10px 0;
      }
      .model {
        font-size: 24.756px;
      }
      .short-description-about-model {
        font-size: 11px;
        font-weight: 300;
      }
      .txt {
        color: #585858;
        font-size: 10px;
        font-weight: 300;
        margin: 10px 0;
      }
      .price-area {
        display: inline-flex;
        vertical-align: middle;
        margin: 3% 0 20px 0;
        border-top: 1px solid #C7C7C7;
        border-bottom: 1px solid #C7C7C7;
        padding: 12px 0;
        align-items: center;
        span {
          color: #3C3C3C;
          font-size: 17.232px;
          font-weight: 300;          
          padding: 0 5px;
          color: #0F0F0F;
        }
        .price {
          color: #0F0F0F;
          font-size: 17.232px;
          font-weight: 600;
        }
        .help {
          position: relative;
          top: 7px;
          .i {
            position: absolute;
            left: 0;
            top: -12px;
            width: 5.4px;
            height: 21.61px;
            color: #565656;
            font-size: 10.228px;
            font-weight: 500;
          }
          .round {
            border-radius: 50%;
            border-style: solid;
            border-color: #515151;
            border-width: 1.35px;
            width: 12.697px;
            height: 12.697px;
            position: absolute;
            left: 0;
            top: -12px;
          }
        }        
      }
      .btn-area {
        position: fixed;
        z-index: 2;
        top: 72%;
        left: 0%;
        display: block;
        text-align: center;
        width: 100%;        
        button {
          width: 90%;
          height: 58px;
          background-color: #000;
          font-family: Pretendard;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          color: #fff;
          cursor: pointer;          
        }
      }
    }
  }
  .custom-home-recommendation {
    width: 100%;
    height: 150px;
    display: inline-flex;
    margin-top: 20px;
    a {
      width: 100%;
    }
    span {
      font-family: Pretendard;
      font-weight: 500;
      color: #262626;
      font-size: 6.9px;
      text-align: center;
      letter-spacing: 0;
      line-height: normal;
      white-space: nowrap;
    }    
    .more-area {
      position: relative;
      height: auto;
      .image {
        width: 100%;
        height: 137px;
        background: linear-gradient(270deg, white 6%, rgba(255, 255, 255, 0) 40%), url('@/assets/img/image-6.png');
        background-size: 313px 121px;
        background-position: -26px 16px;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
      }
      .text-how-item {
        position: relative;
        top: 44px;
        left: 230px;
        color: #262626;
        line-height: normal;
        p {
          display: flex;
          font-family: Pretendard;
          font-weight: 200;
          font-size: 11.6px;
          letter-spacing: 0;
        }
        span {
          font-weight: 500;
          font-size: 15.8px;
        }        
      }

      .text-more-item {
        position: relative;
        top: 52px;
        left: 229px;
        width: 72.556px;
        height: 16.075px;
        background-color: #000000;
        border-radius: 9.49px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        span {
          color: #fff;
        }
      }
    }
  }
  .center-area {
    background: #F3F3F3;
    margin: 25px 0;
    display: block;
    width: 100%;
    height: 183px;
    .center-item {
      padding: 12px 0;
      flex-direction: column;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      span {
        color: #373737;
        text-align: center;
        font-family: Pretendard;
        font-size: 11px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
      .model {
        color: #4A4A4A;
        font-size: 21.929px;
        font-weight: 600;
      }
      .premium-model {
        color: #585858;
        font-size: 10px;
      }      
      .option-area {
        display: inline-flex;
        gap: 10%;
        justify-content: center;
        width: 100%;
        margin: 10px 0;    
        .option {
          display: flex;
          position: relative;
          flex-direction: column;
          span {
            margin-top: 8px;
          }          
          .option-item {
            background: #ffffff;
            border-radius: 50%;
            width: 59.23px;
            height: 59.23px;
            justify-content: center;
            display: inline-flex;
            align-items: center;
            img {
              width: 36.553px;
              height: 36.553px;
            }
          }
        }
      }
    }
  }
  .center-desc-area {
    display: flex;
    width: 100%;
    justify-content: center;
    .item-area {
      display: inline-flex;
      width: 100%;
      text-align: center;
      flex-direction: column;
      .desc-area {
        display: inline-flex;
        width: 100%;
        flex-direction: column;
        padding: 13px;
        span {
          color: #585858;
          font-family: Pretendard;
          font-size: 10px;
          font-style: normal;
          font-weight: 300;
          line-height: normal;
          text-align: left;
        }
        .model {
          color: #000;
          font-size: 23px;
          font-weight: 600;
        }
        .name {
          color: #373737;
          font-size: 15px;
        }
        .option {
          color: #161616;
          text-align: justify;
          font-size: 12px;
          line-height: 20px;
          margin: 0px 0 8px 0;          
        }
      }
    }
  }
  .floor-plan-area {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 67px 0;
    span {
      color: #000;
      text-align: center;
      font-family: Pretendard;
      font-size: 23px;
      font-style: normal;
      font-weight: 600;
      line-height: 6.879px;   
    }
    .title {
      justify-content: center;
      display: inline-flex;
      text-align: justify;
    }
    .floor-area {
      display: inline-flex;
      width: 100%;
      margin: 35px 0;
      position: relative;
      justify-content: center;
      .group {
        width: 100%;
        display: inline-flex;
        justify-content: center;
        flex-direction: column;
        span {
          color: #242424;
          text-align: justify;
          font-size: 18px;
        }
        .item-box {
          display: flex;
          width: 100%;
          flex-direction: column;
          &.image {
            display: flex;
            text-align: center;
            align-items: center;
            margin-bottom: 0px;
          }
          &.desc {
            padding: 46% 0 0 26px;
          }
        }
        .fade-imagebox {
          width: 90%;
          position: absolute;
          img {
            width: 100%;
            height: auto;
          }
        }        
        .info-area {
          border-radius: 36.982px;
          background: #FFF;
          width: 269.966px;
          height: 56.212px;
          display: inline-flex;
          align-items: center;
          margin: 10px 0;
          span {
            color: #242424;
            font-size: 13.313px;
            margin-left: 15px;
          }
          &.on {
            box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.5);
          }
          .floor {
            width: 57.691px;
            height: 57.691px;
            flex-shrink: 0;
            .circle {
              color: #fff;
              font: 600 34px/25px "Pretendard";
              border-radius: 50px;
              background: #878787;
              width: 57.691px;
              height: 57.691px;
              position: relative;
              span {
                position: absolute;
                top: 25px;
                left: 0;
                color: #FFF;
                font-size: 25.148px;
              }
              &.on {
                background: #2E2E2E;
              }
            }              
          }
          .text {
            width: 100%;
            display: inline-flex;
          }
          .area {
            text-indent: 0;
          }
          .type {
            font-weight: 300;
            margin-left: 7px;
          }
        }
      }
    }
    .group-203 {
      opacity: 0;
    }
  }
  .carousel-area {
    text-align: center;
    display: block;
    span {
      color: #161616;
      text-align: justify;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: 20px; /* 166.667% */          
    }
    .title {
      color: #000;
      text-align: center;
      font-size: 23px;
      font-weight: 600;
      line-height: 6.897px;
      margin-bottom: 30px;
      display: block;
    }
    .item {
      width: 90%;
      display: inline-block;      
    }
    .text-item {
      text-align: justify;
      width: 90%;
      display: inline-block;      
    }    
  }
  .more-views-area {
    display: block;
    width: 100%;
    .title {
      color: #000;
      font-family: Pretendard;
      text-align: justify;
      font-size: 23px;
      font-style: normal;
      font-weight: 600;
      line-height: 6.92px;
      justify-content: center;
      display: inline-flex;
      width: 100%;
      margin: 40px 0;
    }
    .view-area {
      width: 100%;
      justify-content: center;
      display: flex;
      text-align: left;
      flex-direction: column;
      .image-item {
        width: 100%;
        justify-content: center;
        display: inline-flex;
        .view {
          width: 90%;
          text-align: center;
          .img {
            width: 48%;
            margin: 0 2px;
          }
        }
      }
      .video-area {
        display: inline-flex;
        justify-content: center;
        margin: 70px 0;
        width: 100%;
        position: relative;
        text-align: center;
        flex-direction: column;
        .video {
          position: relative;
          margin-bottom: 20px;
          img {
            width: 90%;            
          }
          .play {
            position: absolute;
            top: 45%;
            left: 45%;
            width: 10%;     
          }
        }
      }
    }
  }
}

.top-area {
  background: #000000;
  width: 100%;
  height: 195px;
  left: 0px;
  top: 0px;
  .top {
    display: flex;
    padding: 5.5% 0 0 0;
    width: 100%;
    justify-content: center;
    gap: 4%;
    span {
      color: white;
      text-align: center;
      font-family: Pretendard;
      font-size: 9px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }  
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 61.722px;
        height: 61.722px;
      }
      .how {
        font-weight: 600;
        margin: 12px 0 8px 0;
        font-size: 11px;
      }

      .name {
        font-weight: 300;  
      }    
    }
  }
}
</style>
