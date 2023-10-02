<template>
  <div class="mobile">
    <div class="div">
      <!-- autoplay 설정가능 -->
      <vueper-slides autoplay fixed-height="207.812px">
        <vueper-slide
          v-for="(slide, i) in imageUrls"
          :key="i">
          <template v-slot:content>
            <div class="content">
              <img :src="slide.src" />
              <div class="area">
                <img class="subject" src="@/assets/img/group-268-1.png" />
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
            <img class="element" :src="item.imageSrc" />
          </div>
        </div>
        <div class="frame">
          <div v-for="(item, idx) in newModelList"
            :key="idx"
            class="source"
            :class="{ 'active': item.isChecked }"
          >
            <transition name="fade">
              <div class="group">
                <div class="overlap-group-2">
                  <img class="img" :src="item.descImageSrc" />
                  <div class="text-wrapper">{{ item.title }}</div>
                  <p class="p">A building that can be used for any purpose</p>
                  <p class="element-m-floors">
                    210.66 m²&nbsp;&nbsp;|&nbsp;&nbsp;2 Floors&nbsp;&nbsp;|&nbsp;&nbsp;5
                    Bedrooms&nbsp;&nbsp;|&nbsp;&nbsp;4 Bathrooms
                  </p>
                  <div class="text-wrapper-2">488,700,000won</div>
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
                <img class="source best" :src="bestModel.selected.imageSrc"/>
              </div>
              <div class="next" @click="goNext()"><img class="vector-3" src="@/assets/img/vector-1-3.svg"/></div>
            </div>
            <div class="group-6">
              <div class="text-wrapper-8">{{ bestModel.selected.model }}</div>
              <div class="text-wrapper-7">{{ bestModel.selected.price }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="overlap-group-wrapper">
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
    </div> 
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: 'MobileHomePage',
  props: {
    msg: String
  },
  components: {
    VueperSlides,
    VueperSlide
  },
  data() {
    return {
      imageUrls: [{
        src: require("@/assets/img/top1.png"),
        text: '#1'
      },
      {
        src: require("@/assets/img/top2.png"),
        text: '#2'
      },
      {
        src: require("@/assets/img/top3.png"),
        text: '#2'
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
    };
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
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  height: 100%;
}
.content .subject {
  width: 207px;
  height: 51px;
}
.content img {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
