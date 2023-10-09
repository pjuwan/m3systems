<template>
  <div id="model_page">
    <div class="container" :class="getClassNm">
      <img :src="state.imageSrc" />
      <div class="content-title">
        <label class="name">{{ state.modelTitle }}</label>
        <label>{{ state.modelDesc }}</label>
      </div>
      <div class="content">
        <div class="content-item">
          <div class="search">
            <div class="item-area">
              <input type="text"/>
              <img src="@/assets/img/model/find.svg" @click="doSearch()" />
            </div>
          </div>
          <div class="table">
            <div class="row">
              <span class="title">소재 | Material</span>
              <div class="item-area">
                <label v-for="material in materials" :key="material.value">
                  <input v-model="search.selectedMaterials" type="checkbox" :value="material.value" :disabled="material.isDisabled">
                  <span class="checkbox">{{ material.label }}</span>
                </label>
              </div>            
            </div>
            <div class="row">
              <span class="title">가격 | Price</span>
              <div class="item-area price">
                <input type="text"/><span class="txt">부터~</span><input type="text"/>
                <button>적용</button>
              </div>
            </div>
            <div class="row last">
              <span class="title">면적 | Area</span>
              <div class="item-area extent">
                <label v-for="area in areas" :key="area.value">
                  <input v-model="search.selectedAreas" type="checkbox" :value="area.value">
                  <span class="checkbox">{{ area.label }}</span>
                </label>
              </div>
            </div>                    
          </div>
        </div>      
      </div>
      <div class="model-list">
        <!-- 컨텐츠 표시 -->
        <div class="model-content">
          <div class="model-box">
            <!-- 모델 검색 조건 -->
            <div class="search">
              <span :class="{on: search.latestSort === '01'}" @click="search.latestSort = '01'">최신순</span>
              <span :class="{on: search.latestSort === '02'}" @click="search.latestSort = '02'">인기순</span>
              <span class="low-price" :class="{on: search.latestSort === '03'}" @click="search.latestSort = '03'">낮은가격순</span>
            </div>
            <div class="model">
              <div v-for="(item, idx) in displayedItems"
                :key="idx"
                class="model-item"
                :class="{ hidden: item.isHidden }"
                @click="goDetail()"
              >
                <div class="img" :style="getItemStyle(item)"></div>
                <div class="description">
                  <span class="name">{{ item.id }}</span>
                  <span class="text">A building that can be used for any purpose {{ item.content }}</span>
                  <div class="option">
                    <span><!--210.66m²[57PY]-->{{ `[${item.exclusive_area}PY]` }}</span>
                    <span>{{ `${item.storey_attic === 0 ? 1 : 2} Floors` }}</span>
                    <span>{{ `${item.num_of_room} Bedrooms` }}</span>
                    <span>{{ `${item.num_of_bath} Bathrooms` }}</span>
                  </div>
                  <div class="more-area">
                    <span class="price">{{ `${item.cost.toLocaleString()} 원` }}</span>
                    <div class="btn-area">
                      <span class="view">+ View more</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="no-data" v-if="displayedItems.length === 0">
                데이터가 없습니다.
              </div>
            </div>
          </div>
        </div>
        <!-- 페이지네이션 -->
        <div class="pagination">
          <button class="btn first" @click="gotoPage(1)" :disabled="currentPage === 1"></button>
          <button class="btn prev" @click="prevPage" :disabled="currentPage === 1"></button>
          <div class="page-group">
            <span
              v-for="pageNo in pagingRange" :key="pageNo"
              class="no"
              :class="{'on' : pageNo === currentPage}"
              @click="gotoPage(pageNo)"
            >
              {{ pageNo }}
            </span>
          </div>
          <button class="btn next" @click="nextPage" :disabled="currentPage === totalPages"></button>
          <button class="btn last" @click="gotoPage(totalPages)" :disabled="currentPage === totalPages"></button>
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
</template>
<script> 
import store from '@/store'
import { dataMixin } from '@/mixins/dataMixin';

export default {
  name: 'HouseModelList',
  mixins: [dataMixin],
  data() {
    return {
      items: [], // 전체 아이템 목록
      itemsPerPage: 8, // 페이지 당 아이템 수
      currentPage: 1, // 현재 페이지
      materials: [
        { value: 2, label: '강구조', isDisabled: false },
        { value: 1, label: '목구조', isDisabled: false },
        { value: 3, label: '철근콘크리트', isDisabled: true }
      ],
      areas: [
        { value: 1, label: '33㎡(10PY) 이하' },
        { value: 2, label: '33㎡~66㎡(10~20PY)' },
        { value: 3, label: '66㎡~99㎡(20~30PY)' },
        { value: 4, label: '99㎡~132㎡(30~40PY)' },
        { value: 5, label: '132㎡(40PY)이상' }
      ],      
      state: {
        modelTitle: '',
        modelDesc: '',
        classNm: ''
      },
      search: {
        id: '',
        latestSort: '01',
        selectedMaterials: [],
        minCost: null,
        maxCost: null,
        selectedAreas: []
      },
    }
  },
  computed: {
    // 현재 페이지에 표시할 아이템 목록 계산
    displayedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      const items = this.items.slice(startIndex, endIndex)

      if (items.length & 1) {
        items.push({
          ...items[0],
          isHidden: true 
        });
      }

      return items;
    },
    // 전체 페이지 수 계산
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    pagingRange() {
      const perPageNum = 10; // 페이지당 표시되는 항목 수
      const pageGroup = Math.ceil(this.currentPage / perPageNum);
      const startPage = ((pageGroup - 1) * perPageNum) + 1;
      let endPage = pageGroup * perPageNum;

      const totalPages = Math.floor((this.items.length - 1) / this.itemsPerPage) + 1;

      // 마지막페이지가 전체페이지보다 클 경우 계산
      if (endPage > totalPages) {
        endPage = totalPages;
      }

      return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    },
    menuId() {
      return store.state.menuId;
    },
    getClassNm() {
      return {
        full: this.state.modelType !== 'all', // 변수명을 클래스명으로 사용
      };
    }
  },
  watch: {
    menuId(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.state = this.getModelData(newVal);
    },
  },
  mounted() {
    this.items = this.getModelList();
    this.state = this.getModelData(this.menuId);
  },
  methods: {
    // 다음 페이지로 이동
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    // 이전 페이지로 이동
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    // 특정 페이지로 이동
    gotoPage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
    getItemStyle(item) {
      return {
        backgroundImage: `url(${item.imageList[0]})`,
        backgroundSize: '100% 100%',
      };
    },    
    goDetail() {
      this.$router.push({ name: 'HouseModelDetail' });
    },
    doSearch() {
      const { id, selectedMaterials, selectedAreas } = this.search;
      let items = this.getModelList();

      // ID 검색
      if (id !== '') {
        items = items.filter(item => item.id.toLowerCase().includes(id.toLowerCase()));
      }

      // 소재 검색
      if (selectedMaterials.length > 0) {
        items = items.filter(item => selectedMaterials.includes(item.material));
      }

      // 가격 검색
      const minCost = parseFloat(this.search.minCost);
      const maxCost = parseFloat(this.search.maxCost);
      if (!isNaN(minCost) && !isNaN(maxCost)) {
        items = items.filter(item => item.cost >= minCost && item.cost <= maxCost);
      }

      // 면적 검색
      if (selectedAreas.length > 0) {
        items = items.map(item => {
          const area = this.getArea(item.exclusive_area);
          return {
            ...item,
            area: area
          }
        });
        items = items.filter(item => selectedAreas.includes(item.area));
      }      

      this.items = items;
    }    
  }
}
</script>