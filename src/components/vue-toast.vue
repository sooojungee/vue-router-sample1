<template lang="pug">
  .toast-container
    transition-group(name="slide-fade" tag="ul")
      .toast(v-for="item in items" v-bind:class="item.theme" :key="item.key")
        .content
          .title {{ item.type }}
          .message {{ item.message }}
        .icon.i.fas.fa-times(v-on:click="remove(item)")
</template>

<script>
export default {
  name: 'vue-toast',
  methods: {
    success(message) {
      this.add('success', message, 'toast-success');
    },
    info(message) {
      this.add('info', message, 'toast-info');
    },
    warning(message) {
      this.add('warning', message, 'toast-warning');
    },
    add(typeString, messageString, themeString) {
      const item = {
        type: typeString,
        message: messageString,
        theme: themeString,
        key: this.items.length
      };
      this.items.push(item);
      setTimeout(() => this.remove(item), 3000);
    },
    remove(item) {
      const key = this.items.indexOf(item);
      this.items.splice(key, 1);
    }
  },
  data() {
    return {
      items: []
    };
  }
};
</script>

<style scoped lang="sass">

.slide-fade-enter-active
  transition: all .3s ease

.slide-fade-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(10px)
  opacity: 0

.toast-success
  border: 2px solid #77e633

.toast-info
  border: 2px solid #41c8e8

.toast-warning
  border: 2px solid #ee162a

.toast-container
  position: fixed
  bottom: 16px
  right: 16px
  z-index: 100
  width: 200px
  padding: 16px
  .toast
    opacity: 1
    margin: 8px
    display: flex
    padding: 8px
    position: relative
    .icon
      cursor: pointer
      position: absolute
      right: 5px
      top: 5px
</style>
