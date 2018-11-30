<template lang="pug">
  ul#demo
    item(class="item" :model="data")
</template>

<script>
import item from '../page/tree-component';

export default {
  name: 'vv',
  components: {
    item
  },
  data() {
    return {
      data: {
        name: 'Mytree',
        children: [
          { name: 'hello' },
          { name: 'wat' },
          {
            name: 'child folder',
            children: [
              {
                name: 'child folder',
                children: [
                  { name: 'hello' },
                  { name: 'wat' }
                ]
              },
              { name: 'hello' },
              { name: 'wat' },
              {
                name: 'child folder',
                children: [
                  { name: 'hello' },
                  { name: 'wat' }
                ]
              }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style scoped>

</style>
