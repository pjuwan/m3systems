<template>
  <div class="mobile">
    <div class="div">
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
      <div class="overlap-3">
        <div class="group-4">
          <div class="overlap-4">
            <div class="rectangle-4"></div>
            <div class="rectangle-5"></div>
            <div class="rectangle-6"></div>
          </div>
          <img class="element-7" src="@/assets/img/1-9.png" />
          <img class="element-8" src="@/assets/img/1-9.png" />
        </div>
        <div class="group-5">
          <div class="text-wrapper-6">베스트 모델</div>
          <p class="text-wrapper-5">지금 가장 인기있는 모델을 만나보세요</p>
        </div>
        <div class="carousel-2">
          <div class="frame-2">
            <img class="source best" src="@/assets/img/source3-1.svg" />
            <div class="img-wrapper"><img class="element-9" src="@/assets/img/1-11-1.png" /></div>
            <div class="img-wrapper"><img class="element-10" src="@/assets/img/1-11.png" /></div>
          </div>
          <div class="group-6">
            <div class="text-wrapper-8">CNK-01-XX-XX</div>
            <div class="text-wrapper-7">298,370,000 Won</div>
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
  name: 'MobileMain',
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
      }]
    };
  },
  methods: {
    onNewModel(index) {
      this.newModelList.forEach((e, i) => {
        e.isChecked = false;
        if (index === i) {
          e.isChecked = true;
        }
      })
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
