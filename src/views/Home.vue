<template>
<div class="mainpage">
  <div class="container">
    <!-- autoplay 설정가능 -->
    <vueper-slides fade :touchable="false" fixed-height="915px">
      <vueper-slide
        v-for="(top, i) in topInfoList"
        :key="i">
        <template v-slot:content>
          <div class="content">
            <img :src="top.imageList[0]" />
            <div class="subject">
              <div class="model">{{ top.id }}</div>
              <div class="now">지금 바로 만나보세요</div>
              <div class="view">
                <div class="group">
                  <div class="rectangle"></div>
                  <div class="text" @click="goDetail(top.id)">보러가기</div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
    <div class="new-carousel">
      <div class="header-area">
        <div class="text-wrapper1">새로운 모델</div>
        <div class="text-wrapper2">새로운 모델을 만나보세요</div>
      </div>
      <div class="carousel">
        <div class="indicator">
          <div v-for="(item, idx) in newModelList"
            :key="idx"
            class="div-2"
            :class="{ 'active': item.isChecked }"
            @click="onNewModel(idx)"
          >
            <img class="element" :src="item.imageList[0]" />
          </div>
        </div>        
      </div>
      <div class="frame">
        <div class="source" v-for="(item, idx) in newModelList"
            :key="idx"
            :class="{ 'active': item.isChecked }"
          >
          <transition name="fade">
            <div v-if="item.isChecked" class="element-wrapper">
              <div class="image-box" @click="goDetail(item.id)">
                <img class="img" :src="item.imageList[0]" />
              </div>
              <div class="group-4">
                <div class="text-wrapper">{{ item.id }}</div>
                <p class="p">A building that can be used for any purpose</p>
                <div class="text-wrapper-2">{{ `${(item.exclusive_area * 3.3).toFixed(2)}m²` }}</div>
                <img class="line" src="@/assets/img/line-7.svg" />
                <div class="text-wrapper-2">{{ `${item.num_of_room} Bedrooms` }}</div>
                <img class="line" src="@/assets/img/line-9.svg" />
                <div class="text-wrapper-2">{{ `${item.num_of_bath} Bathrooms` }}</div>
                <div class="text-wrapper-6">{{ `${item.cost.toLocaleString()} won` }}</div>
                <div class="text-wrapper-7">+ View more</div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="best-model">
      <div class="text-wrapper-20">베스트 모델</div>
      <p class="text-wrapper-21">지금 가장 인기있는 모델을 만나보세요</p>
      <div class="best-slider">
        <div v-if="bestModel.list?.length > 2" class="overlap-4">
          <img class="element-2" :src="getCurrentImage(-2)" />
          <img class="element-3" :src="getCurrentImage(-1)" />
        </div>
        <div class="overlap-6">
          <div v-for="(item, idx) in bestModel.list" :key="idx" class="group-9" :class="{action: item.isChecked}">
            <div v-if="item.isChecked" class="overlap-group-3">
              <img class="element-6" :src="item.imageList[0]" @click="goDetail(item.id)"/>
              <div class="text-wrapper-18">{{ item.id }}</div>
              <p class="text-wrapper-17">{{ `See our best models here.` }}</p>
              <div class="text-wrapper-19">{{ item.cost.toLocaleString() }} Won</div>
            </div>
          </div>
          <div class="group-10" @click="goNext()"><img class="vector-3" src="@/assets/img/vector-1-3.svg" /></div>
          <div class="group-11" @click="goPrev()"><img class="vector-4" src="@/assets/img/vector-1-2.svg" /></div>
        </div>
        <div v-if="bestModel.list?.length > 2" class="overlap-5">
          <img class="element-4" :src="getCurrentImage(1)" />
          <img class="element-5" :src="getCurrentImage(2)" />
        </div>
      </div>
    </div>
    <div class="custom-home-recommendation">
      <a href="https://m3systems.co.kr/use-case/plan" target="_blank" rel="noopener noreferrer">
        <div class="more-area">
          <div class="rectangle"></div>
          <img src="@/assets/img/image-6.png" />
          <div class="text-how-area">
            <p class="text">나에게 딱 맞는 집은 어떤 집일까 ?</p>
            <span class="text">맞춤 주택 추천받기</span>
          </div>
          <div class="text-more-area">
            <div class="text">더 알아보기</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import { dataMixin } from '@/mixins/dataMixin';
import store from '@/store';

export default {
  name: 'HomePage',
  mixins: [dataMixin],
  components: {
    VueperSlides,
    VueperSlide
  },
  data() {
    return {
      topInfoList: [],
      newModelList : [],      
      bestModel: {
        selected: {},
        currentIndex: 0,
        list: []
      }
    }
  },
  created() {
    const homeData = this.getHomeData();
    const { topInfoList, newModelList, bestModelList } = homeData;

    // Top 정보
    this.topInfoList = topInfoList;

    // 새로운 모델
    this.newModelList = newModelList.map((item, idx) => {
      return {
        ...item,
        isChecked: idx === 0 ? true : false
      }
    });

    // 베스트 모델
    if (bestModelList.length > 0) {
      this.bestModel.list = bestModelList.map((item, idx) => ({
        ...item,
        isChecked: idx === 0 ? true : false
      }));
      this.bestModel.selected = this.bestModel.list[0];
    }
  },
  methods: {
    onNewModel(index) {
      this.newModelList.forEach((item, idx) => {
        item.isChecked = index === idx;
      });      
    },
    goPrev() {
      const { selected, list } = this.bestModel;
      const currentIndex = list.findIndex(obj => JSON.stringify(obj) === JSON.stringify(selected));

      // 체크상태 초기화
      list.forEach(item => item.isChecked = false);

      const prevIndex = (currentIndex - 1 + list.length) % list.length; // 이전 인덱스 계산

      // 이전 요소 가져오기
      const prevElement = list[prevIndex];
      prevElement.isChecked = true;

      // 선택된 요소 및 현재 인덱스 업데이트
      this.bestModel.selected = prevElement;
      this.bestModel.currentIndex = prevIndex;
    },
    goNext() {
      const { selected, list } = this.bestModel;
      const currentIndex = list.findIndex(obj => JSON.stringify(obj) === JSON.stringify(selected));

      // 체크상태 초기화
      list.forEach(item => item.isChecked = false);

      const nextIndex = (currentIndex + 1) % list.length; // 다음 인덱스 계산

      // 다음 요소 가져오기
      const nextElement = list[nextIndex];
      nextElement.isChecked = true;

      // 선택된 요소 및 현재 인덱스 업데이트
      this.bestModel.selected = nextElement;
      this.bestModel.currentIndex = nextIndex;
    },
    getCurrentImage(index) {
      const { list } = this.bestModel;
      let currentIndex = this.bestModel.currentIndex + index;
      const length = list.length;

      // 음수 인덱스를 양수로 변환하는 함수
      const normalizeIndex = (idx) => ((idx % length) + length) % length;

      currentIndex = normalizeIndex(currentIndex);
      const imageSrc = list[currentIndex]?.imageList[0];
      
      return imageSrc;
    },
    goDetail(id) {
      store.commit('setMenuId', 'M200'); // 전체메뉴로 설정
      this.$router.push({ name: 'HouseModelDetail', params: { id: id } });
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.mainpage {
  .content {
    height: 100%;
  }
  .content img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content .subject {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .content .subject .model{
      text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5019607843);
      color: #ffffff;
      font-size: 75px;
      font-family: "Pretendard-SemiBold", Helvetica;
      font-weight: 600;
      text-align: center;
      letter-spacing: 0;
      line-height: normal;
      white-space: nowrap;
  }
  .content .subject .now{
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5019607843);
    font-family: "Pretendard-Light", Helvetica;
    font-weight: 300;
    color: #ffffff;
    font-size: 32px;
    text-align: center;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
  }
  .content .view {
    position: absolute;
    width: 339px;
    height: 73px;
    top: 143px;
    left: 19%;
  }
  .content .view .group {
    position: relative;
    border-radius: 11px;
  }
  .content .view .rectangle {
    width: 337px;
    height: 73px;
    background-color: #ffffff;
    border-radius: 11px;
    box-shadow: inset 0px 0px 15px 3px rgba(0, 0, 0, 0.5019607843);
  }
  .content .view .text {
    position: absolute;
    top: 17px;
    left: 113px;
    font-family: "Pretendard-ExtraLight", Helvetica;
    font-weight: 200;
    color: #686868;
    font-size: 32px;
    text-align: center;
    letter-spacing: 0;
    line-height: normal;
    white-space: nowrap;
    cursor: pointer;
  }
  .best-model {
    .btn-box {
      position: relative;
      margin: 36px 0 0 0;
      .btn {
        position: absolute;
        width: 59px;
        height: 59px;
        top: 143px;      
        background-color: rgba(255, 255, 255, 0.6901960784);
        border-radius: 29.5px;
        border: 1px solid;
        border-color: rgba(149, 149, 149, 0.6901960784);
        cursor: pointer;
        z-index: 2;      
        &.prev {
          right: 64%;
          transform: rotate(180deg);
          img {
            position: absolute;
            width: 13px;
            height: 24px;
            top: 17px;
            left: 24px;
            transform: rotate(-180deg);      
          }
        }
        &.next {
          left: 64%;
          img {
            position: absolute;
            width: 13px;
            height: 24px;
            top: 16px;
            left: 24px;      
          }
        }
      }
    }
    .image {
      text-align: center;
      margin: 30px 0 0 0;
      img {
        width: 464px;
        height: 304px;
        -o-object-fit: cover;
        object-fit: cover;
        border-radius: 30px;  
      }
    }
    .vueperslide--active .image {
      margin: 0;
      img {
      width: 577px;
      height: 355px;
      object-fit: cover;
      border-radius: 30px;
      }
    }
    .vueperslide--visible .desc {
      display: none;
    }
    .vueperslide--active .desc {
      display: block;
    }
  }
  
  .vueperslides__arrow--prev::before,
  .vueperslides__arrow--next::before {
    content: "";
    display: block;
    width: 78px;
    height: 78px;
    flex-shrink: 0;
    opacity: 0.6;
    border-radius: 40px;
    background-color: #111;
    position: absolute;
    z-index: -1;
  }
  
  .vueperslides__arrow--next::before {
    left: -21px;
  }
  
  .vueperslides__arrow--prev svg {
    width: 48px;
    position: absolute;
    top: 6px;
    left: 17px;  
  }
  
  .vueperslides__arrow--next svg {
    width: 48px;
    position: relative;
    top: 4px;
    left: -9px;
  }
}

</style>
