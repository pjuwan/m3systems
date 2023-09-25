<template>
    <div>
        <div class="dh_p4a w-100">
            <div class="x_div_center" style="height:100%; background-color:rgba(0, 0, 0, 0.3);">
                <div class="rp_set px-3" style="padding:120px 0 0 0;" v-if="lang == 'ko'">
                    <span class="dh_p1b">지금 바로 무료 상담 받아보세요.</span><br>
                    <span class="dh_p1c">지금 바로 무료 상담 받아보세요. 상담 신청 시, 전문 컨설턴트가 맞춤 상담을 해드립니다.</span>
                </div>
                <div class="rp_set px-3" style="padding:120px 0 0 0;" v-else-if="lang == 'en'">
                    <span class="dh_p1b">Get free consultation right now.</span><br>
                    <span class="dh_p1c">When applying for counseling, a professional consultant will provide customized counseling.</span>
                </div>
            </div>
        </div>

        <div class="x_div_center">
            <div class="rp_set">

                <!-- QA -->
                <div class="w-100 py-3 pt-5">
                    <div class="x_div_center pb-3"><span class="fkr-set2 fs-16 fc-w10"><strong>{{ lang == 'ko'? '문의하기' : 'Contact Us'}}</strong></span></div>

                    <!-- QA -->
                    <div class="">

                        <div class="table-responsive" style="border:1px solid #c9c9c9; border-radius:8px">
                            <table class="table-borderless w-100" style="table-layout:fixed">
                            <tr class="ls_bg1" style="height:55px;">
                                <td class="text-center br_0" width="110" style="background-color:#efefef"><span class="fkr-set1">{{ lang == 'ko'? '이메일' : 'E-mail'}}</span></td>
                                <td class="text-center px-2"><input v-model="consult.email" type="text" class="form-control" style="width:230px"></td>
                            </tr>
                            <tr class="ls_bg1" style="height:55px;">
                                <td class="text-center br_0" style="background-color:#efefef"><span class="fkr-set1">{{ lang == 'ko'? '이름' : 'Name'}}</span></td>
                                <td class="text-center px-2"><input v-model="consult.customer_name" type="text" class="form-control" style="width:230px"></td>
                            </tr>
                            <tr class="ls_bg1">
                                <td class="text-center br_0" style="background-color:#efefef"><span class="fkr-set1">{{ lang == 'ko'? '연락처' : 'H.P'}}</span></td>
                                <td class="d-flex px-2 py-2">
                                    <div class="x_div_center"><input v-model="phoneHead" type="text" class="form-control text-center" style="width:68px"></div>
                                    <div class="x_div_center px-1">-</div>
                                    <div class="x_div_center"><input v-model="phoneMid" type="text" class="form-control text-center" style="width:68px"></div>
                                    <div class="x_div_center px-1">-</div>
                                    <div class="x_div_center"><input v-model="phoneTail" type="text" class="form-control text-center" style="width:68px"></div>
                                </td>
                            </tr>
                            <tr class="ls_bg1" style="height:55px;">
                                <td class="text-center br_0" style="background-color:#efefef"><span class="fkr-set1">{{ lang == 'ko'? '분류' : 'Category'}}</span></td>
                                <td class="px-2">
                                    <select class="custom-select" v-model="consult.category" style="width:200px; height:37px;">
                                        <option :value="lang == 'ko'? '설계' : 'Design'">{{lang == 'ko'? '설계' : 'Design'}}</option>
                                        <option :value="lang == 'ko'? '시공' : 'Construction'">{{lang == 'ko'? '시공' : 'Construction'}}</option>
                                        <option :value="lang == 'ko'? '기타' : 'Others'">{{lang == 'ko'? '기타' : 'Others'}}</option>
                                    </select>
                                </td>
                            </tr>
                            <tr class="py-2">
                                <td class="text-center br_0" style="background-color:#efefef"><span class="fkr-set1">{{ lang == 'ko'? '문의내용' : 'Contents'}}</span></td>
                                <td class="text-center p-2"><textarea v-model="consult.content" class="form-control" style="height:200px"></textarea></td>
                            </tr>
                            </table>

                        </div>

                        <li class="chk_box"><input type="checkbox" id="agree2" name="agree2" class="custom-control-input" v-model="checkPp" value="true" >
                        <label class="custom-control-label" for="agree2"><span class="fkr-set2">개인정보처리방침에 동의합니다</span> &nbsp; <a class="fkr-set2 fc-w3" href="#privacyPolicy" data-toggle="modal" data-id="1'">상세보기</a></label></li>

                        <div class="x_div_center py-2"><button @click="onSubmit()" class="fkr-set1 px-4 py-2 fc-w1" style="width:120px; background-color:#4e0000; border:1px solid #e9e9e9; border-radius:4px">{{ lang == 'ko'? '문의하기' : 'Submit'}}</button></div>

                    </div>
                </div>

                <div style="height:80px"></div>

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