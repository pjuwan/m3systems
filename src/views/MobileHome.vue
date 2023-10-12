<template>
  <div id="mobileHomePage" class="mobile">
    <div class="div">
      <!-- autoplay 설정가능 -->
      <vueper-slides
        fixed-height="207.812px"
        :bullets-outside="true"
        :arrows="false"
        :dragging-distance="10"
        transition-speed="250"
      >
        <vueper-slide
          v-for="(top, i) in topInfoList"
          :key="i">
          <template v-slot:content>
            <div class="content">
              <img :src="top?.imageList?.[0]">
              <div class="subject">
                <div class="text-area">
                  <span>{{ top?.id }}</span>
                  <span>Buy our houses now!!!</span>
                </div>
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
      <div class="new-model">
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
        <div class="frame">
          <div v-for="(item, idx) in newModelList"
            :key="idx"
            class="source"
            :class="{ 'active': item.isChecked }"
          >
            <transition name="fade">
              <div v-if="item.isChecked" class="group">
                <div class="overlap-group-2">
                  <img class="img" :src="item.imageList[0]" @click="goDetail(item.id)" />
                  <div class="text-wrapper">{{ item.title }}</div>
                  <p class="p">A building that can be used for any purpose</p>
                  <p class="element-m-floors">{{ modelSpec(item) }}
                  </p>
                  <div class="text-wrapper-2">{{ `${item.cost.toLocaleString()}won`}}</div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="best-slider">
        <div class="overlap-3">
          <div class="group-5">
            <div class="text-wrapper-6">베스트 모델</div>
            <p class="text-wrapper-5">지금 가장 인기있는 모델을 만나보세요</p>
          </div>          
          <div class="carousel-2">
            <div class="frame-2">
              <div class="prev" @click="goPrev()"><img class="vector-4" src="@/assets/img/vector-1-2.svg"/></div>
              <div class="layer">
                <img class="source best" :src="bestModel.selected?.imageList[0]" @click="goDetail(bestModel.selected.id)"/>
              </div>
              <div class="next" @click="goNext()"><img class="vector-3" src="@/assets/img/vector-1-3.svg"/></div>
            </div>
            <div class="group-6">
              <div class="text-wrapper-8">{{ bestModel.selected?.id }}</div>
              <div class="text-wrapper-7">{{ `${ bestModel.selected?.cost.toLocaleString() } Won` }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 맞춤 주택 추천받기 -->
      <custom-home-recommendation />
    </div> 
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import { dataMixin } from '@/mixins/dataMixin';
import store from '@/store';
import CustomHomeRecommendation from '@/components/CustomHomeRecommendation.vue';

export default {
  name: 'MobileHomePage',
  mixins: [dataMixin],
  components: {
    VueperSlides,
    VueperSlide,
    CustomHomeRecommendation
  },
  data() {
    return {
      topInfoList: [],
      newModelList : [],      
      bestModel: {
        selected: null,
        currentIndex: 0,
        list: []
      }
    };
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
    modelSpec(item) {
      const { exclusive_area, num_of_room, num_of_bath } = item;
      const exclusiveArea = `${(exclusive_area * 3.3).toFixed(2)}m² [${exclusive_area}PY]`;
      const numOfRoom = `${num_of_room}Room`;
      const numOfBath = `${num_of_bath}Toliet`;
  
      return [exclusiveArea, numOfRoom, numOfBath].join(" | ");
    },
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
    goDetail(id) {
      store.commit('setMenuId', 'M200'); // 전체메뉴로 설정
      this.$router.push({ name: 'MobileHouseModelDetail', params: { id: id } });
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  display: inline-block;
  .subject {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .text-area {
      display: flex;
      flex-direction: column;    
    }
    span {
      text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5019607843);
      font-family: "Pretendard-Light", Helvetica;
      font-weight: 600;
      color: #ffffff;
      font-size: 38px;
      text-align: center;
      letter-spacing: 0;
      line-height: normal;
      white-space: nowrap;    
    }
    span:last-child {
      font-size: 23px;
    }
  }
  img {
    display: flex;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }  
}
</style>
