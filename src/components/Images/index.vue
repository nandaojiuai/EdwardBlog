<template>
  <div class="imgs">
    <ul>
      <li
        v-for="(item, index) in state.imageList"
        :key="index"
        ref="items"
        :style="{
          'background-image': `url(${item})`,
        }"
        class="item"
      ></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch, ref } from 'vue'

const state = reactive({
  imageList: [
    '/src/assets/bg0.jpg',
    '/src/assets/bg1.png',
    '/src/assets/bg2.png',
    '/src/assets/bg3.jpg',
    '/src/assets/bcg3.png',
  ],
})
const items = ref()
watch(items, () => {
  items.value.forEach((element: any, index: number) => {
    element.style.animationDuration = `${5 * items.value.length}s`
    element.style.animationDelay = `${index * 5}s`
  })
})
</script>

<style lang="scss" scoped>
.imgs {
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 0;
  overflow: hidden;

  .item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: no-repeat 50% 50% / cover;
    opacity: 0;
    animation-name: imageAnimation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.2); */
    transition: all 0.2s ease-in-out 0s;
  }
}

@keyframes imageAnimation {
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }

  2% {
    opacity: 1;
  }

  8% {
    opacity: 1;
    transform: scale(1.05);
    animation-timing-function: ease-out;
  }

  17% {
    opacity: 1;
    transform: scale(1.1);
  }

  25% {
    opacity: 0;
    transform: scale(1.1);
  }

  100% {
    opacity: 0;
  }
}
</style>
