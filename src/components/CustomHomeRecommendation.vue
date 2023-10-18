<template>
  <div id="customHomeRecommendation" class="custom-home-recommendation" :class="{pc: !isMobile }">
    <a href="https://m3systems.co.kr/use-case/plan" target="_blank" rel="noopener noreferrer">
      <div class="more-area">
      <div class="image">
          <div class="text-how-item">
            <p>나에게 딱 맞는 집은 어떤 집일까 ?</p>
            <span>맞춤 주택 추천받기</span>
            <div class="text-more-item">
              <span>더 알아보기</span>
            </div>
          </div>
      </div>
      </div>
    </a>
  </div>
</template>
<script>
import store from '@/store'

export default {
  name: "CustomHomeRecommendation",
  computed: {
    isMobile() {
      return store.state.isMobile;
    }
  },  
}
</script>