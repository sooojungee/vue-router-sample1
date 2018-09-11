<template lang="pug">
  div
    input(v-model="text", placeholder='주소를 입력하세요')
    button(v-on:click="addHTML") 확인!
    button-simple(v-bind:disabled="isButtonDisabled",
    v-bind:href="html", :icon="icon", v-on:click="connectSite")
</template>

<script>

export default {
  name: 'test',
  data() {
    return {
      text: '',
      isButtonDisabled: true,
      html: '',
      icon: 'far fa-angry'
    };
  },
  methods: {
    addHTML() {
      this.isButtonDisabled = false;
      this.html = this.text;
      this.icon = 'far fa-smile';
    },
    connectSite() {
      if (this.html.indexOf('https://') === -1 && this.html.indexOf('http://') === -1) {
        this.html = `https://${this.html}`;
      }
      window.open(this.html);
    }
  }

};
</script>

<style scoped lang="sass">

</style>
