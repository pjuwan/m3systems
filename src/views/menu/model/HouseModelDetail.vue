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
    <div class="nav">
      <div class="home">
        <span @click="goMenu('Home', '')">
          <img src="@/assets/img/model/detail/home.png" />
        </span>
      </div>
      <div class="model-area">
        <select>
          <option>프리미엄 모델</option>
        </select>
      </div>
    </div>
    <div class="content">
      <div class="item-area">
        <div class="imagebox">
          <img :src="modelDetail.imageList[0]" />
        </div>
        <div class="description">
          <span>{{ modelDetail.id }}</span>
          <span class="short-description-about-model">
            short description about model
          </span>
          <div class="txt">
            210.66m²[57PY] | 2Floors | 5Room | 4Toilet
          </div>          
          <div class="price-area">
            <span class="price">488,700,000</span><span>원</span>
            <div class="help">
              <span class="i">i</span>
              <span class="round"></span>
            </div>
            <div class="group-165">
            </div>
          </div>
          <div class="btn-area">
            <button @click="goMenu('Question')">문의하기</button>
          </div>
        </div>
      </div>
      <div class="center-area">
        <div class="center-item">
          <span class="model">{{ modelDetail.id }}</span>
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
          <img :src="modelDetail.imageList[0]" />
          <div class="desc-area">
            <div class="left">
              <span class="model">{{ modelDetail.id }}</span>
              <span class="name">철골구조 프리미엄 주택</span>
              <span>
                Premium model | 210.66m²[57PY] | 2Floors | 5Room | 4Toilet
              </span>
            </div>
            <div class="right">
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
      </div>
      <div class="floor-plan-area">
        <span class="title">FLOOR PLAN</span>
        <div class="floor-area">
          <div class="group">
            <div class="left">
              <div class="item-box">
                <div class="info-area" :class="{on: selectedFloor === '01'}">
                  <div class="floor">
                    <div class="circle" :class="{on: selectedFloor === '01'}" @click="selectedFloor = '01'">
                      <span>1F</span>
                    </div>
                  </div>
                  <div v-if="selectedFloor === '01'" class="text">
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
                  <div v-if="selectedFloor === '02'" class="text">
                    <span class="area">2층 면적</span>
                    <span>96.25m²</span>
                    <span class="type">[20PY]</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="item-box">
                <transition name="fade">
                  <div v-show="selectedFloor === '01'" class="fade-imagebox" :class="{active: selectedFloor === '01'}">
                    <img src="@/assets/img/model/detail/_1-jm-230421-ver-05-1.png" />
                  </div>
                </transition>
                <transition name="fade">
                  <div v-show="selectedFloor === '02'" class="fade-imagebox" :class="{active: selectedFloor === '02'}">
                    <img src="@/assets/img/model/detail/jm-230421-ver-051.png" />
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-area">
        <span class="title">OPTIONS</span>
        <div class="btn-box">
          <img class="img-prev" src="@/assets/img/common/img_prev.svg" @click="$refs.vueperslides1.previous()"/>
          <img class="img-next" src="@/assets/img/common/img_next.svg" @click="$refs.vueperslides1.next()"/>
        </div>
        <vueper-slides 
          class="no-shadow thumbnails small"
          ref="vueperslides1"
          :slide-ratio="1 / 3"
          :dragging-distance="50"
          @slide="$refs.vueperslides2 && $refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
          :visible-slides="3"
          fixed-height="201.9px"
          :gap="2.5"
          :arrowsOutside="true"
          :touchable="false"
          :bullets="false">
          <vueper-slide
            v-for="(slide, i) in modelList"
            :key="i"
            :image="slide.src"
            @click.native="$refs.vueperslides1.goToSlide(i)">
          </vueper-slide>
        </vueper-slides>        
        <vueper-slides
          class="no-shadow thumbnails big"
          ref="vueperslides2"
          @slide="$refs.vueperslides1 && $refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
          :slide-ratio="1 / 4"
          fixed-height="626px"
          :touchable="false"
          :bullets="false"
          :arrows="false">
          <vueper-slide
            v-for="(slide, i) in modelList"
            :key="i">
            <template v-slot:content>
              <div class="item">
                <img :src="slide.src">
              </div>
            </template>
            <template #arrow-left>
              <i class="icon icon-arrow-left" />
            </template>
            <template #arrow-right>
              <i class="icon icon-arrow-right" />
            </template>            
          </vueper-slide>
        </vueper-slides>
        <div class="text-item">
          <span>CNK-000’S Description blahblahblah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</span>
      </div>
      </div>
      <div class="more-views-area">
        <span class="title">MORE VIEWS</span>
        <div class="view-area">
          <div class="image-item">
            <div class="view">
              <img v-for="(imageAddress, idx) in modelDetail.imageList" :key="idx" class="img" :src="imageAddress" />
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
      <div class="btn-area">
        <button class="btn list" @click="goMenu('HouseModelList')">목록보기</button>
      </div>
    </div>
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import { dataMixin } from '@/mixins/dataMixin';

export default {
  name: "HouseModelDetail",
  mixins: [dataMixin],
  components: {
    VueperSlides,
    VueperSlide
  },
  data() {
    return {
      modelDetail: {},
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
  created() {
    console.log(this.$route.params.id);
    this.modelDetail = this.getModelDetail(this.$route.params.id);
  },
  methods: {
    goMenu(menuNm, menuId) {
      this.menuId = menuId;
      this.$router.push({ name: menuNm });
    }
  },
};
</script>
<style scoped lang="scss">
.model-detail-page {
  background: #ffffff;
  width: 100%;
  margin-bottom: 138px;
  position: relative;
  overflow: hidden;
}
.option-pc {
  width: 1160px;
  height: 905.06px;
  position: absolute;
  left: 380px;
  top: 4130px;
}
._1-35 {
  width: 1160px;
  height: 625px;
  position: absolute;
  left: 0px;
  top: 220.06px;
}
.cnk-000-s-description-blahblahblah-lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-lorem-ipsum-has-been-the-industry-s {
  color: #161616;
  text-align: justified;
  font: 500 17px/25px "Pretendard", sans-serif;
  position: absolute;
  left: 2px;
  top: 880.06px;
  width: 1158px;
}
.group-208 {
  position: absolute;
  inset: 0;
}
.group-143 {
  width: 337.05px;
  height: 203.57px;
  position: static;
}
._1-34 {
  width: 337.05px;
  height: 203.57px;
  position: absolute;
  left: 761.95px;
  top: 1.04px;
}
._1-37 {
  background: #ffffff;
  opacity: 0.5;
  width: 337.05px;
  height: 203.57px;
  position: absolute;
  left: 761.95px;
  top: 1.04px;
}
.group-142 {
  width: 337.05px;
  height: 201.9px;
  position: static;
}
._1-33 {
  width: 337.05px;
  height: 201.9px;
  position: absolute;
  left: 61px;
  top: 1.04px;
}
._1-36 {
  background: #ffffff;
  opacity: 0.5;
  width: 337.05px;
  height: 201.9px;
  position: absolute;
  left: 61px;
  top: 1.04px;
}
._1-32 {
  width: 337.01px;
  height: 202.6px;
  position: absolute;
  left: 411.05px;
  top: 0px;
}
.group-21 {
  position: absolute;
  left: 0px;
  top: 29.06px;
  overflow: visible;
}
.group-22 {
  position: absolute;
  left: 1160px;
  top: 27.06px;
  transform: translate(-34.84px, 0px);
  overflow: visible;
}
.rectangle-86 {
  background: #f3f3f3;
  width: 1920px;
  height: 555px;
  position: absolute;
  left: calc(50% - 960px);
  top: 1491px;
}
.nav {
  display: inline-flex;
  justify-content: flex-start;
  width: 100%;
  height: 67px;
  align-items: center;
  border: 1px solid #000;
  select {
    color: #3C3C3C;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .home {
    width: 70%;
    display: inline-flex;
    justify-content: end;
    position: relative;
    span {
      display: inline-flex;
      padding: 0 20px 0 20px;
      img {
        cursor: pointer;
      }
    }    
    span::before {
      content: url('@/assets/img/common/verticalLine.svg');
      height: 0;
      position: absolute;
      top: -18px;
      right: -3px;  
    }
    span::after {
      content: url('@/assets/img/common/verticalLine.svg');
      height: 0;
      position: absolute;
      top: -18px;
      right: 71px;  
    }
  }
  .model-area {
    position: relative;
    padding: 0 0 0 10px;
  }
  .model-area::before {
    content: url('@/assets/img/common/verticalLine.svg');
    position: absolute;
    top: -16.5px;
    left: 212px;
  }
  .model-area select {
    height: 34px;
    border: 0;
    appearance: none;
    width: 183px;
    background: url('@/assets/img/common/select.svg') no-repeat;
    background-position: 159px 11px;
    padding: 0 0px 0 5px;
    outline: none;
  }  
}
.content {
  .item-area {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 25px 0;
    .imagebox {
      width: 36%;
      display: inline-flex;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .description {
      display: inline-flex;
      width: 24%;
      flex-direction: column;
      text-align: left;
      padding-left: 15px;
      span {
        color: #000;
        font-family: Pretendard;
        font-size: 50px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-align: left;
      } 
      .short-description-about-model {
        font-size: 20px;
        font-weight: 300;
      }
      .txt {
        color: #585858;
        font-size: 18px;
        font-weight: 300;
        margin: 10px 0;
      }
      .price-area {
        display: inline-flex;
        vertical-align: middle;
        margin: 24% 0 20px 0;
        border-top: 1px solid #C7C7C7;
        border-bottom: 1px solid #C7C7C7;
        padding: 12px 0;
        align-items: center;
        span {
          color: #3C3C3C;
          font-size: 25px;
          font-weight: 300;
          padding: 0 5px;
        }
        .price {
          color: #0F0F0F;
          font-size: 35px;
          font-weight: 600;
        }
        .help {
          position: relative;
          .i {
            position: absolute;
            left: 4.5px;
            top: -14px;
            width: 5.4px;
            height: 21.61px;
            color: #565656;
            font-size: 19.58px;
            font-weight: 500;
          }
          .round {
            border-radius: 50%;
            border-style: solid;
            border-color: #515151;
            border-width: 1.35px;
            width: 24.31px;
            height: 24.31px;
            position: absolute;
            left: 0;
            top: -12px;
            cursor: pointer;
          }
        }        
      }
      .btn-area {
        button {
          width: 446px;
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
  .center-area {
    background: #F3F3F3;
    margin: 25px 0;
    display: block;
    .center-item {
      padding: 20px 0;
      span {
        color: #373737;
        font-family: Pretendard;
        font-size: 24px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
      .model {
        font-size: 67px;
        font-weight: 600;
      }
      .premium-model {
        color: #585858;
        font-size: 17px;
        font-weight: 300;
      }      
      .option-area {
        display: inline-flex;
        gap: 2%;
        justify-content: center;
        width: 100%;
        margin: 40px 0;      
        .option {
          width: 193.76px;
          height: 224px;
          display: flex;
          position: relative;
          flex-direction: column;
          span {
            margin-top: 12px;
          }          
          .option-item {
            background: #ffffff;
            border-radius: 50%;
            width: 170.24px;
            height: 170.24px;
            justify-content: center;
            display: inline-flex;
            align-items: center;
            img {
              width: 105.06px;
              height: 105.06px;
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
      width: 61%;
      text-align: center;
      flex-direction: column;
      .desc-area {
        display: inline-flex;
        width: 100%;        
        span {
          color: #585858;
          font-family: Pretendard;
          font-size: 17px;
          font-style: normal;
          font-weight: 300;
          line-height: normal;
          text-align: left;
        }
        .left {
          width: 42%;
          .model {
            color: #000;
            font-size: 67px;
            font-weight: 600;            
          }
          .name {
            color: #373737;
            font-size: 24px;
            font-weight: 300;
            margin-top: 10px;
          }
        }
        .right {
          width: 58%;
          padding: 20px 0 0 31px;
          span {
            color: #161616;
            text-align: justify;
            font-size: 17px;
            font-weight: 500;
            line-height: 25px;            
          }
        }
      }
    }    
  }
  .floor-plan-area {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 150px 0;
    span {
      color: #000;
      font-family: Pretendard;
      font-size: 34px;
      font-style: normal;
      font-weight: 600;
      line-height: 25px; /* 73.529% */      
    }
    .title {
      justify-content: center;
      display: inline-flex;
      text-align: justify;
    }
    .floor-area {
      display: inline-flex;
      width: 100%;
      margin: 73px 0;
      position: relative;
      justify-content: center;
      .group {
        width: 61%;
        display: inline-flex;
        justify-content: center;
        span {
          color: #242424;
          text-align: justify;
          font-size: 18px;
        }
        .left {
          width: 45%;
          display: inline-block;
          .info-area {
            inset: 0;
            background: #ffffff;
            border-radius: 50px;
            width: 365px;
            height: 76px;
            box-shadow: none;
            display: inline-flex;
            align-items: center;
            margin: 20px 0;
            span {
              color: #242424;
              font-size: 18px;  
              margin-left: 24px;
            }
            &.on {
              box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.5);
            }
            .floor {
              width: 78px;
              height: 78px;
              .circle {
                color: #ffffff;
                font: 600 34px/25px "Pretendard";
                border-radius: 50px;
                background: #878787;
                width: 78px;
                height: 78px;
                position: relative;                
                cursor: pointer;
                span {
                  position: absolute;
                  top: 21px;
                  left: 17px;
                  color: #FFF;
                  text-align: justify;
                  font-family: Pretendard;
                  font-size: 34px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 25px;
                  margin-left: 0;
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
              text-indent: 7px;
            }
            .type {
              font-weight: 300;
              margin-left: 7px;
            }
          }
          .group-43 {
            position: absolute;
            inset: 0;
          }
        }
        .right {
          display: inline-flex;
          width: 100%;
          .item-box {
            display: flex;
            width: 100%;
            position: relative;
          }
          .fade-imagebox {
            display: inline-flex;
            position: absolute;
            left: 20%;
            &.active {
              display: flex;
            }
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
    .title {
      color: #000000;
      color: #000;
      text-align: center;
      font-family: Pretendard;
      font-size: 34px;
      font-style: normal;
      font-weight: 600;
      line-height: 25px;
      margin: 0 0 50px 0;
    }
    .btn-box {
      position: absolute;
      left: 50%;
      .img-prev {
        position: absolute;
        right: 532px;
        top: 20px;
        cursor: pointer;
      }
      .img-next {
        position: absolute;
        left: 534px;
        top: 20px;
        cursor: pointer;
      }      
    }
    .text-item {
      display: flex;
      justify-content: center;
      margin: 17px 0 0 0;
      padding: 12px;
      span {
        color: #161616;
        text-align: justify;
        font-size: 17px;
        font-weight: 500;
        line-height: 25px;
        width: 61%;
      }
    }
  }
  .more-views-area {
    display: block;
    width: 100%;
    .title {
      color: #000;
      font-family: Pretendard;
      font-size: 34px;
      font-style: normal;
      font-weight: 600;
      line-height: 25px;
      text-align: center;
      margin: 134px 0 38px 0;      
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
          width: 61%;
          .img {
            width: 378px;
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
          .play {
            position: absolute;
            top: 50%;
            left: 50%;            
          }
        }
      }
    }
  }
  .btn-area {
    display: block;
    text-align: center;
    .btn {
      width: 247px;
      height: 72px;
      border-radius: 31px;
      color: #FFF;
      font-family: Pretendard;
      font-size: 29px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      border: 0;
      background: #000;          
      cursor: pointer;
    }
  }  
}

.property-1 {
  width: 1920px;
  height: 167px;
  position: absolute;
  left: -18px;
  top: 0px;
}
.rectangle-72 {
  width: 1920px;
  height: 90px;
  position: absolute;
  left: 18px;
  top: 0px;
}
.rectangle-722 {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  width: 1920px;
  height: 90px;
  position: absolute;
  left: 0px;
  top: 0px;
}
.rectangle-74 {
  width: 1920px;
  height: 167px;
  position: absolute;
  left: 0px;
  top: 0px;
}
.union {
  opacity: 0;
  position: absolute;
  left: 770px;
  top: 29px;
  overflow: visible;
}
.m-house {
  color: #ffffff;
  text-align: left;
  font: 700 42px "Inter", sans-serif;
  position: absolute;
  left: 44px;
  top: 20px;
}

.group-147 {
  position: absolute;
  inset: 0;
}
.ellipse-13 {
  border-radius: 50%;
  width: 132px;
  height: 132px;
  position: absolute;
  left: 1157px;
  top: 164px;
}

.group-146 {
  position: absolute;
  inset: 0;
}
.group-33 {
  width: 132px;
  height: 132px;
  position: static;
}
.ellipse-14 {
  border-radius: 50%;
  width: 132px;
  height: 132px;
  position: absolute;
  left: 906px;
  top: 164px;
}

span {
  display: block;
  color: #FFF;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  line-height: normal;  
}

.how {
  font-weight: 600;
  margin: 12px 0 8px 0;
}

.name {
  font-weight: 300;  
}
.top-area {
  background: #000000;
  width: 100%;
  height: 443px;
  left: 0px;
  top: 0px;
  .top {
    display: flex;
    padding: 9.5% 0 0 0;
    width: 100%;
    justify-content: center;
    gap: 4%;
  }  
}

.item {
  display: block;
  text-align: center;  
}

.ellipse-12 {
  border-radius: 50%;
  width: 132px;
  height: 132px;
  left: 643px;
  top: 164px;
}

._1-12 {
  width: 689px;
  height: 385.03px;
  position: absolute;
  left: 379px;
  top: 554px;
}
.vector-3 {
  left: 1273.5px;
  top: 461px;
  overflow: visible;
}

.vector-4 {
  position: absolute;
  left: 1501.5px;
  top: 473px;
  overflow: visible;
}

.vector-6 {
  position: absolute;
  left: 1093.5px;
  top: 760px;
  transform: translate(-0.5px, -0.5px);
  overflow: visible;
}
.vector-47 {
  position: absolute;
  left: 1093.5px;
  top: 844px;
  transform: translate(-0.5px, -0.5px);
  overflow: visible;
}
._488-700-000 {
  text-align: left;
  position: absolute;
  left: 1095px;
  top: 781px;
}
._488-700-000-span {
  color: #0f0f0f;
  font: 600 35px "Pretendard", sans-serif;
}
._488-700-000-span2 {
  color: #3c3c3c;
  font: 300 25px "Pretendard", sans-serif;
}
.i {
  color: #565656;
  text-align: left;
  font: 500 19.58px "Pretendard", sans-serif;
  position: absolute;
  left: 1356.45px;
  top: 794.35px;
  width: 5.4px;
  height: 21.61px;
}
.ellipse-16 {
  border-radius: 50%;
  border-style: solid;
  border-color: #515151;
  border-width: 1.35px;
  width: 24.31px;
  height: 24.31px;
  position: absolute;
  left: 1347px;
  top: 793px;
}
.rectangle-46 {
  background: #000000;
  width: 446px;
  height: 58px;
  position: absolute;
  left: 1091px;
  top: 881px;
}

._1-11 {
  width: 1158px;
  height: 622px;
  position: absolute;
  left: 379px;
  top: 2211px;
}
._1-20 {
  width: 378px;
  height: 224px;
  position: absolute;
  left: 382px;
  top: 5496px;
}
._1-26 {
  width: 378px;
  height: 224px;
  position: absolute;
  left: 382px;
  top: 5966px;
}
._1-23 {
  width: 378px;
  height: 224px;
  position: absolute;
  left: 382px;
  top: 5731px;
}
._1-27 {
  width: 378px;
  height: 224px;
  position: absolute;
  left: 382px;
  top: 6201px;
}
._1-21 {
  width: 378px;
  height: 224px;
  position: absolute;
  left: 771px;
  top: 5496px;
}
._1-28 {
  width: 378px;
  height: 224px;
  position: absolute;
  left: 771px;
  top: 5966px;
}
._1-24 {
  width: 378px;
  height: 224px;
  position: absolute;
  left: 771px;
  top: 5731px;
}
._1-29 {
  width: 378px;
  height: 224px;
  position: absolute;
  left: 771px;
  top: 6201px;
}
._1-22 {
  width: 378px;
  height: 224px;
  position: absolute;
  left: 1160px;
  top: 5496px;
}
._1-30 {
  width: 378px;
  height: 224px;
  position: absolute;
  left: 1160px;
  top: 5966px;
}
._1-25 {
  width: 378px;
  height: 224px;
  position: absolute;
  left: 1160px;
  top: 5731px;
}
._1-31 {
  width: 378px;
  height: 224px;
  position: absolute;
  left: 1160px;
  top: 6201px;
}
.cnk-01-xx-xx2 {
  color: #000000;
  text-align: left;
  font: 600 67px "Pretendard", sans-serif;
  position: absolute;
  left: 382px;
  top: 2872px;
}
.cnk-01-xx-xx3 {
  color: #4a4a4a;
  text-align: center;
  font: 600 67px "Pretendard", sans-serif;
  position: absolute;
  left: calc(50% - 233px);
  top: 1541px;
}

.premium-model-210-66-m-57-py-2-floors-5-room-4-toilet {
  color: #585858;
  text-align: left;
  font: 300 17px "Pretendard", sans-serif;
  position: absolute;
  left: 385px;
  top: 3001px;
}
.cnk-000-s-description-blahblahblah-lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-lorem-ipsum-has-been-the-industry-s-standard-dummy-text-ever-since-the-1500-s-when-an-unknown-printer-took-a-galley-of-type-and-scrambled-it-to-make-a-type-specimen-book-it-has-survived-not-only-five-centuries-but-also-the-leap-into-electronic-typesetting-remaining-essentially-unchanged-it-was-popularised-in-the-1960-s-with-the-release-of-letraset-sheets {
  color: #161616;
  text-align: justified;
  font: 500 17px/25px "Pretendard", sans-serif;
  position: absolute;
  left: 922px;
  top: 2882px;
  width: 615px;
  height: 167px;
}
.floor-plan {
  color: #000000;
  text-align: justified;
  font: 600 34px/25px "Pretendard", sans-serif;
  position: absolute;
  left: calc(50% - 103px);
  top: 3360px;
}
.options {
  color: #000000;
  text-align: center;
  font: 600 34px/25px "Pretendard", sans-serif;
  position: absolute;
  left: calc(50% - 74px);
  top: 4048px;
}
.more-views {
  color: #000000;
  text-align: justified;
  font: 600 34px/25px "Pretendard", sans-serif;
  position: absolute;
  left: calc(50% - 106px);
  top: 5415px;
}
._250723-6-1 {
  width: 1154px;
  height: 617px;
  position: absolute;
  left: 382px;
  top: 6581px;
}
.vector-13 {
  position: absolute;
  left: 924px;
  top: 6835px;
  overflow: visible;
}
.group-183 {
  position: absolute;
  left: 382px;
  top: 7225px;
  overflow: visible;
}
.group-299 {
  inset: 0;
}
.group-200 {
  width: 247px;
  height: 72px;
  position: static;
}
.rectangle-56 {
  background: #2c2c2c;
  border-radius: 36px;
  width: 247px;
  height: 72px;
  position: absolute;
  left: calc(50% - 123px);
  top: 7951px;
}

.vector-42 {
  position: absolute;
  left: 1248px;
  top: 443px;
  overflow: visible;
}
.vector-43 {
  position: absolute;
  left: 1327.5px;
  top: 443px;
  overflow: visible;
}
.vector-44 {
  position: absolute;
  left: 1537.5px;
  top: 443px;
  overflow: visible;
}
.vector-41 {
  left: 0px;
  top: 510px;
  overflow: visible;
}
.group-140 {
  inset: 0;
}
._210-66-m-57-py {
  color: #373737;
  text-align: center;
  font: 300 24px "Pretendard", sans-serif;
  position: absolute;
  left: 488px;
  top: 1918.52px;
  width: 193.76px;
  height: 32.48px;
}
.group-135 {
  width: 170.24px;
  height: 170.24px;
  position: static;
}
.ellipse-36 {
  background: #ffffff;
  border-radius: 50%;
  width: 170.24px;
  height: 170.24px;
  position: absolute;
  left: 499.2px;
  top: 1727px;
}
.area-1 {
  width: 105.06px;
  height: 105.06px;
  position: absolute;
  left: 531.3px;
  top: 1760.08px;
}
.group-136 {
  width: 170.24px;
  height: 224px;
  position: static;
}
._2-floors {
  color: #373737;
  text-align: center;
  font: 300 24px "Pretendard", sans-serif;
  position: absolute;
  left: 793.96px;
  top: 1918.52px;
  width: 95.2px;
  height: 32.48px;
}
.group-133 {
  width: 170.24px;
  height: 170.24px;
  position: static;
}
.ellipse-38 {
  background: #ffffff;
  border-radius: 50%;
  width: 170.24px;
  height: 170.24px;
  position: absolute;
  left: 757px;
  top: 1727px;
}
.tile {
  width: 105.06px;
  height: 105.06px;
  position: absolute;
  left: 789.1px;
  top: 1760.08px;
}
.group-138 {
  width: 170.24px;
  height: 224px;
  position: static;
}
._4-toilet {
  color: #373737;
  text-align: center;
  font: 300 24px "Pretendard", sans-serif;
  position: absolute;
  left: 1290.44px;
  top: 1918.52px;
  width: 87.36px;
  height: 32.48px;
}
.group-134 {
  width: 170.24px;
  height: 170.24px;
  position: static;
}
.ellipse-37 {
  background: #ffffff;
  border-radius: 50%;
  width: 170.24px;
  height: 170.24px;
  position: absolute;
  left: 1249px;
  top: 1727px;
}
.public-toilet {
  width: 105.06px;
  height: 105.06px;
  position: absolute;
  left: 1281.1px;
  top: 1760.08px;
}
.group-137 {
  width: 170.24px;
  height: 224px;
  position: static;
}
._5-room {
  color: #373737;
  text-align: center;
  font: 300 24px "Pretendard", sans-serif;
  position: absolute;
  left: 1042.2px;
  top: 1918.52px;
  width: 90.72px;
  height: 32.48px;
}
.group-132 {
  width: 170.24px;
  height: 170.24px;
  position: static;
}
.ellipse-39 {
  background: #ffffff;
  border-radius: 50%;
  width: 170.24px;
  height: 170.24px;
  position: absolute;
  left: 1003px;
  top: 1727px;
}
.room {
  width: 105.06px;
  height: 105.06px;
  position: absolute;
  left: 1035.1px;
  top: 1760.08px;
}
._210-66-m-57-py-2-floors-5-room-4-toilet {
  color: #585858;
  text-align: left;
  font: 300 18px "Pretendard", sans-serif;
  position: absolute;
  left: 1093px;
  top: 659px;
}
.group-202 {
  position: absolute;
  inset: 0;
}
.image-6 {
  width: 1413px;
  height: 394px;
  position: absolute;
  left: -198px;
  top: 1043px;
}
.rectangle-37 {
  background: linear-gradient(
    269.82deg,
    rgba(255, 255, 255, 1) 63.54166865348816%,
    rgba(255, 255, 255, 0) 100%
  );
  width: 1920px;
  height: 394px;
  position: absolute;
  left: 0px;
  top: 1043px;
}
.group-23 {
  width: 226px;
  height: 61px;
  position: static;
}
.rectangle-39 {
  background: #000000;
  border-radius: 36px;
  width: 226px;
  height: 61px;
  position: absolute;
  left: 1111px;
  top: 1263px;
}

.group-26 {
  width: 580px;
  height: 127px;
  position: static;
}
.rectangle-51 {
  width: 365px;
  height: 76px;
  left: 2px;
  top: 1px;
}
.rectangle-512 {
  background: #ffffff;
  border-radius: 50px;
  width: 365px;
  height: 76px;
  position: absolute;
  left: 0px;
  top: 0px;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.5);
}
.rectangle-87 {
  width: 365px;
  height: 76px;
  position: absolute;
  left: 2px;
  top: 99px;
}
.rectangle-513 {
  background: #ffffff;
  border-radius: 50px;
  width: 73px;
  height: 76px;
  position: absolute;
  left: 0px;
  top: 0px;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.5);
}
._1-f {
  color: #ffffff;
  text-align: justified;
  font: 600 34px/25px "Pretendard", sans-serif;
  position: absolute;
  left: 21px;
  top: 26px;
}
.rectangle-522 {
  background: #878787;
  border-radius: 50px;
  width: 78px;
  height: 78px;
  position: absolute;
  left: 0px;
  top: 98px;
}
._2-f {
  color: #ffffff;
  text-align: justified;
  font: 600 34px/25px "Pretendard", sans-serif;
  position: absolute;
  left: 21px;
  top: 124px;
}
._1 {
  color: #242424;
  text-align: justified;
  font: 600 18px/25px "Pretendard", sans-serif;
  position: absolute;
  left: 84px;
  top: 26px;
}
._145-81-m {
  color: #242424;
  text-align: justified;
  font: 600 18px/25px "Pretendard", sans-serif;
  position: absolute;
  left: 213px;
  top: 26px;
}
._35-py {
  color: #242424;
  text-align: justified;
  font: 300 18px/25px "Pretendard", sans-serif;
  position: absolute;
  left: 292px;
  top: 26px;
}
._2 {
  color: #242424;
  text-align: justified;
  font: 600 18px/25px "Pretendard", sans-serif;
  position: absolute;
  left: 84px;
  top: 124px;
}
._96-25-m {
  color: #242424;
  text-align: justified;
  font: 600 18px/25px "Pretendard", sans-serif;
  position: absolute;
  left: 213px;
  top: 124px;
}
._20-py {
  color: #242424;
  text-align: justified;
  font: 300 18px/25px "Pretendard", sans-serif;
  position: absolute;
  left: 288px;
  top: 124px;
}
._1-jm-230421-ver-05-1 {
  width: 636px;
  height: 314px;
  position: absolute;
  left: 527px;
  top: 1px;
}
.group-283 {
  position: absolute;
  inset: 0;
}
.rectangle-75 {
  background: #262626;
  width: 1920px;
  height: 230px;
  position: absolute;
  left: calc(50% - 960px);
  top: 8217px;
}
.copyright-2023-m-3-systems-all-rights-reserved {
  color: #ffffff;
  text-align: left;
  font: 500 12px "Pretendard", sans-serif;
  position: absolute;
  left: 1332px;
  top: 8395px;
}

._221-88-02146-127-16-188-l-422-l-410-1-2-146-10-688-4-82-2-595-0203 {
  color: #ffffff;
  text-align: left;
  font: 500 12px/0undefined "Pretendard", sans-serif;
  position: absolute;
  left: 382px;
  top: 8326px;
}
._221-88-02146-127-16-188-l-422-l-410-1-2-146-10-688-4-82-2-595-0203-span {
  color: #ffffff;
  font: 500 12px "Pretendard", sans-serif;
}
._221-88-02146-127-16-188-l-422-l-410-1-2-146-10-688-4-82-2-595-0203-span2 {
  color: #ffffff;
  font: 500 12px/18px "Pretendard", sans-serif;
}
._221-88-02146-127-16-188-l-422-l-410-1-2-146-10-688-4-82-2-595-0203-span3 {
  color: #ffffff;
  font: 500 12px "Pretendard", sans-serif;
}
._221-88-02146-127-16-188-l-422-l-410-1-2-146-10-688-4-82-2-595-0203-span4 {
  color: #ffffff;
  font: 500 12px/18px "Pretendard", sans-serif;
}

._19-span {
  color: #ffffff;
  font: 500 12px "Pretendard", sans-serif;
}
._19-span2 {
  color: #acacac;
  font: 500 12px "Pretendard", sans-serif;
}
._19-span3 {
  color: #ffffff;
  font: 500 12px "Pretendard", sans-serif;
}
.group-84 {
  position: absolute;
  left: 1509.21px;
  top: 8326.14px;
  overflow: visible;
}
.rectangle-129 {
  width: 130.13px;
  height: 34.09px;
  position: absolute;
  left: 382px;
  top: 8254.36px;
}
.group-282 {
  width: 19.95px;
  height: 19.95px;
  position: static;
}
.rectangle-130 {
  border-radius: 5.32px;
  border-style: solid;
  border-color: #ffffff;
  border-width: 1.8px;
  width: 19.95px;
  height: 19.95px;
  position: absolute;
  left: 1476.08px;
  top: 8323.66px;
}
.ellipse-44 {
  border-radius: 50%;
  border-style: solid;
  border-color: #ffffff;
  border-width: 1.8px;
  width: 11.43px;
  height: 11.43px;
  position: absolute;
  left: 1480.34px;
  top: 8327.92px;
}
.ellipse-45 {
  background: #ffffff;
  border-radius: 50%;
  width: 2.29px;
  height: 2.29px;
  position: absolute;
  left: 1490.28px;
  top: 8326.78px;
}
.rectangle-131 {
  width: 20.62px;
  height: 21.88px;
  position: absolute;
  left: 1544.38px;
  top: 8322.7px;
}
.group-56 {
  position: sticky;
  left: 1783px;
  top: 831px;
  overflow: visible;
}
.thumbnails {
  margin: auto;
  max-width: 60%;
  min-height: 203.57px;
  &.small {
    max-width: 50%;
  }
  &.big {
    position: relative;
    top: 10px;
  }
}
.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.5;
  cursor: pointer;
}
.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #000;
  border: 0;
}
.vueperslides__track-inner {
  height: 97%;
}
</style>
