<template lang="pug">
  div {{count}}
    .button(@click="increase()" :disabled="maximumTen") increase
    .button(@click="decrease()" :disabled="minimumZero") decrease
</template>

<script>
export default {
  name: 'v',
  data() {
    return {
      count: 0
    };
  },
  computed: {
    maximumTen() {
      return this.count < 10;
    },
    minimumZero() {
      return this.count > 0;
    }
  },
  methods: {
    increase() {
      if (this.maximumTen) {
        this.count += 1;
      }
    },
    decrease() {
      if (this.minimumZero) {
        this.count -= 1;
      }
    }
  }
};
</script>

<style scoped lang="sass">


</style>
