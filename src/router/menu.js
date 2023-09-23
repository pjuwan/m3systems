import Question from '@/views/menu/cs/Question.vue'
import MobileQuestion from '@/views/menu/cs/MobileQuestion.vue'

export default [
  {
    path: '/menu/question',
    component: Question,
    name: 'Question'
  },
  {
    path: '/mobile/menu/question',
    component: MobileQuestion,
    name: 'MobileQuestion'
  }
]