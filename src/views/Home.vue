<template>
<div id="home" class="home">
  <div class="container">
    <!-- autoplay 설정가능 -->
    <vueper-slides fade :touchable="false" fixed-height="915px">
      <vueper-slide
        v-for="(top, i) in topInfoList"
        :key="i">
        <template v-slot:content>
          <div class="content">
            <img :src="require(`@/assets/img/plan/${top.imageList[0]}`)" />
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
        <div class="title">새로운 모델</div>
        <div class="desc">새로운 모델을 만나보세요</div>
      </div>
      <div class="carousel">
        <div class="indicator">
          <div v-for="(item, idx) in newModelList"
            :key="idx"
            class="image-box"
            :class="{ 'active': item.isChecked }"
            @click="onNewModel(idx)"
          >
            <img :src="require(`@/assets/img/plan/${item.imageList[0]}`)" />
          </div>
        </div>
      </div>
      <div class="frame">
        <div class="source" v-for="(item, idx) in newModelList"
            :key="idx"
            :class="{ 'active': item.isChecked }"
          >
          <transition name="fade">
            <div v-if="item.isChecked" class="fade-wrapper">
              <div class="image-box" @click="goDetail(item.id)">
                <img class="img" :src="require(`@/assets/img/plan/${item.imageList[0]}`)" />
              </div>
              <div class="desc-area">
                <div class="id">{{ item.id }}</div>
                <p class="p">A building that can be used for any purpose</p>
                <span>{{ `${(item.exclusive_area * 3.3).toFixed(2)}m²` }}</span>
                <img class="line" src="@/assets/img/underline.svg" />
                <span>{{ `${item.num_of_room} Bedrooms` }}</span>
                <img class="line" src="@/assets/img/underline.svg" />
                <span>{{ `${item.num_of_bath} Bathrooms` }}</span>
                <div class="cost">{{ `${item.cost.toLocaleString()} won` }}</div>
                <div class="more">+ View more</div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="best-model">
      <div class="best-model-title">베스트 모델</div>
      <p>지금 가장 인기있는 모델을 만나보세요</p>
      <div v-if="bestModel.list?.length > 0" class="best-slider">
        <div v-if="bestModel.list?.length > 2" class="left-image">
          <img :src="require(`@/assets/img/plan/${getCurrentImage(-2)}`)" />
          <img :src="require(`@/assets/img/plan/${getCurrentImage(-1)}`)" />
        </div>
        <div class="main-area">
          <div class="center-image" v-for="(item, idx) in bestModel.list" :key="idx">
            <template v-if="item.isChecked">
              <img :src="require(`@/assets/img/plan/${item.imageList[0]}`)" @click="goDetail(item.id)"/>
              <span class="id">{{ item.id }}</span>
              <p>{{ `See our best models here.` }}</p>
              <span class="cost">{{ item.cost.toLocaleString() }} Won</span>
            </template>
          </div>
          <div class="prev" @click="goPrev()"><img src="@/assets/img/prev.svg" /></div>
          <div class="next" @click="goNext()"><img src="@/assets/img/next.svg" /></div>
        </div>
        <div v-if="bestModel.list?.length > 2" class="right-image">
          <img :src="require(`@/assets/img/plan/${getCurrentImage(1)}`)" />
          <img :src="require(`@/assets/img/plan/${getCurrentImage(2)}`)" />
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
  name: 'HomePage',
  mixins: [dataMixin],
  components: {
    VueperSlides,
    VueperSlide,
    CustomHomeRecommendation
  },
  data() {
    return {
      topInfoList: [], // Top 모델 정보
      newModelList : [], // 새로운모델 정보
      bestModel: { // 베스트 모델 정보
        selected: {}, // 현재 선택된 정보
        currentIndex: 0, // 현재 선택된 위치
        list: [] // 베스트 모델 정보 리스트
      }
    }
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
    /* 베스트 모델 현재 이미지 SRC 정보 */
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
    /* 모델 상세 이동 */
    goDetail(id) {
      store.commit('setMenuId', 'M200'); // 전체메뉴로 설정
      this.$router.push({ name: 'HouseModelDetail', params: { id: id } });
    }
  }
}
</script>