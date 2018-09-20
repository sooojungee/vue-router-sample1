<template lang="pug">
  div
    .main-input-box
      .title Hi, Crawling Site^0^
      .flex-1
      input(v-model="siteUrl")
      .button(@click="searchTerm") crawling
      .button(v-on:click="active") search
      .flex-1
      .flex-1
    .text-box
      transition(name="slow-down")
      .sub-input-box(v-if="seen")
        .search-button(v-for="d in dataTypes" @click="selectData(d)"
        v-bind:class="{red : d.selected, gray : nonSelected}") {{d.type}}
        .reset-button.i.fas.fa-redo-alt(@click="reset")
      .content-box
        .content(v-for="p in posts")
          .title {{p.type}}
          .text {{p.children}}
    .tag-box
      transition(name="slow-down")
      .sub-input-box(v-if="seen")
        .search-button(v-for="t in tagTypes" @click="selectTag(t)"
        :class="{red : t.selected}") {{t.type}}
        .reset-button.i.fas.fa-redo-alt(@click="reset")
      .content-box
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
      tags: [],
      dataTypes: [],
      tagTypes: [],
      result: [],
      selectedTag: '',
      contentSeen: false,
      nonSelected: true
    };
  },
  methods: {
    active() {
      this.seen = !this.seen;
    },
    selectData(data) {
      for (let i = 0; i < this.dataTypes.length; i += 1) {
        this.dataTypes[i].selected = false;
      }
      data.selected = true;
      this.searchData(data.type);
    },
    selectTag(data) {
      for (let i = 0; i < this.tagTypes.length; i += 1) {
        this.tagTypes[i].selected = false;
      }
      data.selected = true;
      this.searchTag(data.type);
    },
    reset() {
      for (let i = 0; i < this.dataTypes.length; i += 1) {
        this.dataTypes[i].selected = false;
      }
      for (let i = 0; i < this.tagTypes.length; i += 1) {
        this.tagTypes[i].selected = false;
      }
      this.divideTag(this.result);
    },
    searchData(tagName) {
      this.posts = [];
      const postContent = [];
      for (let i = 0; i < this.result.length; i += 1) {
        if (tagName === this.result[i].type.toString()) {
          postContent.push(this.result[i]);
        }
      }
      this.posts = postContent;
    },
    searchTag(tagName) {
      this.tags = [];
      const tagContent = [];
      for (let i = 0; i < this.result.length; i += 1) {
        if (tagName === this.result[i].type.toString()) {
          tagContent.push(this.result[i]);
        }
      }
      this.tags = tagContent;
    },
    async searchTerm() {
      this.posts = [];
      this.tags = [];
      this.$loading.openProgress('로딩중입니다.');
      const baseURI = 'http://127.0.0.1:4000/crawling';
      const urlData = await this.$http.get(`${baseURI}/${encodeURIComponent(this.siteUrl)}`);
      if (urlData.data.type) {
        const html = urlData.data.data.split('<body')[1].split('</body')[0];
        this.result = controller.findText(html, this.siteUrl);
        this.divideTag(this.result);
        this.search(this.result);
      } else {
        this.posts = [{
          type: 'error',
          children: `${urlData.data}`
        }];
      }
      this.$loading.closeProgress();
    },
    divideTag(result) {
      const dataArr = [];
      const tagsArr = [];
      for (let i = 0; i < result.length; i += 1) {
        if (result[i].text) {
          if (result[i].children !== '' && result[i].children !== /\n/) {
            dataArr.push(result[i]);
          }
        } else {
          if (result[i].name === '') {
            result[i].name = result[i].src;
          }
          tagsArr.push(result[i]);
        }
      }
      this.posts = dataArr;
      this.tags = tagsArr;
      this.contentSeen = true;
    },
    search(result) {
      this.types = [];
      const dataTypeArr = [];
      const dataArr = [];
      const tagTypeArr = [];
      const tagArr = [];
      for (let i = 0; i < result.length; i += 1) {
        if (result[i].text) {
          if (dataArr.indexOf(result[i].type) === -1) {
            dataArr.push(result[i].type);
            const typeObject = ({
              selected: false,
              type: result[i].type
            });
            dataTypeArr.push(typeObject);
          }
        } else {
          if (tagArr.indexOf(result[i].type) === -1) {
            tagArr.push(result[i].type);
            const typeObject = ({
              selected: false,
              type: result[i].type
            });
            tagTypeArr.push(typeObject);
          }
        }
      }
      this.dataTypes = dataTypeArr;
      this.tagTypes = tagTypeArr;
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
  .title
    font-size: 22px
    line-height: 32px
    font-weight: 600
    text-align: left
    padding-left: 16px
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
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
  height: 30px
  border-bottom: 1px solid #ccc
  padding: 0 16px
  display: flex
  justify-content: center
  overflow-x: auto
  .search-button
    cursor: pointer
    color: #999
    font-size: 14px
    padding: 0 6px
    line-height: 30px
  .reset-button
    cursor: pointer
    border: 1px solid #999
    border-radius: 4px
    color: #999
    width: 16px
    height: 16px
    margin: 7px 6px
    font-size: 10px
    line-height: 15px
    &:hover
      color: white
      background: #999
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
  padding: 0 16px 16px
  overflow: hidden

.content-box
  width: 100%
  height: 100%
  overflow-y: auto

.content
  display: flex
  min-height: 26px
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
  height: calc(100vh - 430px)
  overflow-y: auto
  padding: 0 16px 16px

.red
  color: #ff4f52 !important
.gray
  color: #999
</style>
