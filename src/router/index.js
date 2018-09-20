import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../page/Hello';
import test from '../page/test';
import crawling from '../page/crawling';
import v from '../page/v';

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
      component: test.default
    },
    {
      path: '/crawling',
      name: 'crawling',
      component: crawling
    },
    {
      path: '/v',
      name: 'v',
      component: v
    }
  ]
});
