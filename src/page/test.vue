<template lang="pug">
  div
    .button-box
      input(v-model="loadingText")
      .button(v-on:click="loadingOn") Loading On
      .button(v-on:click="loadingOff") Loading Off
      input(v-model="toastText")
      .button(v-on:click="addSuccessToast") Baking Toast S
      .button(v-on:click="addInfoToast") Baking Toast I
      .button(v-on:click="addWarningToast") Baking Toast E
    loading-message(ref="loading")
    vue-toast(ref="toast")
</template>

<script>

export default {
  name: 'test',
  computed: {
  },
  data() {
    return {
      loadingText: 'loading Text',
      toastText: 'toast Text'
    };
  },
  methods: {
    loadingOn() {
      this.$refs.loading.openProgress(this.text);
    },
    loadingOff() {
      this.$refs.loading.closeProgress();
    },
    addSuccessToast() {
      this.$refs.toast.success(this.toastText);
    },
    addInfoToast() {
      this.$refs.toast.info(this.toastText);
    },
    addWarningToast() {
      this.$refs.toast.warning(this.toastText);
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
    cursor: pointer
    height: 30px
    border-radius: 8px
    background-color: #00acc1
    line-height: 14px
    padding: 8px
    margin: 0 16px
    &:active
      background: #0085c1
      color: white

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
