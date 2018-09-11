<template lang="pug">
  button(v-bind:style="setButtonStyle"
  v-bind:size="size"
  v-on:click="click")
    .text {{text}}
    .icon.i(v-bind:class="icon")
</template>

<script>
export default {
  name: 'button-simple',
  computed: {
    setButtonStyle() {
      return {
        background: this.background
      };
    }
  },
  props: {
    background: {
      type: String,
      default: '#48fdff'
    },
    size: {
      type: String,
      default: 'small'
    },
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'far fa-angry'
    }
  },
  methods: {
    click() {
      this.$emit('click', 'twtw');
    }
  }
};
</script>

<style scoped lang="sass">
button
  cursor: pointer
  &[size=small]
    padding: 8px
    font-size: 16px
  &[size=large]
    padding: 16px
    font-size: 24px
</style>
