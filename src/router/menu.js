import HouseModelList from '@/views/menu/model/HouseModelList.vue'
import MobileHouseModelList from '@/views/menu/model/MobileHouseModelList.vue'
import Question from '@/views/menu/inquiry/Question.vue'
import MobileQuestion from '@/views/menu/inquiry/MobileQuestion.vue'

export default [
  {
    path: '/menu/model',
    component: HouseModelList,
    name: 'HouseModelList'
  },
  {
    path: '/mobile/menu/model',
    component: MobileHouseModelList,
    name: 'MobileHouseModelList'
  },  
  {
    path: '/menu/inquiry',
    component: Question,
    name: 'Question'
  },
  {
    path: '/mobile/menu/inquiry',
    component: MobileQuestion,
    name: 'MobileQuestion'
  }
]