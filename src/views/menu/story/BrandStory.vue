<template>
  <div class="brand-story-page">
    <div class="top-area"> 
      <img src="@/assets/img/story/main.png" />
      <div class="title-item">
        <span class="name">BRAND STORY</span>
        <span class="desc">M House는 주거에 프리미엄을 더합니다</span>
      </div>
    </div>
    <div class="contents">
      <div class="story-wrapper">
        <span>시간은 흘러가지만,</span>
        <span>행복은 여기에 머무릅니다.</span>
      </div>
      <div class="circle-wrapper">
        <div class="circle">
        </div>
        <div class="text">
          <span><strong>끊임없는 연구개발</strong>로 발전시켜온 모듈러 주택</span>
          <span>플랫폼을 통한 <strong>혁신적인 공정 관리</strong></span>
          <span>라이프스타일에 맞춘 <strong>내 삶과 함께하는 공간</strong></span>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
// import Api from '@/api'

export default {
    name: 'BrandStroy',
    props: {
      lang: {
        type: String,
        default: 'ko'
      }
    },
    data() {
      return {
        radioValue: false,
        phoneHead: '',
        phoneMid: '',
        phoneTail: '',
        consult: {
          'customer_name':'',
          'email':'',
          'phone':'',
          'content':'',
          'category': this.lang == 'ko'? '설계' : 'Design'
        },
        checkPp: false
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
      async onSubmit() {
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