import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../page/Hello';
import test from '../page/test';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vue-router-sample1',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
});
