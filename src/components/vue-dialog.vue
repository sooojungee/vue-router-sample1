<template lang="pug">
  .dialog-field(v-if="seen")
    .dialog-content
      .title {{title}}
      .text {{text}}
      .command-content
        .command.negative(@click="clickNegative") {{negative}}
        .command.positive(@click="clickPositive") {{positive}}
</template>

<script>
import * as _ from 'lodash';

export default {
  name: 'vue-dialog',
  data() {
    return {
      seen: false,
      title: '안녕',
      text: '안녕하세요',
      positive: '확인',
      negative: '취소',
      positiveOn: null,
      negativeOn: null
    };
  },
  methods: {
    /**
     * @param {Object} options
     * @param {String} options.title
     * @param {String} options.text
     * @param {String} options.positive
     * @param {String} options.negative
     * @param {Function} options.positiveOn
     * @param {Function} options.negativeOn
     */
    open(options) {
      if (_.isNil(options)) {
        return;
      }
      this.seen = true;
      this.title = options.title;
      this.text = options.text;
      this.positive = options.positive;
      this.negative = options.negative;
      this.positiveOn = options.positiveOn;
      this.negativeOn = options.negativeOn;
    },
    clickNegative() {
      if (_.isFunction(this.negativeOn)) {
        this.negativeOn();
      }
      this.seen = false;
    },
    clickPositive() {
      if (_.isFunction(this.positiveOn)) {
        this.positiveOn();
      }
      this.seen = false;
    }
  }
};
</script>

<style scoped lang="sass">

.flex-1
  flex: 1

.dialog-field
  z-index: 10
  width: 100%
  height: 100vh
  background: rgba(0, 0, 0, 0.4)
  pointer-events: all
  position: fixed
  left: 0
  top: 0
  display: flex
  align-items: center
  justify-content: center
  .dialog-content
    width: 360px
    min-height: 100px
    background: #fff
    border-radius: 8px
    .title
      text-align: center
      font-size: 15px
      font-weight: 600
      line-height: 2
      padding: 8px 16px
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
    .text
      padding: 2px 8px 10px 8px
      font-size: 13px
      line-height: 2
      border-bottom: 1px solid #ccc
      word-break: break-all
    .command-content
      display: flex
      .command
        flex: 1
        text-align: center
        line-height: 1
        padding: 14px
        font-size: 14px
        &:hover
          cursor: pointer
          background: #eee
          font-weight: 600
          color: #00b0ff
      .negative
        border-right: 1px solid #ccc
        border-bottom-left-radius: 8px
      .positive
        border-bottom-right-radius: 8px
/*.dialog-content*/
  /*width: 300px*/
  /*min-height: 120px*/
  /*background: #fff*/
  /*text-align: left*/
  /*padding: 8px 16px*/
  /*border-radius: 8px*/
  /*.title*/
    /*white-space: nowrap*/
    /*overflow: hidden*/
    /*text-overflow: ellipsis*/
    /*font-size: 20px*/
    /*font-weight: 700*/
    /*line-height: 2*/
    /*border-bottom: 1px solid #ccc*/
  /*.text*/
    /*font-size: 13px*/
    /*line-height: 3*/
  /*.command-content*/
    /*display: flex*/
    /*padding: 8px*/
    /*height: 50px*/
    /*.command*/
      /*cursor: pointer*/
      /*padding: 8px*/
      /*border-radius: 8px*/
      /*background: #fdd835*/
      /*font-size: 14px*/
      /*line-height: 1*/
      /*margin-left: 8px*/

</style>
