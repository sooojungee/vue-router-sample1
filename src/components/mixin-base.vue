<template lang="pug">
</template>

<script>
export default {
  name: 'mixin-base',
  methods: {
    numberToCommaString(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    numberToKString(number, digits) {
      const si = [
        { value: 1, symbol: '' },
        { value: 1E3, symbol: 'k' },
        { value: 1E6, symbol: 'M' },
        { value: 1E9, symbol: 'G' },
        { value: 1E12, symbol: 'T' },
        { value: 1E15, symbol: 'P' },
        { value: 1E18, symbol: 'E' }
      ];
      const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
      const num = number;
      let i;
      for (i = si.length - 1; i > 0; i -= 1) {
        if (num >= si[i].value) {
          break;
        }
      }
      return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
    },
    baseMethod() {
      console.log('called basedMethod');
    }
  }
};
</script>

<style scoped>
</style>
