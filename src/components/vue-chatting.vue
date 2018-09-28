<template lang="pug">
  .div
    .main-content(v-if="main")
      .image-zone
        .image SL
      .chat-zone
        .chat-profile
          .profile-name {{ options.name }}
          .profile-owner-content
            .owner-text.admin Admin
            .owner-text.owner Owner
          .profile-date {{ time }}
          .i.fas.fa-cog.right-cog
        .chat-text {{ options.message }}
    .main-content(v-else)
      .image-zone
        .i.fas.fa-cog
      .chat-zone
        .chat-text {{ options.message }}

</template>

<script>
export default {
  name: 'vue-chatting',
  props: {
    main: {
      type: Boolean,
      default: true
    },
    options: {
      name: {
        type: String,
        default: ''
      },
      message: {
        type: String,
        default: ''
      },
      date: {
        type: String,
        default: ''
      }
    }
  },
  computed: {
    time() {
      const date = new Date(this.options.date * 1);
      return `${date.getHours() > 12 ? '오후' : '오전'} ${date.getHours() % 12}:${date.getMinutes()}`;
    }
  }

};
</script>
<style scoped lang="sass">

.div
  width: 100%
  height: auto

.flex-1
  flex: 1

.main-content
  width: 100%
  display: flex
  padding: 8px 16px
  position: relative
  height: auto
  &:hover
    background: #efefef
    .fa-cog
      color: #ccc !important
  .image-zone
    width: 34px
    height: 100%
    .image
      color: white
      text-align: center
      font-size: 21px
      border-radius: 4px
      line-height: 34px
      max-height: 40px
      background: #FDB316
      font-weight: 600
    .i.fas.fa-cog
      width: 100%
      color: white
      font-size: 10px
      text-align: end
      line-height: 21px
  .chat-zone
    width: calc(100% - 35px)
    height: 100%
    .chat-profile
      width: 100%
      height: 14px
      display: flex
      .profile-name
        padding-left: 8px
        color: #333
        font-size: 13px
        font-weight: 500
        flex-grow: 0
      .profile-owner-content
        padding: 0 2px
        display: flex
        /*width: 100px*/
        .owner-text
          font-weight: 300
          text-align: center
          margin: 0 2px
          font-size: 11px
          width: 40px
          background: #aaa
          color: #fdfdfd
          border-radius: 2px
      .profile-date
        /*width: 100px*/
        line-height: 14px
        color: #6666
        font-size: 8px
        margin: 0 4px 0 0
      .i.fas.fa-cog
        /*width: 30px*/
        font-size: 10px
        line-height: 14px
        color: white
    .chat-text
      padding: 4px 8px 0 8px
      color: #555
      font-size: 12px
      line-height: 18px
      transition: height 0.3s
      overflow-x: hidden
      white-space: pre-line

h1

</style>
