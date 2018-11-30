<template lang="pug">
  .div(v-on:scroll="onScroll" ref="scroll")
    .test-zone
      h1 Component test page
      button(@click="addItem") addItem
    .bricks-vue
      .item(v-for="card in cards")
        .image-area
          .background-image
          .image-wrap
        .text-area
          .title {{ card.title }}
          .desc {{ card.desc }}
      .loading-vue(v-if="seenLoading") loading...
</template>

<script>
import Bricks from 'bricks.js';

let bricksInstance;
export default {
  name: 'bricks',
  data() {
    return {
      cards: [
        {
          title: 'Hello',
          desc: 'Hello'
        },
        {
          title: 'Hello',
          desc: 'Hello'
        },
        {
          title: 'Hello',
          desc: 'Hello'
        },
        {
          title: 'Hello',
          desc: 'Hello'
        }
      ],
      bricksUpdating: false,
      seenLoading: false
    };
  },
  methods: {
    addItem() {
      this.cards.push({
        title: `CARD ${this.cards.length + 1}`,
        desc: `description ${this.cards.length + 1}`
      });
      this.bricksUpdating = true;
    },
    bricksDone() {
      this.bricksUpdating = false;
    },
    onScroll() {
      if (this.$refs.scroll.scrollHeight - window.innerHeight === this.$refs.scroll.scrollTop) {
        this.seenLoading = true;
        setTimeout(() => {
          for (let i = 0; i < 20; i += 1) {
            this.cards.push({
              title: `CARD ${this.cards.length + 1}`,
              desc: `description ${this.cards.length + 1}`
            });
          }
          this.seenLoading = false;
          this.bricksUpdating = true;
        }, 300);
      }
    }
  },
  updated() {
    // 데이터가 변경되고 돔에 영향을 준 후에 업데이티드 실행
    if (this.bricksUpdating) {
      bricksInstance.update();
    }
  },
  mounted() {
    bricksInstance = Bricks({
      container: '.bricks-vue',
      packed: 'data-packed',
      sizes: [
        { columns: 4, gutter: 10 }
      ]
    });
    bricksInstance.on('update', this.bricksDone);
    bricksInstance.on('pack', this.bricksDone);
    bricksInstance.pack(); // 아이템이 추가가 되었을 때 그 때 업데이트를 호출해주고 처음할 떄는 pack
  }
};
</script>


<style scoped lang="sass">
.div
  width: 100%
  height: 100vh
  overflow-y: auto

.test-zone
  text-align: center

.bricks-vue
  margin: auto
  width: 1200px

.item
  width: 240px
  border: 1px solid #eee
  overflow: hidden

  &:hover
    .image-wrap
      opacity: 0.2 !important
  &:nth-child(4n + 0)
    .image-area
      height: 230px
      .background-image
        background-image: url("https://static.vecteezy.com/system/resources/previews/000/198/059/non_2x/vector-vibrant-pink-abstract-watercolor-background-design.jpg")
  &:nth-child(4n + 1)
    .image-area
      height: 300px
      .background-image
        background-image: url("https://static.vecteezy.com/system/resources/previews/000/195/671/non_2x/vector-abstract-festa-junina-background-design.jpg")
  &:nth-child(4n + 2)
    .image-area
      height: 250px
      .background-image
        background-image: url("https://image.freepik.com/free-vector/colorful-background-with-abstract-style_23-2147819885.jpg")
  &:nth-child(4n + 3)
    .image-area
      height: 270px
      .background-image
        background-image: url("https://media.gettyimages.com/vectors/abstract-colorful-background-vector-id945902178")
  .image-area
    overflow: hidden
    transition: transform 0.26s
    position: relative
    &:hover
      .background-image
        transform: scale(1.2)
    .background-image
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      background-size: cover
      background-position: center
      transition: transform 0.26s
    .image-wrap
      position: absolute
      width: 100%
      height: 100%
      left: 0
      top: 0
      background: #111
      opacity: 0
  .text-area
    text-align: left
    padding: 16px
    .title
      color: #555
      font-weight: 800
      font-size: 20px
      line-height: 2
    .desc
      color: #777
      font-weight: 500
      font-size: 12px
      line-height: 1.35

.loading-vue
  position: fixed
  background: #fff
  bottom: 0
  left: 0
  width: 100%
  height: 50px
  font-size: 20px
  text-align: center
  line-height: 50px

h1
</style>
