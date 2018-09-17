<template lang="pug">
  .toast-container
    transition-group(name="slide-fade" tag="ul")
      .toast(v-for="item in items" v-bind:class="item.theme" :key="item.id")
        .content
          .title {{ item.type }}
          .message {{ item.message }}
        .icon.i.fas.fa-times(v-on:click="remove(item)")
</template>

<script>

import * as _ from 'lodash';

export default {
  name: 'vue-toast',
  /**
   * @param {Object} options
   * @param {String} options.message
   */
  methods: {
    success(options) {
      const result = {
        type: 'success',
        text: options.message,
        theme: 'toast-success'
      };
      this.add(result);
    },
    info(options) {
      const result = {
        type: 'info',
        text: options.message,
        theme: 'toast-info'
      };
      this.add(result);
    },
    warning(options) {
      const result = {
        type: 'warning',
        text: options.message,
        theme: 'toast-warning'
      };
      this.add(result);
    },
    add(options) {
      if (_.isNil(options)) {
        return;
      }
      const item = {
        type: options.type,
        message: options.text,
        theme: options.theme,
        id: new Date() + (Math.random() * 2)
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
  transition: all .4s ease

.slide-fade-leave-active
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(400px)
  opacity: 0

.toast-success
  border-left: 4px solid #2BDE3F
  .content
    .title
      color: #2BDE3F

.toast-info
  border-left: 4px solid #1D72F3
  .content
    .title
      color: #1D72F3

.toast-warning
  border-left: 4px solid #FFC007
  .content
    .title
      color: #FFC007

.toast-container
  position: fixed
  bottom: 16px
  right: 16px
  z-index: 2
  width: 400px
  padding: 16px
  .toast
    width: 300px
    text-align: left
    opacity: 1
    margin: 16px 8px
    display: flex
    position: relative
    background: #fff
    border: 1px solid #ddd
    border-radius: 8px
    .content
      flex: 1
      padding: 16px
      .title
        font-size: 16px
        font-weight: 600
        line-height: 1
        padding-bottom: 8px
      .message
        font-size: 13px
        word-break: break-all
        line-height: 1.2
    .icon
      cursor: pointer
      position: absolute
      right: 10px
      top: 10px
      color: #ddd
      &:hover
        color: #aaa
</style>
