<template lang="pug">
  div
    .button-box
      input(placeholder="title message" v-model="titleMessage")
      input(placeholder="text message" v-model="textMessage")
      input(placeholder="positive message" v-model="positiveMessage")
      input(placeholder="negative message" v-model="negativeMessage")
      .button.dialog-button(v-on:click="dialogOn") dialog On
    .button-box
      input(placeholder="loading message" v-model="loadingMessage")
      .button.loading-button(v-on:click="loadingOn") Loading On
      .button.loading-button(v-on:click="loadingOff") Loading Off
    .button-box
      input(placeholder="toast message" v-model="toastMessage")
      .button.toast-button(v-on:click="addSuccessToast") Baking Toast Success
      .button.toast-button(v-on:click="addInfoToast") Baking Toast Information
      .button.toast-button(v-on:click="addWarningToast") Baking Toast Warning
    .button-box
      .text {{numberToCommaString(10000)}}


</template>

<script>
import MixinBase from '../components/mixin-base';

export default {
  name: 'test',
  mixins: [MixinBase],
  data() {
    return {
      titleMessage: '타이틀 메세지를 입력하세요',
      textMessage: '텍스트 메세지를 입력하세요',
      positiveMessage: '예',
      negativeMessage: '아니오',
      loadingMessage: '로딩중입니다.',
      toastMessage: '메세지를 띄웁니다.',
      contents: []
    };
  },
  methods: {
    loadingOn() {
      const options = { message: this.loadingMessage };
      this.$loading.openProgress(options);
    },
    loadingOff() {
      this.$loading.closeProgress();
    },
    addSuccessToast() {
      const options = { message: this.toastMessage };
      this.$toast.success(options);
    },
    addInfoToast() {
      const options = { message: this.toastMessage };
      this.$toast.info(options);
    },
    addWarningToast() {
      const options = { message: this.toastMessage };
      this.$toast.warning(options);
    },
    dialogOn() {
      const options = {
        title: this.titleMessage,
        text: this.textMessage,
        positive: this.positiveMessage,
        negative: this.negativeMessage,
        positiveOn: () => {
          console.log('positive');
        },
        negativeOn: () => {
          console.log('negative');
        }
      };
      this.$dialog.open(options);
    }
  }
};
</script>

<style scoped lang="sass">

*
  box-sizing: border-box

body
  margin: 0
  padding: 0
  width: 100%
  height: 100vh

div
  width: 100%

.dialog-button
  background: #65aae2
  &:active
    color: #fff
    background: #4485CE

.loading-button
  background: #ffd84d
  &:active
    background: #FFB516
    color: white

.toast-button
  background: #b6de60
  &:active
    background: #8AC74D
    color: white

.content-box
  width: 100%
  height: calc(100vh - 50px)
  display: flex

.button-box
  width: 100%
  height: 50px
  display: flex
  padding: 16px

  .button
    flex: 1
    cursor: pointer
    height: 30px
    border-radius: 8px
    line-height: 14px
    padding: 8px
    margin: 0 16px
    color: #777
  input
    flex: 1
    margin: 0 16px
    height: 30px
    outline: none
    border: none
    border-bottom: 1px solid #ccc

.loading-box
  margin: 0 16px
  width: 400px
  height: 400px

.toast-container
  position: fixed
  bottom: 10px
  right: 10px
  display: flex
  flex-direction: column
  z-index: 100
  width: 100%

.toast-box
  padding: 0 16px
  display: flex
  flex-wrap: wrap
  position: absolute
  right: 0
  top: 0
  flex-direction: column-reverse
  align-self: flex-end
  width: 500px
</style>
