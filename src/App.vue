<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import Button from './components/button-simple';
import Loading from './components/loading-message';
import Toast from './components/toast-message';
import VueToast from './components/vue-toast';
import { store } from './vuex/store';

Vue.component(Button.name, Button);
Vue.component(Loading.name, Loading);
Vue.component(Toast.name, Toast);
Vue.component(VueToast.name, VueToast);
export default {
  name: 'App',
  store,
  methods: {}
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
