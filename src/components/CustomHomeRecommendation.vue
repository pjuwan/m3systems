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
<style lang="scss" scoped>
  #customHomeRecommendation {
    width: 100%;
    height: 150px;
    display: inline-flex;
    margin-top: 20px;
    a {
      width: 100%;
    }
    span {
      font-family: Pretendard;
      font-weight: 500;
      color: #262626;
      font-size: 6.9px;
      letter-spacing: 0;
      line-height: normal;
      white-space: nowrap;
    }    
    .more-area {
      position: relative;
      height: auto;
      display: inline-flex;
      justify-content: center;      
      .image {
        width: 100%;
        height: 137px;
        background: linear-gradient(270deg, white 6%, rgba(255, 255, 255, 0) 40%), url('@/assets/img/image-6.png');
        background-size: 313px 121px;
        background-position: -26px 16px;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: self-end;
        justify-content: center;
      }
      .text-how-item {
        color: #262626;
        line-height: normal;
        display: inline-flex;
        flex-direction: column;
        gap: 3px;
        margin-right: 6px;
        p {
          display: flex;
          font-family: Pretendard;
          font-weight: 200;
          font-size: 11.6px;
          letter-spacing: 0;
        }
        span {
          font-weight: 500;
          font-size: 15.8px;
        }        
      }

      .text-more-item {
        width: 72.556px;
        height: 16.075px;
        background-color: #000000;
        border-radius: 9.49px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        span {
          font-family: Pretendard;
          font-weight: 500;;
          color: #fff;
          font-size: 6.9px;
          text-align: center;
          letter-spacing: 0;
          line-height: normal;
          white-space: nowrap;
        }
      }
    }
    &.pc {
      height: 394px;
      .image {
        height: 394px;
        background: linear-gradient(270deg, white 6%, rgba(255, 255, 255, 0) 40%), url('@/assets/img/image-6.png');
        background-repeat: no-repeat;
        background-size: 1215px 394px;        
        p {
          font-size: 44px;          
        }
        span {
          font-size: 60px;
          text-align: left;
        }
        .text-how-item {
          gap: 5px;
          margin-right: 95px;          
        }
        .text-more-item {
          width: 226px;
          height: 61px;
          border-radius: 30.5px;
          span {
            font-size: 26px;
          }
        }
      }
    }
  }
</style>