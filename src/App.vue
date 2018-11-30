<template lang="pug">
  <div id="app">
  .nav
    .text gnb
    .flex-1
    .text(v-if="$store.getters.page === 'store'") store
    .text(v-if="$store.getters.page === 'hello2'") hello2
    hello
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
import Chatting from './components/vue-chatting';
import VueCookie from 'vue-cookie';
import { store } from './vuex/store';
import SoojungFirstPlugin from 'soojung-first-plugin';

Vue.use(VueCookie);
Vue.use(SoojungFirstPlugin);

Vue.component(Button.name, Button);
Vue.component(Loading.name, Loading);
Vue.component(Toast.name, Toast);
Vue.component(VueToast.name, VueToast);
Vue.component(Dialog.name, Dialog);
Vue.component(Chatting.name, Chatting);

Vue.prototype.$http = axios;

export default {
  name: 'App',
  store,
  async mounted() {
    Vue.prototype.$dialog = this.$refs.defaultDialog;
    Vue.prototype.$toast = this.$refs.defaultToast;
    Vue.prototype.$loading = this.$refs.defaultLoading;
  }
};
</script>

<style lang="sass">

@import "./svg-icons/iconfont.css"

*
  box-sizing: border-box

body
  margin: 0
  padding: 0
  width: 100%

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

.nav
  width: 100%
  height: 50px
  border-bottom: 1px solid #ccc
  display: flex
  .text
    width: 100px
    font-size: 20px
    line-height: 1
  .flex-1
    flex: 1

</style>
