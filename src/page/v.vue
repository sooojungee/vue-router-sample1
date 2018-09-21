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
</template>

<script>
import * as _ from 'lodash';
import axios from 'axios';

export default {
  name: 'v',
  data() {
    return {
      question: '',
      answer: '질문을 하기 전까지는 대답할 수 없습니다.',
      firstName: '',
      lastName: '',
      changeName: ''
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
    }
  },
  methods: {
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
