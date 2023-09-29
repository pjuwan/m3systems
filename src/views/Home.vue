<template>
<div class="mainpage">
  <div class="container">
    <!-- autoplay 설정가능 -->
    <vueper-slides fade :touchable="false" fixed-height="915px">
      <vueper-slide
        v-for="(info, i) in topInfoList"
        :key="i">
        <template v-slot:content>
          <div class="content">
            <img :src="info.src" />
            <div class="subject">
              <div class="model">{{ info.model }}</div>
              <div class="now">지금 바로 만나보세요</div>
            </div>
            <div class="view">
              <div class="group">
                <div class="rectangle"></div>
                <div class="text">보러가기</div>
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
            <img class="element" :src="item.imageSrc" />
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
              <div class="image-box">
                <img class="img" :src="item.descImageSrc" />
              </div>
              <div class="group-4">
                <div class="text-wrapper">CNK-01-XX-XX</div>
                <p class="p">A building that can be used for any purpose</p>
                <div class="text-wrapper-2">210.66 m²</div>
                <img class="line" src="@/assets/img/line-7.svg" />
                <div class="text-wrapper-2">2 Floors</div>
                <img class="line" src="@/assets/img/line-8.svg" />
                <div class="text-wrapper-2">5 Bedrooms</div>
                <img class="line" src="@/assets/img/line-9.svg" />
                <div class="text-wrapper-2">4 Bathrooms</div>
                <div class="text-wrapper-6">488,700,000won</div>
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
          <img class="element-3" :src="getCurrentImage(-1)" />
          <img class="element-2" :src="getCurrentImage(-2)" />
        </div>        
        <div class="overlap-6">
          <div class="group-9">
            <div class="overlap-group-3">
              <img class="element-6" :src="bestModel.selected.imageSrc" />
              <div class="text-wrapper-18">{{ bestModel.selected.model }}</div>
              <p class="text-wrapper-17">{{ bestModel.selected.title }}</p>
              <div class="text-wrapper-19">{{ bestModel.selected.price }} Won</div>
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
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  components: {
    VueperSlides,
    VueperSlide
  },
  data() {
    return {
      topInfoList: [{
        src: require("@/assets/img/main1.png"),
        model: 'CNK-01-XX-XX'
      },
      {
        src: require("@/assets/img/main2.png"),
        model: 'CNK-02-XX-XX'
      },
      {
        src: require("@/assets/img/main3.png"),
        model: 'CNK-03-XX-XX'
      },
      {
        src: require("@/assets/img/main4.png"),
        model: 'CNK-04-XX-XX'
      },      
      {
        src: require("@/assets/img/main5.png"),
        model: 'CNK-05-XX-XX'
      }],      
      newModelList : [{
        imageSrc: require("@/assets/img/1-2-4.png"),
        title: 'CNK-01-XX-XX',
        descImageSrc: require("@/assets/img/1-6-4.png"),
        isChecked: true
      },
      {
        imageSrc: require("@/assets/img/1-2-3.png"),
        title: 'CKW-01-XX-XX',
        descImageSrc: require("@/assets/img/1-12-5.png"),
        isChecked: false
      },
      {
        imageSrc: require("@/assets/img/1-2-2.png"),
        title: 'CNK-03-XX-XX',
        descImageSrc: require("@/assets/img/1-7.png"),
        isChecked: false
      },
      {
        imageSrc: require("@/assets/img/1-2-1.png"),
        title: 'CNK-01-XX-XX',
        descImageSrc: require("@/assets/img/1-11-2.png"),
        isChecked: false
      }],      
      bestModel: {
        selected: {},
        currentIndex: 0,
        list: [{
          imageSrc: require('@/assets/img/1-11-2.png'),
          title: 'See our best models here.',
          model: 'CNK-01-XX-XX',
          price: '398,550,000'
        },
        {
          imageSrc: require('@/assets/img/1-7.png'),
          title: 'See our best models here.',
          model: 'CNK-02-XX-XX',
          price: '393,550,000'
        },
        {
          imageSrc: require('@/assets/img/1-10-3.png'),
          title: 'See our best models here.',
          model: 'CNK-03-XX-XX',
          price: '392,550,000'
        },
        {
          imageSrc: require('@/assets/img/1-11-2.png'),
          title: 'See our best models here.',
          model: 'CNK-04-XX-XX',
          price: '397,550,000'
        },
        {
          imageSrc: require('@/assets/img/1-7.png'),
          title: 'See our best models here.',
          model: 'CNK-05-XX-XX',
          price: '399,550,000'
        },
        {
          imageSrc: require('@/assets/img/1-10-3.png'),
          title: 'See our best models here.',
          model: 'CNK-06-XX-XX',
          price: '391,550,000'
        }]
      }
    }
  },
  mounted() {
    const { list } = this.bestModel;
    if (list.length > 0) {
      this.bestModel.selected = list[0];
    }
  },
  methods: {
    onNewModel(index) {
      this.newModelList.forEach((e, i) => {
        e.isChecked = false;
        if (index === i) {
          e.isChecked = true;
        }
      })
    },    
    goPrev() {
      const { selected, list } = this.bestModel;
      const currentIndex = list.findIndex((obj) => {
        return JSON.stringify(obj) === JSON.stringify(selected);
      });

      if (currentIndex > 0) {
        const previousElement  = list[currentIndex - 1]; // 이전 요소 가져오기
        this.bestModel.selected = previousElement;
        this.bestModel.currentIndex = currentIndex - 1;
      } else {
        // 마지막 요소 가져오기
        this.bestModel.selected = list[list.length - 1];
        this.bestModel.currentIndex = list.length - 1;
      }
    },
    goNext() {
      const { selected, list } = this.bestModel;
      const currentIndex = list.findIndex((obj) => {
        return JSON.stringify(obj) === JSON.stringify(selected);
      });

      if (currentIndex < list.length - 1) {
        const nextElement = list[currentIndex + 1]; // 다음 요소 가져오기
        this.bestModel.selected = nextElement;
        this.bestModel.currentIndex = currentIndex + 1;
      } else {
        // 첫번째 요소 가져오기
        this.bestModel.selected = list[0];
        this.bestModel.currentIndex = 0;
      }
    },
    getCurrentImage(index) {
      const { list } = this.bestModel;
      let currentIndex = this.bestModel.currentIndex + index;
      const length = list.length;
      let imageSrc = list[currentIndex]?.imageSrc;

      if (currentIndex >= list.length) {
        if (list.length < currentIndex) {
          currentIndex = currentIndex - list.length
        } else {
          currentIndex = list.length - currentIndex;
        }
        imageSrc = list[currentIndex]?.imageSrc
      } else if (currentIndex < 0) {
        imageSrc = list[length + currentIndex]?.imageSrc;
      }
      
      return imageSrc;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  height: 100%;
}
.content img {
  display: flex;
  width: 100%;
  height: 100%;
}
.content .subject {
  position: absolute;
  width: 523px;
  height: 128px;
  top: 358px;
  left: 35%;  
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
  position: absolute;
    top: 90px;
    left: 127px;
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
  top: 509px;
  left: 39%;
}
.content .view .group {
  position: relative;
  width: 337px;
  height: 73px;
  border-radius: 11px;
}
.content .view .rectangle {
  position: absolute;
  top: 0;
  left: 0;
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
}

</style>
