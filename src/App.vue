<template lang="pug">
  <div id="app">
    vue-dialog(ref="defaultDialog")
    vue-toast(ref="defaultToast")
    loading-message(ref="defaultLoading")
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import Button from './components/button-simple';
import Loading from './components/loading-message';
import Toast from './components/toast-message';
import VueToast from './components/vue-toast';
import Dialog from './components/vue-dialog';

import { store } from './vuex/store';

Vue.component(Button.name, Button);
Vue.component(Loading.name, Loading);
Vue.component(Toast.name, Toast);
Vue.component(VueToast.name, VueToast);
Vue.component(Dialog.name, Dialog);

Vue.prototype.$http = axios;

export default {
  name: 'App',
  store,
  async mounted() {
    Vue.prototype.$dialog = this.$refs.defaultDialog;
    Vue.prototype.$toast = this.$refs.defaultToast;
    Vue.prototype.$loading = this.$refs.defaultLoading;
  },
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
  width: 100%;
  height: 100vh;
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
