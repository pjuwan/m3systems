<template>
  <div class="mobile house-model">
    <div class="container">
      <div class="top-area" :style="getTopStyle()">
        <div class="content-title">
          <label class="name">{{ state.modelTitle }}</label>
          <label>{{ state.modelDesc }}</label>
        </div>
      </div>      
      <div class="content">
        <div class="content-item">
          <div class="search">
            <div class="item-area">
              <input v-model="search.id" type="text"/>
              <img src="@/assets/img/model/find.svg" @click="doSearch()" />
            </div>
          </div>
        </div>
      </div>
      <div class="select-area">
        <div class="selectbox" @click="showModal()">
          <span>소재</span>
        </div>
        <div class="selectbox" @click="showModal()">
          <span>가격</span>
        </div>
        <div class="selectbox" @click="showModal()">
          <span>면적</span>
        </div>                        
      </div>
      <div class="model-list">
        <div class="model-content">
          <div class="model-box">
            <div class="model">
              <div v-for="item in displayedItems" :key="item.id" class="model-item" @click="goDetail(item.id)">
                <div v-if="item.imageList.length > 0" class="img">
                  <img :src="item?.imageList[0]">
                </div>
                <div class="description">
                  <span class="name">{{ item.id }}</span>
                  <span class="text">A building that can be used for any purpose {{ item.content }}</span>
                  <div class="option">
                    <span>
                      <!--210.66m²[57PY]-->
                      {{ `[${item.exclusive_area}PY]` }}
                    </span>
                    <span>{{ `${item.storey_attic === 0 ? 1 : 2} Floors` }}</span>
                    <span>{{ `${item.num_of_room} Bedrooms` }}</span>
                    <span>{{ `${item.num_of_bath} Bathrooms` }}</span>
                  </div>
                  <div class="more-area">
                    <span class="price">{{ `${item.cost.toLocaleString()} 원` }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="no-data" v-if="displayedItems.length === 0">
              <span>데이터가 없습니다.</span>
            </div>            
          </div>
        </div>
        <!-- 페이지네이션 -->
        <div class="pagination" v-if="displayedItems.length > 0">
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
    <div class="overlap-group-wrapper" style="display:none">
      <div class="overlap-6">
        <div class="image">
          <div class="group-8">
            <p class="text-wrapper-14">나에게 딱 맞는 집은 어떤 집일까 ?</p>
            <div class="text-wrapper-13">맞춤 주택 추천받기</div>
          </div>
          <div class="group-7">
            <div class="overlap-group-4"><div class="text-wrapper-12">더 알아보기</div></div>
          </div>              
        </div>
      </div>
    </div>    
    <div class="modal" :class="{active: isModal}">
      <div class="modal-content">
        <div class="modal-header">
          <img src="@/assets/img/common/close.svg" @click="hiddenModal()"/>
          <span class="title">필터</span>
        </div>
        <div class="modal-body">
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
                <div><input v-model="search.minCost" type="number" step="10000000" placeholder="최저금액"/></div>
                <span class="txt">~</span>
                <div><input v-model="search.maxCost" type="number" step="10000000" placeholder="최대금액"/></div>
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
        <div class="modal-footer">
          <button class="btn cancel" @click="clearSearch()">초기화</button>
          <button class="btn submit" @click="doSearch()">적용하기</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store'
import { dataMixin } from '@/mixins/dataMixin';

export default {
  name: 'MobileHouseModelList',
  mixins: [dataMixin],
  data() {
    return {
      items: [], // 전체 아이템 목록
      itemsPerPage: 8, // 페이지 당 아이템 수
      currentPage: 1, // 현재 페이지
      materials: [
        { value: '2', label: '강구조', isDisabled: false },
        { value: '1', label: '목구조', isDisabled: false },
        { value: '3', label: '철근콘크리트', isDisabled: true }
      ],
      areas: [
        { value: '01', label: '33㎡(10PY) 이하' },
        { value: '02', label: '33㎡~66㎡(10~20PY)' },
        { value: '03', label: '66㎡~99㎡(20~30PY)' },
        { value: '04', label: '99㎡~132㎡(30~40PY)' },
        { value: '05', label: '132㎡(40PY)이상' }
      ],
      state: {
        modelTitle: '',
        modelDesc: '',
        classNm: ''
      },
      search: {
        id: '',
        selectedMaterials: [],
        minCost: null,
        maxCost: null,
        selectedAreas: []
      },
      isModal: false
    }
  },
  computed: {
    // 현재 페이지에 표시할 아이템 목록 계산
    displayedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.items.slice(startIndex, endIndex);
    },
    // 전체 페이지 수 계산
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    pagingRange() {
      const perPageNum = 5; // 페이지당 표시되는 항목 수
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
    }
  },
  watch: {
    menuId(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.state = this.getModelData(newVal);
      this.clearSearch();
      this.doSearch();
    },
  },
  created() {
    this.items = this.getModelList();
    this.state = this.getModelData(this.menuId);
    this.doSearch();
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
    showModal() {
      this.isModal = true;
      document.body.classList.add('hidden');
    },
    hiddenModal() {
      this.isModal = false;
      document.body.classList.remove('hidden');
    },
    getTopStyle() {
      return {
        backgroundImage: `url(${this.state.imageSrc})`,
        backgroundSize: '100% 100%'
      };
    },
    goDetail(id) {
      this.$router.push({ name: 'MobileHouseModelDetail', params: { id: id } });
    },
    clearSearch() {
      this.search = this.$options.data().search;
    },
    doSearch() {
      const { id, selectedMaterials, selectedAreas } = this.search;
      let items = this.getModelList();

      // 메뉴에 따른 모델 분류
      if (this.menuId === 'M201') {
        items = items.filter(item => item.type === "PREMIUM_MODEL");
      } else if (this.menuId === 'M202') {
        items = items.filter(item => item.type === "STANDARD_MODEL");
      }

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
      this.hiddenModal();
    }
  }
}
</script>