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
        return '01';
      } else if (area >= 33 && area <= 66) {
        return '02';
      } else if (area >= 66 && area <= 99) {
        return '03';
      } else if (area >= 99 && area <= 132) {
        return '04';
      } else if (area > 132) {
        return '05';
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
    getModelName(type) {
      if (type === 'PREMIUM_MODEL') {
        return {
          typeNm: '프리미엄',
          modelNm: 'Premium Model'
        }
      } else if (type === 'STANDARD_MODEL') {
        return {
          typeNm: '스탠다드',
          modelNm: 'Standard Model'
        }
      }
    },
    getModelList() {
      return modelList.map((item) => {
        const imageInfo = imageList?.find(findItem => findItem.id === item.id);
        const modelInfo = this.getModelName(item.type);
        return {
          ...item,
          material_name: item.material === '1' ? '목구조' : '강구조',
          type_name: modelInfo.typeNm,
          model_name: modelInfo.modelNm,
          imageList: imageInfo.imageList
        }
      })
    },
    getModelDetail(id) {
      const list = this.getModelList();
      return list.find(item => item.id === id);
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