<template>
  <div id="houseModelDetail" class="model-detail-page">
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
          <option>{{ `${modelDetail.type_name} 모델` }}</option>
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
            {{ modelDetail.model_title }}
          </span>
          <div class="txt">
            {{ modelSpec }}
          </div>          
          <div class="price-area">
            <span class="price">{{ modelDetail.cost.toLocaleString() }}</span><span>원</span>
            <div class="help" @mouseover="showCostInfo" @mouseout="closeCostInfo">
              <span class="i">i</span>
              <span class="round"></span>            
            </div>
            <div class="group-165">
            </div>
          </div>
          <div class="btn-area">
            <button @click="goMenu('Question')">문의하기</button>
          </div>
          <div v-if="isShowCostInfo" @mouseleave="closeCostInfo" class="modal">
            <div class="modal-content">
              <div class="modal-header">
                <p>가격정보</p>
              </div>
              <div class="modal-body">
                <ul>
                  <li><span>기초토목공사 인허가 운송 설치 및 부가세 별도</span></li>
                  <li><span>일부 인테리어 포함 가격입니다. (붙박이장 등)</span></li>
                  <li><span>옵션사항에 따라 가격에 변동이 있을 수 있습니다.</span></li>
                </ul>
              </div>
            </div>
          </div>            
        </div>
      </div>
      <div class="center-area">
        <div class="center-item">
          <span class="model">{{ modelDetail.id }}</span>
          <span>{{ `${modelDetail.material_name} ${modelDetail.type_name} 주택` }}</span>
          <span class="premium-model">{{ modelName }}</span>
          <div class="option-area">
            <div class="option">
              <div class="option-item">
                <img src="@/assets/img/model/detail/area-1.png" />
              </div>
              <span>{{`${(modelDetail.exclusive_area * 3.3).toFixed(2)}m² [${modelDetail.exclusive_area}PY]`}}</span>
            </div>
            <!--
            <div class="option">
              <div class="option-item">
                <img src="@/assets/img/model/detail/tile.png" />
              </div>
              <span>2 Floors</span>
            </div>
            -->
            <div class="option">
              <div class="option-item">
                <div class="ellipse-39"></div>
                <img src="@/assets/img/model/detail/room.png" />
              </div>
              <span>{{`${modelDetail.num_of_room}Room`}}</span>
            </div>
            <div class="option">
              <div class="option-item">
                <img src="@/assets/img/model/detail/public-toilet.png" />
              </div>
              <span>{{`${modelDetail.num_of_bath}Toliet`}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="center-desc-area">
        <div class="item-area">
          <img :src="modelDetail.imageList[1]" />
          <div class="desc-area">
            <div class="left">
              <span class="model">{{ modelDetail.id }}</span>
              <span class="name">{{ `${modelDetail.material_name} ${modelDetail.type_name} 주택` }}</span>
              <span>
                {{ `${modelName} | ${modelSpec}` }}
              </span>
            </div>
            <div class="right">
              <span>{{ modelDetail.model_desc }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="floor-plan-area" style="display: none;">
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
            v-for="(slide, i) in options"
            :key="i"
            :image="slide"
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
            v-for="(slide, i) in options"
            :key="i">
            <template v-slot:content>
              <div class="slide-area">
                <img :src="slide">
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
          <span>{{ modelDetail.option_desc }}</span>
      </div>
      </div>
      <div class="more-views-area">
        <span class="title">MORE VIEWS</span>
        <div class="view-area">
          <div class="image-item">
            <div class="view">
              <img v-for="(src, idx) in moreViews" :key="idx" class="img" :src="src" @click="showCarouselInfo" />
            </div>
          </div>
          <div class="video-area" style="display: none;">
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
    <div v-if="isShowCarouselInfo" class="carousel-modal">
      <div class="overlap"></div>
      <div class="modal-content">
        <div class="modal-header">
          <div class="btn-area">
            <img src="@/assets/img/model/x.svg" @click="closeCarouselInfo"/>
          </div>
        </div>
        <div class="modal-body">
          <vueper-slides
          class="no-shadow thumbnails"
          :slide-ratio="1 / 4"
          fixed-height="1080px"
          :arrows="true"
          :bullets="false"
          :dragging-distance="50"
        >
          <vueper-slide v-for="(src, i) in moreViews" :key="i">
            <template v-slot:content>
              <div class="item">
                <img :src="src" width="100%" height="100%">
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
        </div>
      </div>
    </div>    
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import { dataMixin } from '@/mixins/dataMixin';
import store from '@/store'

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
      isShowCostInfo: false,
      isShowCarouselInfo: false,
      timeoutId: null
    };
  },
  created() {
    console.log(this.$route.params.id);
    this.modelDetail = this.getModelDetail(this.$route.params.id);
  },
  computed: {
    menuId() {
      return store.state.menuId;
    },    
    modelSpec() {
      const { exclusive_area, num_of_room, num_of_bath } = this.modelDetail;
      const exclusiveArea = `${(exclusive_area * 3.3).toFixed(2)}m² [${exclusive_area}PY]`;
      const numOfRoom = `${num_of_room}Room`;
      const numOfBath = `${num_of_bath}Toliet`;

      return [exclusiveArea, numOfRoom, numOfBath].join(" | ");
    },
    modelName() {
      return this.getModelName(this.modelDetail.type);
    },
    // OPTIONS 항목은 3번째 이미지부터 3개의 데이터
    options() {
      return this.modelDetail.imageList.slice(2, 5);
    },
    // MORE VIEWS 이미지는 6번째부터 나머지 이미지
    moreViews() {
      return this.modelDetail.imageList.slice(5);
    }
  },
  methods: {
    goMenu(menuNm, menuId) {
      this.menuId = menuId;
      this.$router.push({ name: menuNm });
    },
    showCostInfo() {
      clearTimeout(this.timeoutId); // 이전 타임아웃 제거
      this.isShowCostInfo = true;
    },
    closeCostInfo() {
      this.timeoutId = setTimeout(() => {
        this.isShowCostInfo = false;
      }, 50); // 일정 시간 후 팝업 숨김
    },
    showCarouselInfo() {
      this.isShowCarouselInfo = true;
      document.body.classList.add('hidden');
    },
    closeCarouselInfo() {
      this.isShowCarouselInfo = false;
      document.body.classList.remove('hidden');
    }    
  },
};
</script>
<style lang="scss">
#houseModelDetail {
  background: #ffffff;
  width: 100%;
  margin-bottom: 138px;
  position: relative;
  overflow: hidden;
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
        position: relative;
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
            width: 26px;
            height: 24px;
            align-items: center;
            display: flex;
            position: relative;
            .i {
              position: absolute;
              left: 4.5px;
              top: 0;
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
        .modal {
          width: 410px;
          height: 200px;
          position: absolute;
          top: 276px;
          left: 288px;
          p,
          span {
            color: #585858;
            font-family: Pretendard;
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;          
          }
          .modal-content {
            background: url('@/assets/img/model/modal-box.svg');            
            background: url(http://localhost:8080/img/modal-box.569434e8.svg);
            background-repeat: no-repeat;
            background-size: 410px 200px;
            background-position: left center;
            padding: 12px 0 0 27px;
            position: absolute;
            z-index: 2;
            width: 100%;
            height: 100%;            
            .modal-header {
              p {
                color: #3D3D3D;
                font-size: 20px;
                font-weight: 500;
              }
            }
            .modal-header::before {
              content: "";
              width: 345px;
              display: block;
              border-bottom: 1px solid #ABABAB;
              position: absolute;
              top: 44px;
            }
            .modal-body {
              padding: 11px 0 0 5px;
              ul {
                list-style-type: none;
                padding: 7px 9px 0 0;
                li {
                  margin: 3px 0;
                  position: relative;
                }
                li::before {
                  content: url('@/assets/img/model/dot.svg');
                  position: absolute;
                  left: -6px;
                  top: -4px;                    
                }
              }
            }
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
        width: 62%;
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
          width: 62%;
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
      margin-top: 134px;
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
          width: 62%;
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
            width: 62%;
            .img {
              width: 378px;
              margin: 7px 7px 7px;
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
      margin: 80px 0 0 0;
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

span {
  display: block;
  color: #FFF;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  line-height: normal;  
}
.top-area {
  background: #000000;
  width: 100%;
  height: 443px;
  left: 0px;
  top: 0px;
  text-align: center;
  .top {
    display: flex;
    padding: 9.5% 0 0 0;
    width: 100%;
    justify-content: center;
    gap: 4%;
    .how {
      font-weight: 600;
      margin: 12px 0 8px 0;
    }
  
    .name {
      font-weight: 300;  
    }  
  }
  }

  .slide-area {
    display: block;
    text-align: center;
    img {
      width: 100%;
    }
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

  .carousel-modal {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;       
    .overlap {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(225 225 225 / 70%);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
    }
    .modal-content {
      position: absolute;
      top: 10%;
      z-index: 2;
      width: 100%;
      height: 100%;    
      .modal-header {
        width: 100%;
        display: inline-flex;
        justify-content: center;
        .btn-area {
          background: black;
          padding-left: 10px;
          width: 60%;
          height: 63px;
          align-items: center;
          display: flex;
        }
      }
      .modal-body .item {
        max-width: 100%;
        max-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .vueperslides__arrow {
        position: absolute;
        top: 272px;    
        svg {
          color: black;
          width: 124px;
        }    
      }
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
}
</style>
