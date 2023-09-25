import Question from '@/views/menu/inquiry/Question.vue'
import MobileQuestion from '@/views/menu/inquiry/MobileQuestion.vue'

export default [
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