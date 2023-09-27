<template>
<div class="mainpage">
  <div class="div">
    <div class="overlap">
      <div class="component">
        <div class="group-5">
          <div class="text-wrapper-8">CNK-01-XX-XX</div>
          <div class="text-wrapper-9">지금 바로 만나보세요</div>
        </div>
        <div class="group-6">
          <div class="overlap-group-2">
            <div class="rectangle"></div>
            <div class="text-wrapper-10">보러가기</div>
          </div>
        </div>
        <div class="group-7">
          <div class="ellipse-2"></div>
          <div class="ellipse-3"></div>
          <div class="ellipse-4"></div>
          <div class="ellipse-5"></div>
          <div class="ellipse-6"></div>
        </div>
        <div class="vector-wrapper"><img class="vector" src="@/assets/img/vector-37-3.svg" /></div>
        <div class="img-wrapper"><img class="vector-2" src="@/assets/img/vector-37-2.svg" /></div>
      </div>
    </div>    
    <div class="new-carousel-PC">
      <div class="group-8">
        <div class="text-wrapper-15">새로운 모델</div>
        <div class="text-wrapper-16">새로운 모델을 만나보세요</div>
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
    <div class="overlap-3">
      <div class="rectangle-2"></div>
      <div class="text-wrapper-20">베스트 모델</div>
      <p class="text-wrapper-21">지금 가장 인기있는 모델을 만나보세요</p>
      <div class="best-slider-PC">
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
    <a href="https://m3systems.co.kr/use-case/plan" target="_blank" rel="noopener noreferrer"
      ><div class="group-13">
        <div class="overlap-8">
          <img class="image" src="@/assets/img/image-6.png" />
          <div class="rectangle-3"></div>
          <div class="group-14"></div>
          <div class="text-wrapper-25">더 알아보기</div>
          <div class="group-15">
            <p class="text-wrapper-27">나에게 딱 맞는 집은 어떤 집일까 ?</p>
            <div class="text-wrapper-26">맞춤 주택 추천받기</div>
          </div>
        </div>
      </div></a
    >
    <div class="group-16">
      <img class="vector-6" src="@/assets/img/vector-15.svg" /> <img class="vector-7" src="@/assets/img/vector-16.svg" />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data() {
    return {
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
