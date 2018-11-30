import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../page/Hello';
import test from '../page/test';
import crawling from '../page/crawling';
import v from '../page/v';
import thetheChat from '../page/thetheChat';
import bricks from '../page/test/bricks/bricks';
import hello2 from '../page/Hello2';
import vv from '../page/vv';


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
    },
    {
      path: '/thetheChat',
      name: 'thetheChat',
      component: thetheChat
    },
    {
      path: '/bricks',
      name: 'bricks',
      component: bricks
    },
    {
      path: '/hello2',
      name: 'hello2',
      component: hello2
    },
    {
      path: '/vv',
      name: 'vv',
      component: vv
    }
  ]
});
