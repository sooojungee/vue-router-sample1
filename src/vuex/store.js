/* eslint-disable import/prefer-default-export */
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);


const incrementPlugin = (store) => {
  store.subscribe((mutation, state) => {
    if (mutation.type === 'test') {
      store.commit('consoleTest', state);
    }
  });
};

const store = new Vuex.Store({
  state: {
    count: 0,
    name: 'aaef',
    age: 0,
    page: '',
    testCount: 0
  },
  /** 반드시 동기여야 한다.
   * method 이름이 문자열 이므로 상수로 빼둘 필요가 있다.
   * call by : store.commit('method', arg)
   */
  // async await 가 달면 안된다.
  // 비동기를 적용하는 것은 action을 사용해야한다.
  mutations: {
    // state 는 무조건 첫번째 인자
    // setter 은 mutations에, getter은 getters에
    changeName(state, name) {
      state.name = name;
    },
    changeAge(state, age) {
      state.age = age;
    },
    s(state, data) {
      state.count += data.inc;
    },
    changePage(state, page) {
      state.page = page;
    },
    test(state) {
      console.log('prev testCount', state.testCount);
      state.testCount += 1;
    },
    consoleTest(state) {
      console.log('next testCount', state.testCount);
    }
  },

  /** 비동기가 포함 될 수 있다
   * method 이름이 문자열 이므로 상수로 빼둘 필요가 있다.
   * call by : store.dispatch('method', arg)
   */
  actions: {
    increment(context, data) {
      // async await 를 사용할 수 있다.
      // 대신에 마지막에 데이터 호출해줘여돼 아래처럼
      context.commit('increment', data);
      // 외부에서는 actions 안에 뭐가 있는지 모른다.
      // . 찍으면 안나옴
      // 그래서 . 찍으면 나올 수 있게 enum
    }
  },
  getters: {
    getCount: state => state.count,
    name: state => state.name,
    age: state => state.age,
    page: state => state.page,
    testCount: state => state.testCount
  },

  plugins: [incrementPlugin]
});

export { store };
