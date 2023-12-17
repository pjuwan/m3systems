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
        <span @click="goMenu('Home')">
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
          <img :src="require(`@/assets/img/plan/${modelDetail.imageList[0]}`)" />
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
      <!-- 맞춤 주택 추천받기 -->
      <custom-home-recommendation />      
      <div class="center-area">
        <div class="center-item">
          <span class="model">{{ modelDetail.id }}</span>
          <span>{{ `${modelDetail.material_name} ${modelDetail.type_name} 주택` }}</span>
          <span class="premium-model">{{ modelDetail.model_name }}</span>
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
          <img :src="require(`@/assets/img/plan/${modelDetail.imageList[1]}`)" />
          <div class="desc-area">
            <div class="left">
              <span class="model">{{ modelDetail.id }}</span>
              <span class="name">{{ `${modelDetail.material_name} ${modelDetail.type_name} 주택` }}</span>
              <span>
                {{ `${modelDetail.model_name} | ${modelSpec}` }}
              </span>
            </div>
            <div class="right">
              <span>{{ modelDetail.model_desc }}</span>
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
            v-for="(slide, i) in options"
            :key="i"
            :image="require(`@/assets/img/plan/${slide}`)"
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
                <img :src="require(`@/assets/img/plan/${slide}`)">
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
              <img v-for="(src, idx) in moreViews" :key="idx" class="img" :src="require(`@/assets/img/plan/${src}`)" @click="showCarouselInfo" />
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
                <img :src="require(`@/assets/img/plan/${src}`)" width="100%" height="100%">
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
import CustomHomeRecommendation from '@/components/CustomHomeRecommendation.vue';
import store from '@/store'

export default {
  name: "HouseModelDetail",
  mixins: [dataMixin],
  components: {
    VueperSlides,
    VueperSlide,
    CustomHomeRecommendation
  },
  data() {
    return {
      modelDetail: {}, // 메뉴 상세 데이터
      selectedFloor: '01', // 층 정보 (현재 사용안함)
      isShowCostInfo: false, // 가격정보 모달 팝업
      isShowCarouselInfo: false, // MORE VIEWS 이미지 팝업
      timeoutId: null // 가격정보 모달 팝업 타임아웃 설정용
    };
  },
  created() {
    this.modelDetail = this.getModelDetail(this.$route.params.id);
  },
  computed: {
    /* 메뉴 정보 */
    menuId() {
      return store.state.menuId;
    },    
    /* 모델 상세 정보 */
    modelSpec() {
      const { exclusive_area, num_of_room, num_of_bath } = this.modelDetail;
      const exclusiveArea = `${(exclusive_area * 3.3).toFixed(2)}m² [${exclusive_area}PY]`;
      const numOfRoom = `${num_of_room}Room`;
      const numOfBath = `${num_of_bath}Toliet`;

      return [exclusiveArea, numOfRoom, numOfBath].join(" | ");
    },
    /* OPTIONS 항목은 3번째 이미지부터 3개의 데이터 */
    options() {
      return this.modelDetail.imageList.slice(2, 5);
    },
    /* MORE VIEWS 이미지는 6번째부터 나머지 이미지 */
    moreViews() {
      return this.modelDetail.imageList.slice(5);
    }
  },
  methods: {
    /* 메뉴 이동 */
    goMenu(menuNm) {
      this.$router.push({ name: menuNm });
    },
    /* 가격정보 팝업 보이기 */
    showCostInfo() {
      clearTimeout(this.timeoutId); // 이전 타임아웃 제거
      this.isShowCostInfo = true;
    },
    /* 가격정보 팝업 감추기 */
    closeCostInfo() {
      this.timeoutId = setTimeout(() => {
        this.isShowCostInfo = false;
      }, 50); // 일정 시간 후 팝업 숨김
    },
    /* MORE VIEWS 이미지 팝업 보이기 */
    showCarouselInfo() {
      this.isShowCarouselInfo = true;
      document.body.classList.add('hidden');
    },
    /* MORE VIEWS 이미지 팝업 감추기 */
    closeCarouselInfo() {
      this.isShowCarouselInfo = false;
      document.body.classList.remove('hidden');
    }    
  },
};
</script>