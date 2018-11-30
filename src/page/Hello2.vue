<template lang="pug">
  .hello
    .content
      h1 store
      h3 {{$store.getters.name}}
      h3 {{$store.getters.age}}
      button(@click="increaseAge") increase age
      router-link(to="/vue-router-sample1") Go To HELLO
</template>

<script>

import { store } from '../vuex/store';

export default {
  name: 'hello2',
  store, // vue 에서 현재 store을 사용하겠다.
  data() {
    return {
      msg: 'Welcome to Hanu Vue Template',
      posX: 0,
      posY: 0
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    getPosition() {
      return {
        left: `${this.posX}px`,
        top: `${this.posY}px`
      };
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment', { inc: 1 });
    },
    decrement() {
      this.$store.commit('increment', { inc: -1 });
    },
    async mousemoved() {
      console.log(this);
    },
    increaseAge() {
      // 첫 번째는 메소드 이름 두번째는 아규먼트
      this.$store.commit('changeAge',
        this.$store.getters.age + 1);
    }
  },
  mounted() {
    this.$store.commit('changePage', 'hello2');
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.test-link {
  padding: 8px;
  font-size: 20px;
  color: #00b0ff;
}
</style>
