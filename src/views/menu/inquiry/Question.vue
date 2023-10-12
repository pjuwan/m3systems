<template>
  <div class="inquiry-page">
    <div class="bg">
      <div class="overlap">
        <img class="purchase" src="@/assets/img/inquiry/purchase-3347053-1.png" />
        <div class="purchase-2"></div>
        <div class="group">
          <div class="text-wrapper">문의하기</div>
          <div class="text-wrapper-2">최선을 다해 도와드리겠습니다</div>
        </div>
      </div>
    </div>
    <div class="contents">
      <div class="register">
        <div class="subject">
          <div class="title">견적문의</div>
          <img class="img" src="@/assets/img/inquiry/line.svg" />
        </div>
        <div class="row">
          <div class="column">
            <div class="th">
              <span class="name">이름</span>
            </div>
            <td class="td">
              <input v-model="state.name" type="text" placeholder="이름을 입력해주세요"/>
            </td>
          </div>
          <div class="column">
            <div class="th">
              <span class="name">연락처</span>
            </div>
            <div class="td">
              <input v-model="state.phone" type="text" placeholder="전화번호를 입력해주세요(기호, 공백 제외)"/>
            </div>
          </div>
        </div>
        <div class="row full">
          <div class="th">
            <span class="name">이메일</span>
          </div>
          <div class="td">
            <input v-model="state.email" type="text" placeholder="이메일을 입력해주세요"/>
          </div>
        </div>
        <div class="row full">
          <div class="th">
            <span class="name">건축희망모델</span>
          </div>
          <div class="td">
            <input v-model="state.desiredModel" type="text" placeholder="CNK-01-XX-XX"/>
          </div>
        </div>
        <div class="row line">
          <div class="th">
            <span class="name">구조</span>
          </div>
          <div class="td">
            <label>
              <input v-model="state.material" type="radio" value="2"/>
              <span class="radio">강구조</span>
            </label>
            <label>
              <input v-model="state.material" type="radio" value="1"/>
              <span class="radio">목구조</span>
            </label>            
          </div>
        </div>
        <div class="row line">
          <div class="th">
            <span class="name">건축예상평수</span>
          </div>
          <div class="td">
            <label>
              <input v-model="state.estimatedSquareFootage" type="radio" value="1"/>
              <span class="radio">20평이하</span>
            </label>
            <label>
              <input v-model="state.estimatedSquareFootage" type="radio" value="2"/>
              <span class="radio">20평대</span>
            </label>
            <label>
              <input v-model="state.estimatedSquareFootage" type="radio" value="3"/>
              <span class="radio">30평대</span>
            </label>
            <label>
              <input v-model="state.estimatedSquareFootage" type="radio" value="4"/>
              <span class="radio">40평대</span>
            </label>
            <label>
              <input v-model="state.estimatedSquareFootage" type="radio" value="5"/>
              <span class="radio">50평대</span>
            </label>
            <label>
              <input v-model="state.estimatedSquareFootage" type="radio" value="6"/>
              <span class="radio">60평이상</span>
            </label>
          </div>
        </div>
        <div class="row line">
          <div class="th">
            <span class="name">건축예정시기</span>
          </div>
          <div type="td">
            <label>
              <input v-model="state.plannedConstructionDate" type="radio" value="1"/>
              <span class="radio">6개월이내</span>
            </label>
            <label>
              <input v-model="state.plannedConstructionDate" type="radio" value="2"/>
              <span class="radio">1년이내</span>
            </label>
            <label>
              <input v-model="state.plannedConstructionDate" type="radio" value="3"/>
              <span class="radio">2년이상</span>
            </label>
          </div>
        </div>
        <div class="row line">
          <div class="th">
            <span class="name">건축예상금액</span>
          </div>
          <div class="td">
            <label>
              <input v-model="state.estimatedConstructionCost" type="radio" value="1"/>
              <span class="radio">1-2억</span>
            </label>
            <label>
              <input v-model="state.estimatedConstructionCost" type="radio" value="2"/>
              <span class="radio">2-3억</span>
            </label>
            <label>
              <input v-model="state.estimatedConstructionCost" type="radio" value="3"/>
              <span class="radio">3-4억</span>
            </label>
            <label>
              <input v-model="state.estimatedConstructionCost" type="radio" value="4"/>
              <span class="radio">기타</span>
            </label>
          </div>
        </div>
        <div class="row">
          <div class="th full block">
            <span class="name">상담내용</span>
            <textarea v-model="state.content" placeholder="상담내용을 자세하게 작성해주세요." />
          </div>
        </div>
        <div class="row">
          <div class="privacy">
            <label>
              <input :checked="state.privacyConsent === 'Y'" type="checkbox"/>
              <span class="checkbox">개인정보 수집 및 이용에 동의합니다.</span>
            </label>
            <div class="view">
              <span @click="showPrivecyPolicy">개인정보활용 전문보기</span>
              <img class="icon" src="@/assets/img/button/icon1.svg" />
            </div>
          </div>
        </div>
        <div class="row">
          <label>
            <input :checked="state.receiveTextReply === 'Y'" type="checkbox"/>
            <span class="checkbox">문자로 답변을 받겠습니다.</span>
          </label>
        </div>
        <div class="btn-area">
          <button class="submit" @click="onSubmit">
            <span>상담신청</span>
          </button>
        </div>
      </div>
    </div>
    <privacy-policy v-if="isShowPrivecyPolicy" @close="closePrivecyPolicy"/>
  </div>
</template>

<script>
import PrivacyPolicy from '@/components/PrivacyPolicy.vue';

export default {
    name: 'Question',
    components: { PrivacyPolicy },
    props: {
      lang: {
        type: String,
        default: 'ko'
      }
    },
    data() {
      return {
        state: {
          name: '', // 이름
          phone: '', // 연락처
          email: '', // 이메일
          desiredModel: '', // 건축희망모델
          content: '', // 내용
          estimatedSquareFootage: '1', // 건축예상평수
          plannedConstructionDate: '1', // 건축예정시기
          estimatedConstructionCost: '1', //건축예상금액
          material: '2', // 구조
          privacyConsent: 'N', // 개인정보 수집 및 이용 동의 여부
          receiveTextReply: 'N' // 문자 답변 여부
        },
        checkPp: false,
        isShowPrivecyPolicy: false
      }
    },
    watch: {
      lang(val) {
        if(val == 'ko') {
            this.consult.category = '설계';
        }
        else {
            this.consult.category = 'Design';
        }
      }
    },
    methods: {
      showPrivecyPolicy() {
        this.isShowPrivecyPolicy = true;
      },
      closePrivecyPolicy() {
        this.isShowPrivecyPolicy = false;
      },
      async onSubmit() {
        console.log(this.state);
        /*
        if(this.validation()) {
          if (!confirm(this.lang == 'ko' ? "제출하시겠습니까?" : "Are you sure for submission?")) {
            // 취소(아니오) 버튼 클릭 시 이벤트
          } else {
            this.consult.phone = this.phoneHead + '-' + this.phoneMid + '-' + this.phoneTail;
            var rtnval = await Api.post('/api/v1/admin/usr/mng/send/question', {
                email: this.consult.email,
                fullName: this.consult.customer_name,
                phone: this.consult.phone,
                desc: this.consult.content.replace(/\n/g, '<br/>'),
                ctgry: this.consult.category
            });
            if (rtnval.result) {
                alert(this.lang == 'ko' ? "제출되었습니다. 빠른 시일 내에 메일 혹은 전화로 답변 드리겠습니다." : "Your request has been accepted well. Thank you.")
                this.$router.push('/');
            }
          }
        }
        */
      },
      validation() {
          if (!this.consult.email && (!this.phoneHead || !this.phoneMid || !this.phoneTail)){
              alert('이메일이나 연락처 중 하나 이상 입력하셔야 합니다.');
              return false;
          }
          if (!this.consult.customer_name) {
              alert('이름은 필수 입력사항입니다.');
              return false;
          }
          if (this.consult.content == ''){
              alert('문의 내용을 입력해주세요.');
              return false;
          }
          if(!this.checkPp) {
              alert('이용약관 및 개인정보처리방침은 필수 동의사항입니다.');
              return false;
          }
          return true;
      }
    }
}
</script>