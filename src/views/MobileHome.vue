<template>
  <div class="mobile">
    <div class="div">
      <div class="image-album">
        <div class="images">
          <img
            class="image"
            v-for="(imageUrl, index) in imageUrls"
            :key="index"
            :src="imageUrl"
          />
        </div>
        <div v-if="imageUrls.length > 1" class="image-circle-wrapper">
          <div
            class="image-circle"
            v-for="(imageUrl, index) in imageUrls"
            :key="index"
            :class="{ activeImg: index === curPos }"
          ></div>
        </div>
      </div>      
      <div class="carousel-3">
        <div class="frame-3">
          <div class="div-wrapper-2">
            <div class="group-11">
              <div class="overlap-group-5"><img class="group-12" src="@/assets/img/group-268-4.png" /></div>
            </div>
          </div>
          <div class="div-wrapper-2">
            <div class="overlap-7">
              <div class="group-13">
                <div class="overlap-group-6">
                  <img class="CWK-XX-XX" src="@/assets/img/buy-our-houses-now-8.png" />
                  <img class="buy-our-houses-now" src="@/assets/img/buy-our-houses-now-8.png" />
                </div>
              </div>
              <div class="rectangle-8"></div>
            </div>
          </div>
          <div class="div-wrapper-2">
            <div class="overlap-7">
              <div class="group-13">
                <div class="overlap-group-7">
                  <img class="CWK-XX-XX" src="@/assets/img/buy-our-houses-now-8.png" />
                  <img class="buy-our-houses-now" src="@/assets/img/buy-our-houses-now-8.png" />
                </div>
              </div>
              <div class="rectangle-8"></div>
            </div>
          </div>
        </div>
        <div class="indicator-2">
          <div class="dot"></div>
          <div class="dot-2"></div>
          <div class="dot-2"></div>
        </div>
      </div>
      <div class="group-3">
        <div class="text-wrapper-4">새로운 모델</div>
        <div class="text-wrapper-5">새로운 모델을 만나보세요</div>
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
              <div v-if="item.isChecked" class="group">
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
export default {
  name: 'MobileHomePage',
  props: {
    msg: String
  },
  data() {
    return {
      curPos: 0,
      postion: 0,
      start_x: 0,
      end_x: 0,
      IMAGE_WIDTH: 0,
      images: null,
      imageUrls: [
        "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/09/shutterstock_1151676383.jpg?w=2000",
        "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/09/shutterstock_1151632343.jpg?w=2000",
        "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/09/shutterstock_1429964489.jpg?w=2000",
      ],
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
  computed: {
    getImageWidth: () => {
      const imgWidth = document.querySelector(".images").offsetWidth;
      return imgWidth;
    },
  },  
  mounted() {
    const { list } = this.bestModel;
    if (list.length > 0) {
      this.bestModel.selected = list[0];
    }
  },  
  methods: {
    prev() {
      if (this.curPos > 0) {
        this.postion += this.IMAGE_WIDTH;
        this.images.style.transform = `translateX(${this.postion}px)`;
        this.curPos = this.curPos - 1;
      }
    },
    next() {
      if (this.curPos < this.imageUrls.length - 1) {
        this.postion -= this.IMAGE_WIDTH;
        this.images.style.transform = `translateX(${this.postion}px)`;
        this.curPos = this.curPos + 1;
      }
    },
    touch_start(event) {
      this.start_x = event.touches[0].pageX;
    },
    touch_end(event) {
      this.end_x = event.changedTouches[0].pageX;
      if (this.start_x > this.end_x) this.next();
      else this.prev();
    },
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
.image-album {
  width: 100%;
  height: auto;
  max-width: 2000px;
  max-height: 2000px;
  overflow: hidden;
}
.images {
  position: relative;
  display: flex;
  height: auto;
  transition: transform 0.5s;
}
.image {
  width: 100%;
  height: auto;
  max-width: 2000px;
  max-height: 2000px;
}
.image-circle-wrapper {
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -18px);
}
.image-circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid #d2d2d2;
  margin-right: 12px;
}
.image-circle:last-child {
  margin-right: 0;
}
.image-circle.activeImg {
  background-color: #404040;
}
</style>
