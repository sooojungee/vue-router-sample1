<template lang="pug">
  div
    .main-input-box
      .flex-1
      input(v-model="siteUrl")
      .button(@click="searchTerm") crawling
      .button(v-on:click="active") search
      .flex-1
    transition(name="slow-down")
      .sub-input-box(v-if="seen")
        input(placeholder="검색어 입력")
    .text-box
      .content(v-for="p in posts")
        .title {{p.type}}
        .text {{p.children}}
    .tag-box
      .content(v-for="t in tags")
        .title {{t.type}}
        a.text(v-bind:href= "t.src") {{t.name}}

</template>

<script>

import * as controller from './crawlingControl';

export default {
  name: 'crawling',
  data() {
    return {
      seen: false,
      siteUrl: '',
      posts: [],
      tags: []
    };
  },
  methods: {
    active() {
      this.seen = !this.seen;
    },
    async searchTerm() {
      const baseURI = 'http://127.0.0.1:4000/crawling';
      const urlData = await this.$http.get(`${baseURI}/${encodeURIComponent(this.siteUrl)}`);
      if (urlData.data.type) {
        console.log('t', urlData.data);
        const html = urlData.data.data.split('<body')[1].split('</body')[0];
        this.divideTag(controller.findText(html, this.siteUrl));
      } else {
        console.log('f', urlData.data);
        this.posts = [{
          type: 'error',
          children: `${urlData.data}`
        }];
      }
    },
    divideTag(result) {
      const data = [];
      const tags = [];
      for (let i = 0; i < result.length; i += 1) {
        if (result[i].text) {
          data.push(result[i]);
        } else {
          tags.push(result[i]);
        }
      }
      this.posts = data;
      this.tags = tags;
    }
  }
};
</script>

<style scoped lang="sass">

.slow-down-enter-active, .slow-down-leave-active
  transition: opacity .3s ease

.slow-down-enter, .slow-down-leave-to
  opacity: 0

.flex-1
  flex: 1

.main-input-box
  width: 100%
  height: 80px
  display: flex
  border-bottom: 1px solid #ccc
  padding: 24px
  input
    width: 300px
    height: 32px
    border: none
    outline: none
    border-bottom: 1px solid #ccc
    margin-right: 16px
    font-size: 16px
    padding: 0 4px
  .button
    width: 100px
    border: 1px solid #ccc
    cursor: pointer
    line-height: 30px
    margin-right: 16px
    &:hover
      color: white
      background: #ccc

.sub-input-box
  height: 50px
  border-bottom: 1px solid #ccc
  padding: 16px
  input
    width: 200px
    height: 18px
    outline: none
    border: none
    border-bottom: 1px solid #ccc
    font-size: 14px
    padding: 0 4px

.text-box
  width: 100%
  height: 360px
  border: 4px solid #fff
  border-bottom: 1px solid #ccc
  padding: 16px
  overflow-y: auto

.content
  display: flex
  min-height: 40px
  padding: 16px 8px
  .title
    color: #0d47a1
    min-width: 80px
    text-align: left
  .text
    flex: 1
    text-align: left
    padding: 0 8px
    color: #333

.tag-box
  width: 100%
  border: 4px solid #fff
  height: calc(100vh - 490px)
  overflow-y: auto
  padding: 16px

</style>
