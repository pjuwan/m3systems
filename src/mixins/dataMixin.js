import modelList from '@/data/model-list.json';
import imageList from '@/data/model-image.json';
import homeData from '@/data/home.json';

export const dataMixin = {
  data() {
    return {
      modelList: modelList,
      imageList: imageList,
      homeData: homeData
    }
  },
  methods: {
    getArea(area) {
      if (area < 33) {
        area = 1;
      } else if (area >= 33 && area <= 66) {
        area = 2;
      } else if (area >= 66 && area <= 99) {
        area = 3;
      } else if (area >= 99 && area <= 132) {
        area = 4;
      } else if (area > 132) {
        area = 5;
      }
    },
    getModelData(menuId) {
      if (menuId === 'M200') {
        return {
          modelTitle: '전체 모델',
          modelDesc: '모든 모델을 한번에 만나보세요',
          imageSrc: require('@/assets/img/model/allmodel.png'),
          modelType: 'all'
        };
      } else if (menuId === 'M201') {
        return {
          modelTitle: 'PREMIUM MODEL',
          modelDesc: '고품격 모델을 만나보세요',
          imageSrc: require('@/assets/img/model/premium.png'),
          modelType: 'premium'
        };
      } else if (menuId === 'M202') {
        return {
          modelTitle: 'STANDARD MODEL',
          modelDesc: '실속있는 모델을 만나보세요',
          imageSrc: require('@/assets/img/model/allmodel.png'),
          modelType: 'standard'
        };        
      }
    },
    getModelList() {
      return modelList.map((item) => {
        const imageInfo = imageList?.find(findItem => findItem.id === item.id);
        return {
          ...item,
          imageList: imageInfo.imageList
        }
      })
    },
    getModelDetail(id) {
      return this.getModelList?.find(item => item.id === id);
    },
    getHomeData() {
      const { topInfoList, newModelList, bestModelList } = this.homeData;
      return {
        topInfoList: this.getDataList(topInfoList),
        newModelList: this.getDataList(newModelList),
        bestModelList: this.getDataList(bestModelList)
      }
    },
    getDataList(ids) {
      const list = this.getModelList();
      return ids.map(id => list.find(item => item.id === id));
    }
  }
};