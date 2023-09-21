<template>
<div class="mainpage">
  <div class="div">
    <div class="new-carousel-PC">
      <div class="group">
        <img class="element" src="@/assets/img/1-2.png" />
        <div class="ellipse-wrapper"><div class="ellipse"></div></div>
        <div class="div-wrapper"><div class="ellipse"></div></div>
        <div class="group-2"><div class="ellipse"></div></div>
        <div class="group-3"><div class="ellipse"></div></div>
      </div>
      <div class="overlap-group-wrapper">
        <div class="overlap-group">
          <div class="element-wrapper"><img class="img" src="@/assets/img/1-6.png" /></div>
          <div class="group-4">
            <div class="text-wrapper">CNK-01-XX-XX</div>
            <p class="p">A building that can be used for any purpose</p>
            <div class="text-wrapper-2">210.66 m²</div>
            <div class="text-wrapper-3">2 Floors</div>
            <div class="text-wrapper-4">5 Bedrooms</div>
            <div class="text-wrapper-5">4 Bathrooms</div>
            <img class="line" src="@/assets/img/line-7.svg" />
            <img class="line-2" src="@/assets/img/line-8.svg" />
            <img class="line-3" src="@/assets/img/line-9.svg" />
          </div>
          <div class="text-wrapper-6">488,700,000won</div>
          <div class="text-wrapper-7">+ View more</div>
        </div>
      </div>
    </div>
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
      <div class="property">
        <div class="overlap-2">
          <img class="earth-globe" src="@/assets/img/earth-globe-1-1.png" />
          <div class="text-wrapper-11">M House</div>
          <div class="text-wrapper-12">문의하기</div>
          <div class="text-wrapper-13">브랜드스토리</div>
          <div class="text-wrapper-14">전체모델</div>
        </div>
        <img class="union" src="@/assets/img/union.png" />
      </div>
    </div>
    <img class="line-4" src="@/assets/img/line-2.png" />
    <div class="group-8">
      <div class="text-wrapper-15">새로운 모델</div>
      <div class="text-wrapper-16">새로운 모델을 만나보세요</div>
    </div>
    <div class="overlap-3">
      <div class="rectangle-2"></div>
      <div class="text-wrapper-20">베스트 모델</div>
      <p class="text-wrapper-21">지금 가장 인기있는 모델을 만나보세요</p>
      <div class="best-slider-PC">
        <div class="overlap-6">
          <div class="group-9">
            <div class="overlap-group-3">
              <p class="text-wrapper-17">{{ bestModel.selected.title }}</p>
              <div class="text-wrapper-18">{{ bestModel.selected.model }}</div>
              <img class="element-6" :src="bestModel.selected.imageSrc" />
            </div>
            <div class="text-wrapper-19">{{ bestModel.selected.price }} Won</div>
          </div>
          <div class="group-10" @click="goNext()"><img class="vector-3" src="@/assets/img/vector-1-3.svg" /></div>
          <div class="group-11" @click="goPrev()"><img class="vector-4" src="@/assets/img/vector-1-2.svg" /></div>
        </div>
        <div v-if="bestModel.list?.length > 2" class="overlap-4">
          <img class="element-3" :src="getCurrentImage(-1)" />
          <img class="element-2" :src="getCurrentImage(-2)" />
        </div>
        <div v-if="bestModel.list?.length > 2" class="overlap-5">
          <img class="element-4" :src="getCurrentImage(1)" />
          <img class="element-5" :src="getCurrentImage(2)" />
        </div>        
      </div>
    </div>
    <div class="overlap-wrapper">
      <div class="overlap-7">
        <p class="text-wrapper-22">Copyright 2023 ooooo.All Rights Reserved.</p>
        <div class="text-wrapper-23">주식회사 ㅇㅇㅇㅇ</div>
        <div class="flexcontainer">
          <p class="text">
            <span class="span">사업자등록번호 : 000-00-0000 | 대표자: 김인한<br /></span>
          </p>
          <p class="text">
            <span class="span">[서울사무소]서울시 서초구 서초중앙로 188 아크로비스타 사무동 L-422호<br /></span>
          </p>
          <p class="text">
            <span class="span">[기술연구소] 서울시 서초구 서초중앙로 188 아크로비스타 사무동 L-410호<br /></span>
          </p>
          <p class="text"><span class="span">대표전화: +82-2-595-0203</span></p>
        </div>
        <a href="https://www.youtube.com/@m3systems537" target="_blank" rel="noopener noreferrer"
          ><div class="group-12"><img class="vector-5" src="@/assets/img/vector-27.svg" /></div
        ></a>
        <div class="text-wrapper-24">M House</div>
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
  name: 'PCMain',
  props: {
    msg: String
  },
  data() {
    return {
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
