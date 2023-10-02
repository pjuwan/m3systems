<template>
  <div id="model_page">
    <div class="container">
      <img src="@/assets/img/all-model.jpg" />
      <div class="content">
        <div class="content-item">
          <div class="search">
            <div class="item-area">
              <input type="text"/>
              <img src="@/assets/img/model/find.svg" />
            </div>
          </div>
          <div class="table">
            <div class="row">
              <span class="title">소재 | Material</span>
              <div class="item-area">
                <label>
                  <input type="checkbox"/>
                  <span class="checkbox">강구조</span>
                </label>
                <label>
                  <input type="checkbox"/>
                  <span class="checkbox">목구조</span>
                </label>
                <label>
                  <input type="checkbox"/>
                  <span class="checkbox">철근콘크리트</span>
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
                <label>
                  <input type="checkbox"/>
                  <span class="checkbox">33㎡(10PY) 이하</span>
                </label>
                <label>
                  <input type="checkbox"/>
                  <span class="checkbox">33㎡~66㎡(10~20PY)</span>
                </label>
                <label>
                  <input type="checkbox"/>
                  <span class="checkbox">66㎡~99㎡(20~30PY)</span>
                </label>
                <label>
                  <input type="checkbox"/>
                  <span class="checkbox">99㎡~132㎡(30~40PY)</span>
                </label>
                <label>
                  <input type="checkbox"/>
                  <span class="checkbox">132㎡(40PY)이상</span>
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
              <div v-for="item in displayedItems" :key="item.id" class="model-item" @click="goDetail()">
                <div class="img"></div>
                <div class="description">
                  <span class="name">CNK-01-XX-XX</span>
                  <span class="text">A building that can be used for any purpose {{ item.content }}</span>
                  <div class="option">
                    <span>210.66m²[57PY]</span>
                    <span>2 Floors</span>
                    <span>5 Bedrooms</span>
                    <span>4 Bathrooms</span>
                  </div>
                  <div class="more-area">
                    <span class="price">488,700,000 원</span>
                    <div class="btn-area">
                      <span class="view">+ View more</span>
                    </div>
                  </div>
                </div>
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
export default {
  name: 'HouseModelList',
  props: {
  },
  data() {
    return {
      items: [], // 전체 아이템 목록
      itemsPerPage: 8, // 페이지 당 아이템 수
      currentPage: 1, // 현재 페이지
      search: {
        latestSort: '01'
      }
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
      const pageGroup = Math.ceil(this.currentPage / 10);
      const startPage = ((pageGroup - 1) * 10) + 1;
      let endPage = pageGroup * 10;

      const totalPages = Math.floor((this.items.length - 1) / this.itemsPerPage) + 1;
      // console.log((this.items.length - 1) / this.itemsPerPage + 1);
      // console.log(`count: ${this.items.length }, totalPages : ${totalPages}, startPage: ${startPage},  endPage: ${endPage}`);

      // 마지막페이지가 전체페이지보다 클경우 계산
      if (endPage > totalPages) {
        endPage = totalPages;
      }

      return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    },
  },
  created() {
    // 1부터 100까지의 아이템을 배열에 추가하는 예제
    for (let i = 1; i <= 170; i++) {
      this.items.push({ id: i, content: `아이템 ${i}` });
    }
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
    goDetail() {
      this.$router.push({ name: 'HouseModelDetail' });
    }
  }
}
</script>