<template>
  <div class="inquiry">
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
          <div class="cell">
            <span class="th">이름</span>
            <input type="text" class="small" placeholder="이름을 입력해주세요"/>
          </div>
          <div class="cell">
            <span class="th">연락처</span>
            <input type="text" placeholder="전화번호를 입력해주세요(기호, 공백 제외)"/>
          </div>
        </div>
        <div class="row">
          <div class="cell">
            <span class="th">이메일</span>
            <input type="text" placeholder="이메일을 입력해주세요"/>
          </div>
        </div>
        <div class="row">
          <div class="cell">
            <span class="th">건축희망모델</span>
            <select>
              <option value="">CNK-01-XX-XX</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="cell">
            <span class="th">건축예상평수</span>
            <label>
              <input v-model="isChecked" type="radio" @click="onCheck()"/>
              <span class="radio">20평이하</span>
            </label>
          </div>
        </div>
        <div class="text-wrapper-9">건축희망모델</div>
        <div class="text-wrapper-10">연락처</div>
        <div class="text-wrapper-11">이메일</div>
        <div class="text-wrapper-12">이름을 입력해주세요</div>
        <div class="overlap-2">
            <div class="text-wrapper-13">상담내용을 자세하게 작성해주세요.</div>
            <div class="rectangle"></div>
        </div>
        <p class="p">전화번호를 입력해주세요 (기호, 공백 제외)</p>
        <div class="text-wrapper-14">이메일을 입력해주세요</div>
        <div class="text-wrapper-15">건축예상평수</div>
        <div class="text-wrapper-16">건축예정시기</div>
        <div class="text-wrapper-17">건축예정금액</div>
        <div class="text-wrapper-18">구조</div>
        <div class="text-wrapper-19">상담내용</div>
        <p class="text-wrapper-20">개인정보 수집 및 이용에 동의합니다.</p>
        <div class="text-wrapper-21">개인정보활용 전문보기</div>
        <div class="text-wrapper-22">문자로 답변을 받겠습니다.</div>
        <div class="group-2">
            <div class="text-wrapper-23">20평이하</div>
            <div class="ellipse-wrapper"><div class="ellipse"></div></div>
        </div>
        <div class="group-3">
            <div class="text-wrapper-23">6개월이내</div>
            <div class="ellipse-wrapper"><div class="ellipse"></div></div>
        </div>
        <div class="group-4">
            <div class="text-wrapper-23">1~2억</div>
            <div class="ellipse-wrapper"><div class="ellipse"></div></div>
        </div>
        <div class="group-5">
            <div class="text-wrapper-23">강구조</div>
            <div class="ellipse-wrapper"><div class="ellipse"></div></div>
        </div>
        <div class="group-6">
            <div class="text-wrapper-23">20평대</div>
            <div class="ellipse-wrapper"><div class="ellipse"></div></div>
        </div>
        <div class="group-7">
            <div class="text-wrapper-23">1년이내</div>
            <div class="ellipse-wrapper"><div class="ellipse"></div></div>
        </div>
        <div class="group-8">
            <div class="text-wrapper-23">2~3억</div>
            <div class="ellipse-wrapper"><div class="ellipse"></div></div>
        </div>
        <div class="group-9">
            <div class="text-wrapper-23">목구조</div>
            <div class="ellipse-wrapper"><div class="ellipse"></div></div>
        </div>
        <div class="group-10">
            <div class="text-wrapper-23">30평대</div>
            <div class="ellipse-wrapper"><div class="ellipse"></div></div>
        </div>
        <div class="group-11">
            <div class="text-wrapper-23">2년이상</div>
            <div class="ellipse-wrapper"><div class="ellipse"></div></div>
        </div>
        <div class="group-12">
            <div class="text-wrapper-23">3~4억</div>
            <div class="ellipse-wrapper"><div class="ellipse"></div></div>
        </div>
        <div class="group-13">
            <div class="text-wrapper-23">40평대</div>
            <div class="ellipse-wrapper"><div class="ellipse"></div></div>
        </div>
        <div class="group-14">
            <div class="text-wrapper-23">50평대</div>
            <div class="ellipse-wrapper"><div class="ellipse"></div></div>
        </div>
        <div class="group-15">
            <div class="text-wrapper-23">기타</div>
            <div class="ellipse-wrapper"><div class="ellipse"></div></div>
        </div>
        <div class="group-16">
            <div class="text-wrapper-23">60평이상</div>
            <div class="ellipse-wrapper"><div class="ellipse"></div></div>
        </div>
        <div class="div-wrapper">
          <div class="submit">상담신청</div>
        </div>
        <div class="overlap-wrapper">
          <div class="overlap-5"><div class="text-wrapper-25">CNK-01-XX-XX</div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Api from '@/api'

export default {
    name: 'MenuQuestion',
    props: {
        lang: {
            type: String,
            default: 'ko'
        }
    },
    data() {
        return {
            isChecked: false,
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
      onCheck() {
        this.isChecked = !this.isChecked;
      },
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