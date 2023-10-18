<template>
  <div class="modalDialog" :class="{mobile: isMobile}">
    <div class="modal-wrapper">
      <div class="modal-content">
        <div class="modal-header">
          <div class="text-end">
            <button type="button" class="circle" @click="modalClose"></button>
          </div>
        </div>
        <div class="modal-body">
          <div class="subject">
            <span>서비스 이용 및 회원가입 약관</span>
          </div>
          <div class="text-area">
            <div class="text">
              <p v-html="termsInUse"></p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="btn-area">
            <button class="btn" @click="modalClose">닫기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tiu from '@/assets/textdata/TermsInUse.js'
import store from '@/store'

export default {
  name: 'TermsOfService',
  data() {
      return {
        termsInUse: '',
      }
  },
  mounted() {
    this.termsInUse = tiu;
    document.body.classList.add('hidden');
  },
  computed: {
    isMobile() {
      return store.state.isMobile;
    }
  },
  methods: {
    modalClose() {
      document.body.classList.remove('hidden');
      this.$emit('close')
    }
  }
}
</script>