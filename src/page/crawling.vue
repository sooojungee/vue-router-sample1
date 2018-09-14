<template lang="pug">
  div
    .main-input-box
      .flex-1
      input
      .button crawling
      .button(v-on:click="active") search
      .flex-1
    transition(name="slow-down")
      .sub-input-box(v-if="seen")
        input(placeholder="검색어 입력")
    .text-box
    .tag-box

</template>

<script>
export default {
  name: 'crawling',
  data() {
    return {
      seen: false
    };
  },
  methods: {
    active() {
      this.seen = !this.seen;
    }
  }
};
</script>

<style scoped lang="sass">

.slow-down-enter-active, .slow-down-leave-active
  transition: opacity .3s ease
.slow-down-enter, .slow-down-leave-to
  opacity: 0

.flex-1
  flex: 1

.main-input-box
  width: 100%
  height: 80px
  display: flex
  border-bottom: 1px solid #ccc
  padding: 24px
  input
    width: 300px
    height: 32px
    border: none
    outline: none
    border-bottom: 1px solid #ccc
    margin-right: 16px
    font-size: 16px
    padding: 0 4px
  .button
    width: 100px
    border: 1px solid #ccc
    cursor: pointer
    line-height: 30px
    margin-right: 16px
    &:hover
      color: white
      background: #ccc
.sub-input-box
  height: 50px
  border-bottom: 1px solid #ccc
  padding: 16px
  input
    width: 200px
    height: 18px
    outline: none
    border: none
    border-bottom: 1px solid #ccc
    font-size: 14px
    padding: 0 4px
</style>
