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
        <div class="title">새로운 모델</div>
        <div class="desc">새로운 모델을 만나보세요</div>
        <div class="carousel">
          <div class="indicator">
            <div v-for="(item, idx) in newModelList"
              :key="idx"
              class="image-box"
              :class="{ 'active': item.isChecked }"
              @click="onNewModel(idx)"
            >
              <img :src="item.imageList[0]" />
            </div>
          </div>
          <div class="frame">
            <div v-for="(item, idx) in newModelList"
              :key="idx"
              class="source"
              :class="{ 'active': item.isChecked }"
            >
              <transition name="fade">
                <div v-if="item.isChecked" class="fade-wrapper">
                  <div class="image-box">
                    <img class="img" :src="item.imageList[0]" @click="goDetail(item.id)" />
                    <div class="title">{{ item.title }}</div>
                    <p>A building that can be used for any purpose</p>
                    <p class="model-spce">{{ modelSpec(item) }}</p>
                    <span class="cost">{{ `${item.cost.toLocaleString()}won`}}</span>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <div class="best-model">
        <div class="best-model-title">베스트 모델</div>
        <p>지금 가장 인기있는 모델을 만나보세요</p>
        <div class="main-area">
          <div class="center-image">
            <div class="prev" @click="goPrev()"><img src="@/assets/img/prev.svg"/></div>
            <div class="layer">
              <img class="best" :src="bestModel.selected?.imageList[0]" @click="goDetail(bestModel.selected.id)"/>
            </div>
            <div class="next" @click="goNext()"><img class="vector-3" src="@/assets/img/next.svg"/></div>
          </div>
          <div class="desc-area">
            <span>{{ bestModel.selected?.id }}</span>
            <span class="cost">{{ `${ bestModel.selected?.cost.toLocaleString() } Won` }}</span>
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
      topInfoList: [], // Top 모델 정보 리스트
      newModelList : [], // 새로운모델 정보 리스트
      bestModel: { // 베스트 모델 정보
        selected: null, // 현재 선택된 정보
        currentIndex: 0, // 현재 선택된 위치
        list: [] // 베스트 모델 정보 리스트
      }
    };
  },
  created() {
    /* Json HomeData 설정 부분 */
    const homeData = this.getHomeData();
    const { topInfoList, newModelList, bestModelList } = homeData;

    // Top 최상위 영역 모델 정보
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
    /* 모바일 새로운 모델 상세 정보 */
    modelSpec(item) {
      const { exclusive_area, num_of_room, num_of_bath } = item;
      const exclusiveArea = `${(exclusive_area * 3.3).toFixed(2)}m² [${exclusive_area}PY]`;
      const numOfRoom = `${num_of_room}Room`;
      const numOfBath = `${num_of_bath}Toliet`;
  
      return [exclusiveArea, numOfRoom, numOfBath].join(" | ");
    },
    /* 새로운 모델 현재 선택된 정보 */
    onNewModel(index) {
      this.newModelList.forEach((item, idx) => {
        item.isChecked = index === idx;
      });      
    },    
    /* 베스트 모델 이전 버튼 */
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
    /* 베스트 모델 다음 버튼 */
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
    /* 모델 상세 이동 */
    goDetail(id) {
      store.commit('setMenuId', 'M200'); // 전체메뉴로 설정
      this.$router.push({ name: 'MobileHouseModelDetail', params: { id: id } });
    }
  }
}
</script>