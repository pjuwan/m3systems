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
<style lang="scss" scoped>
.modalDialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  p,span {
    font-family: "Noto Sans KR";
    font-weight: bold;
    letter-spacing: -1px;
  }
  .modal-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;  
    position: relative;
    z-index: 2;    
    .modal-content {
      width: 50%;
      position: relative;
      display: flex;
      flex-direction: column;
      pointer-events: auto;
      background-color: #fff;
      background-clip: padding-box;
      border: 3px solid rgba(0, 0, 0, 0.2);
      border-radius: 0.6rem;
      outline: 0;
      .modal-header {
        width: 100%;
        text-align: right;
        display: inline-block;
        margin: 12px 0;
        padding-right: 15px;
        .circle {
          position: relative;
          width: 29px;
          height: 29px;
          background-color: #a6a6a6;
          border-radius: 50%;
          cursor: pointer;
          border: 0;
        }

        .circle::before,
        .circle::after {
          content: '';
          position: absolute;
          width: 2px;
          height: 15px;
          background-color: #fff;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .circle::before {
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .circle::after {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
        .btn-area {
          background: black;
          padding-left: 10px;
          width: 60%;
          height: 63px;
          align-items: center;
          display: flex;
        }
      }
      .modal-body {
        flex-direction: column;
        display: inline-flex;
        justify-content: center;
        width: 100%;
        .subject {
          text-align: center;
          span {
            font-size: 20.8px;
            line-height: 31.2px;
            text-size-adjust: 100%;
            margin-top: 31px;
          }
        }
        .text-area {
          display: inline-flex;
          justify-content: center;
          width: 100%;          
          margin-top: 29px;          
          .text {
            color: #111;
            width: 90%;            
            height: 500px;
            border: 1px solid rgb(217, 217, 217);
            overflow-x: hidden;
            padding: 22px;
            p {
              font-size: 13.6px;
              line-height: 21.4px;                          
            }
          }
        }
      }
      .modal-footer {
        display: inline-flex;
        justify-content: center;
        margin: 15px 0 25px 0;
        .btn-area .btn {
          width: 150px;
          height: 37px;
          border: 0px;
          background-color: rgb(79, 89, 98);
          color: rgb(255, 255, 255);
          font-size: .85rem;
          cursor: pointer;
        }
      }
    }
  }
  &.mobile {
    .modal-content {
      width: 98%;
    }
  }
}
</style>