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
            <span>개인정보처리방침</span>
          </div>
          <div class="text-area">
            <div class="text">
              <p v-html="privacyPolicy"></p>
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
import pp from '@/assets/textdata/PrivacyPolicy.js'
import store from '@/store'

export default {
  name: 'PrivacyPolicyModal',
  data() {
      return {
      privacyPolicy: ''
      }
  },
  mounted() {
    this.privacyPolicy = pp;
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