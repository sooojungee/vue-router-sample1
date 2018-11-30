<template lang="pug">
  div#watch-example
    .content
      p yes/no 질문을 물어보세요:
      input(v-model="question")
      p {{ answer }}
    .content
      input(v-model="changeName" placeholder='fullName')
      input(v-model="firstName" placeholder='firstName')
      input(v-model="lastName" placeholder='lastName')
      .text firstName: {{ firstName }}
      .text lastName: {{ lastName }}
      button(@click="change") click
      .text fullName: {{ fullName }}
    .content
      .test(:class="classObject") skdufh
    .content
      .static(:class="{active: isActive, 'text-danger': hasError}") aaa
    .content
      .style-test(:style="{ color: activeColor, fontSize: fontSize + 'px'}") 여기야여기
      .style-test(:style="[styleObject, styleSetting]") 안녕하세요
      div(v-bind:style=" 'display:' ['-webkit-box', '-ms-flexbox', 'flex'] ") asdfasdfasdf
      div(:style="{transform: 'rotate(20deg)'}") oooo
      .icon-font.icon-font-baseline-autorenew-24px
    .content
      .test(@click="click1") a
        .test(@click.self="click2") s
          .test(@click.shift="click3") d
    .content
      .test(@click="evt => clickGroupTag(evt)") asdfasdf
      input(@click="evt => clickGroupTag(evt)")
    .content
      input(type="radio", id="one", value="One", v-model="picked")
      label(for="one") One
      input(type="radio", id="two", value="Two", v-model="picked")
      label(for="two") Two
      span 선택: {{ picked }}
    .content
      select(v-model="testText")
        option(disabled value="") Select One
        option A
        option B
        options C
      span 선택함 {{ testText }}
    .content
      input(v-model.number="age", type="text" @keyup="changes")
    .content
      test-component(:message="100")
    .content
      child-component
        h1(slot="header") 하이하이
    .content
      .add(@click="addCookie") 추가하기
      .get(@click="getCookie") 가져오기
      .delete(@click="deleteCookie") 삭제하기
    .content
      .test1(v-test="{top: '40', right: '60'}") 사용자 정의 디렉티브 테스트
      .test2(v-test2="{ color: 'yellow'}") 사용자 정의 디렉티브 테스트
    .content
      router-link.test(:to="'vue-router-sample1'") vue-router-sample1 link
      router-link.test(:to="'vue-router-sample1'" replace) vue-router-sample1 replace
      .test(@click="routerGo") <  라우터 back  >
</template>

<script>
import Vue from 'vue';
import * as _ from 'lodash';
import axios from 'axios';

Vue.directive('test', {
  bind(el, binding) {
    el.style.position = 'fixed';
    el.style.top = `${binding.value.top}px`;
    el.style.right = `${binding.value.right}px`;
    console.log('elel', el);
  }
});

Vue.directive('test2', (el, binding) => {
  el.style.backgroundColor = binding.value.color;
});

Vue.component('test-component', {
  template: '<span> {{message}} </span>',
  props: {
    message: {
      type: Object,
      defult: function () {
        return {
          message: 'hello'
        };
      }
    }
  }
});
Vue.component('child-component', {
  template: `<div class="container">
<header><slot name="header"></slot></header>
</div>`

});
export default {
  name: 'v',
  data() {
    return {
      question: '',
      answer: '질문을 하기 전까지는 대답할 수 없습니다.',
      firstName: '',
      lastName: '',
      changeName: '',
      isActive: true,
      hasError: true,
      activeColor: 'red',
      fontSize: 30,
      styleObject: {
        color: 'blue',
        fontSize: '13px',
        cursor: 'pointer'
      },
      testText: '',
      picked: [],
      age: 0
    };
  },
  watch: {
    question() {
      this.answer = '입력을 기다리는 중..';
      this.getAnswer();
    }
  },
  computed: {
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(newValue) {
        const names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    },
    classObject() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      };
    },
    styleSetting() {
      return {
        border: `1px solid ${this.styleObject.color}`
      };
    }
  },
  methods: {
    routerGo() {
      this.$router.go(-1);
    },
    addCookie() {
      const user = {
        name: 'soojung',
        uid: 'skdufhskdufh',
        email: 'skdufh@google.com'
      };
      const c = this.$cookie.set('test', user, 1);
      console.log('add', c);
    },
    getCookie() {
      console.log(this.$cookie.get('test'));
    },
    deleteCookie() {
      const c = this.$cookie.delete('test');
      console.log('delete', c);
    },
    changes() {
      console.log(typeof this.age);
    },
    testTextMethods() {
      console.log(this.testText);
    },
    clickGroupTag(e) {
      console.log(e);
    },
    asdf() {
      console.log('aa');
    },
    click1() {
      console.log('1');
    },
    click2() {
      console.log('2');
    },
    click3() {
      console.log('3');
    },
    change() {
      console.log('1', this.fullName, typeof this.fullName);
      this.fullName = this.changeName;
    },
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = '질문에는 일반적으로 물음표가 포함됩니다.';
          return;
        }
        this.answer = '생각중';
        const that = this;
        axios.get('https://yesno.wtf/api')
          .then((response) => {
            that.answer = _.capitalize(response.data.answer);
          })
          .catch((error) => {
            that.answer = `에러! ${error}`;
          });
      }, 500)
  }
};
</script>

<style scoped lang="sass">


</style>
