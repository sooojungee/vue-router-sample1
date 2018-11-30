<template lang="pug">
  #item-template
    li
      div(:class="{bold: isFolder}"
      @click="toggle"
      @dblclick="changeType") {{ model.name }}
      span(v-if="isFolder") [{{open ? '-' : '+'}}]
    ul(v-show="open" v-if="isFolder")
      tree-component(v-for="model in model.children" :model = "model")
      li(class="add" @click="addChild")
</template>

<script>
import Vue from 'vue';

export default {
  name: 'tree-component',
  props: {
    model: Object
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length;
    }
  },
  methods: {
    toggle() {
      if (this.isFolder) this.open = !this.open;
    },
    changeType() {
      if (!this.isFolder) {
        Vue.set(this.model, 'children', []);
        this.addChild();
        this.open = true;
      }
    },
    addChild() {
      this.model.children.push({
        name: 'new stuff'
      });
    }
  }
};
</script>

<style scoped lang="sass">
body
  color: #444
.item
  cursor: pointer
.bold
  font-weight: bold
ul
  padding-left: 1em
  line-height: 1.5em
  list-style-type: dot
h1
</style>
