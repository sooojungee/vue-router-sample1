<template lang="pug">
  div
    .chat
      .empty-part
      .left-part
        .left-part-header
          .header-image SL
          .header-name soojung.lee
          .header-status
            .i.fas.fa-angle-down
        .left-part-input
          .input-box
            .i.fas.fa-search
            input(placeholder="검색 (CMD+K)")
          .adder.i +
        .left-part-contents
          // 여기해야돼
        .left-part-footer TheTheChat
      .main-part
        .main-header
          .i.far.fa-star
          .i.fas.fa-lock
          .header-text class
        .main-chatting
        .main-input
          .main-input-contents
            .input-box
              .i.far.fa-grin
              textarea(@keyup="sendMessage" placeholder='메세지' v-model="message")
            .content-box
      .right-part
        .icon.i.fas.fa-info-circle
        .icon.i.fas.fa-search
        .icon.i.fas.fa-users
        .icon.i.fas.fa-bell
        .icon.i.fas.fa-paperclip
        .icon.i.fas.fa-at
        .icon.i.fas.fa-star
        .icon.i.fas.fa-thumbtack

</template>

<script>
import * as textController from './chat-textarea';

export default {
  name: 'thetheChat',
  data() {
    return {
      message: ''
    };
  },
  methods: {
    sendMessage() {
      console.log(this.message);
    }
  }
};
</script>

<style scoped lang="sass">


$left-part-background: #04446A

div
  width: 100%
  height: 100vh

.chat
  display: flex
  height: 100%

.i
  cursor: pointer

.empty-part
  width: 80px
  max-width: 80px
  height: 100%
  background: #222

.left-part
  width: 220px
  height: 100%
  background: #999
  .left-part-header
    width: 100%
    height: 50px
    display: flex
    padding: 8px
    $header-height: 34px
    background: $left-part-background
    .header-image
      width: $header-height
      height: $header-height
      background: #FDB316
      border-radius: 4px
      color: #fff
      font-size: 21px
      font-weight: 600
      line-height: $header-height
      text-align: center
    .header-name
      flex: 1
      height: $header-height
      line-height: $header-height
      text-align: left
      font-size: 15px
      color: rgba(255, 255, 255, 0.7)
      padding: 0 8px
    .header-status
      width: 16px
      height: $header-height
      .i
        width: 100%
        height: 100%
        color: #fff
        line-height: $header-height
  .left-part-input
    width: 100%
    height: 45px
    display: flex
    padding: 8px
    background: $left-part-background
    .input-box
      flex: 1
      height: 100%
      border: 1px solid #bbb
      border-radius: 4px
      position: relative
      margin-right: 16px
      opacity: 0.8
      overflow: hidden
      .i
        width: 16px
        height: 29px
        color: #bbb
        position: absolute
        left: 8px
        line-height: 29px
        font-size: 12px
      input
        background: rgba(255, 255, 255, 0.1)
        width: 100%
        height: 100%
        border: none
        outline: none
        padding-left: 32px
        color: #fff
        background-opacity: 0.8
        &::placeholder
          color: #bbb
          opacity: 0.8
    .adder
      width: 15px
      height: 100%
      line-height: 29px
      color: #ccc
      font-size: 22px
      font-weight: 500
  .left-part-contents
    width: 100%
    height: calc(100% - 155px)
    overflow-y: auto
    background: $left-part-background
    opacity: 0.9
    padding: 8px
  .left-part-footer
    width: 100%
    height: 60px
    background: $left-part-background
    padding: 8px
    line-height: 44px
    color: white
    font-size: 36px
    font-weight: 800

.main-part
  flex: 1
  height: 100%
  display: flex
  flex-direction: column
  .main-header
    width: 100%
    height: 50px
    border-bottom: 1px solid #ccc
    padding: 8px 16px
    display: flex
    .i
      width: 32px
      height: 100%
      line-height: 32px
      color: #ddd
    .header-text
      flex: 1
      height: 100%
      line-height: 34px
      color: #333
      font-size: 21px
      text-align: left
      padding-left: 4px
      font-weight: 500
  .main-chatting
    width: 100%
    flex: 1
    overflow-y: auto
    padding: 16px 0
  .main-input
    width: 100%
    border-top: 1px solid #ddd
    padding: 8px 16px 16px
    max-height: 180px
    $max-height: 164px
    display: flex
    .main-input-contents
      width: 100%
      max-height: $max-height
      border: 1px solid #ddd
      border-radius: 4px
      display: flex
      .input-box
        flex: 1
        border-right: 1px solid #dddddd
        position: relative
        max-height: $max-height
        .i
          width: 16px
          height: 16px
          position: absolute
          left: 8px
          top: 8px
          color: #ccc
        textarea
          resize: none
          width: 100%
          height: 36px
          max-height: 150px
          padding-left: 32px
          padding-top: 8px
          border: none
          outline: none
          overflow-y: auto
          &::placeholder
            color: #999
      .content-box
        width: 80px
        height: 32px
        max-height: $max-height
.right-part
  width: 36px
  height: 100%
  border-left: 1px solid #ccc
  padding: 8px
  .icon
    cursor: pointer
    width: 20px
    height: 36px
    line-height: 36px
    color: #444
    font-size: 12px
    text-align: center
</style>
