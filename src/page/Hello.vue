<template lang="pug">
  .hello
    .content
      h1 hello
      h3 hi {{parentCount}} hi
      h3 {{$store.getters.name}}
      h3 {{$store.getters.age}}
      h3(@click="pluginTest") test {{$store.getters.testCount }} tttt
      button(@click="decreaseAge") decrease age
      router-link(to="/hello2") Go To HELLO
    <h1>Welcome to Soojungee Vue Template</h1>
    <h4>vuex store</h4>
    <h3 v-html="$store.getters.getCount"></h3>
    <div>
      <span v-on:click="increment" style="cursor: pointer">[ INCREMENT ]</span>
      <span v-on:click="decrement" style="cursor: pointer">[ DECREMENT ]</span>
    </div>
    <router-link class="test-link" to="/test" >누르면 이수정 component test 페이지로! </router-link>
    <router-link class="test-link" to="/crawling" >누르면 이수정 crawling test 페이지로! </router-link>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="https://github.com/hyunwoo/vue-template" target="_blank">
          Github for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { store } from '../vuex/store';

export default {
  name: 'store',
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
    },
    ...mapGetters({
      parentCount: 'age'
    })
  },
  methods: {
    pluginTest() {
      this.$store.commit('test');
    },
    increment() {
      this.$store.commit('increment', { inc: 1 });
    },
    decrement() {
      this.$store.commit('increment', { inc: -1 });
    },
    decreaseAge() {
      this.$store.commit('changeAge',
        this.$store.getters.age - 1);
    },
    async mousemoved() {
      console.log(this);
    }
  },
  mounted() {
    this.$store.commit('changePage', 'store');
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
