<template lang="pug">
  .toast
    .toast-icon I
    .toast-content
      .toast-content-title success
      .toast-content-text <ㅊㅊㅊㅊㅊㅊㅊㅊ>
</template>

<script>
export default {
  name: 'toast-message',
  computed: {
    setToastStyle() {
      return {
        translateY: this.translateY
      };
    },
    setToastHeight() {
      return {
        translateY: this.translateY
      };
    }
  },
  props: {
    translateY: {
      type: String,
      default: '0%'
    }
  }
};
</script>


<style scoped lang="sass">
.toast
  position: absolute
  right: 0
  bottom: 0
  padding: 8px
  width: 200px
  background: #5c6bc0
  .toast-content
    display: flex
</style>
<!--<template>-->
<!--<div class="toast toast&#45;&#45;green add-margin">-->
<!--<div class="toast__icon">-->
<!--<svg version="1.1" class="toast__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">-->
<!--<g><g><path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z"></path>-->
<!--</g></g>-->
<!--</svg>-->
<!--</div>-->
<!--<div class="toast__content">-->
<!--<p class="toast__type">Success</p>-->
<!--<p class="toast__message">Anyone with access can view your invited visitors.</p>-->
<!--</div>-->
<!--<div class="toast__close">-->
<!--<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.642 15.642"-->
<!--xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 15.642 15.642">-->
<!--<path fill-rule="evenodd"-->
<!--d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"></path>-->
<!--</svg>-->
<!--</div>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--name: 'toast-message'-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--@import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i');-->

<!--.add-margin {-->
<!--margin: 20px;-->
<!--}-->

<!--.toast__svg {-->
<!--fill: #fff;-->
<!--}-->

<!--.toast {-->
<!--height: 100px;-->
<!--text-align: left;-->
<!--padding: 21px 0;-->
<!--background-color: #fff;-->
<!--border-radius: 4px;-->
<!--max-width: 500px;-->
<!--position: relative;-->
<!--bottom: 0px;-->
<!--box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.2);-->
<!--}-->

<!--.toast:before {-->
<!--content: '';-->
<!--position: absolute;-->
<!--top: 0;-->
<!--left: 0;-->
<!--width: 4px;-->
<!--height: 100%;-->
<!--border-top-left-radius: 4px;-->
<!--border-bottom-left-radius: 4px;-->

<!--}-->

<!--.toast__icon {-->
<!--/*position: absolute;*/-->
<!--/*top: 50%;*/-->
<!--/*left: 22px;*/-->
<!--transform: translateY(-50%);-->
<!--width: 14px;-->
<!--height: 14px;-->
<!--padding: 7px;-->
<!--border-radius: 50%;-->
<!--display: inline-block;-->
<!--}-->

<!--.toast__type {-->
<!--color: #3e3e3e;-->
<!--font-weight: 700;-->
<!--margin-top: 0;-->
<!--margin-bottom: 8px;-->
<!--}-->

<!--.toast__message {-->
<!--font-size: 14px;-->
<!--margin-top: 0;-->
<!--margin-bottom: 0;-->
<!--color: #878787;-->
<!--}-->

<!--.toast__content {-->
<!--padding-left: 70px;-->
<!--padding-right: 60px;-->
<!--}-->

<!--.toast__close {-->
<!--position: absolute;-->
<!--right: 22px;-->
<!--top: 50%;-->
<!--width: 14px;-->
<!--cursor: pointer;-->
<!--height: 14px;-->
<!--fill: #878787;-->
<!--transform: translateY(-50%);-->
<!--}-->

<!--.toast&#45;&#45;green .toast__icon {-->
<!--background-color: #2BDE3F;-->
<!--}-->

<!--.toast&#45;&#45;green:before {-->
<!--background-color: #2BDE3F;-->
<!--}-->

<!--.toast&#45;&#45;blue .toast__icon {-->
<!--background-color: #1D72F3;-->
<!--}-->

<!--.toast&#45;&#45;blue:before {-->
<!--background-color: #1D72F3;-->
<!--}-->

<!--.toast&#45;&#45;yellow .toast__icon {-->
<!--background-color: #FFC007;-->
<!--}-->

<!--.toast&#45;&#45;yellow:before {-->
<!--background-color: #FFC007;-->
<!--}-->
<!--</style>-->
