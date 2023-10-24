<template>
  <div class="title">
    <h1 class="artboard">WELCOME</h1>
    <h1 class="text">{{ signature }}<span class="typed-cursor">|</span></h1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const signature = ref<string>('')
let timer = 0

const appear = (text: string) => {
  signature.value = ''
  clearTimeout(timer)

  let speed = 150 //设置定时的速度 越来越快
  let count = 1

  function changeContent() {
    signature.value = text.substring(0, count) //截取字符串
    count++

    if (count != text.length + 1) {
      speed -= 1
      if (speed < 5) {
        speed = 5
      }
      timer = setTimeout(changeContent, speed) as any
    }
  }

  changeContent()
}
onMounted(() => {
  appear('欢迎来到我的博客🎉')
})
</script>

<style lang="scss" scoped>
.title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-60%);
  color: #ffffff;

  .artboard {
    font-family: 'Fredericka the Great', Mulish, -apple-system, 'PingFang SC', 'Microsoft YaHei',
      sans-serif;
    font-size: 48px;
    line-height: 2;
    animation: showup 2s linear forwards;
    letter-spacing: -50px;
    text-align: center;
  }

  .text {
    font-size: 24px;
    text-align: center;
  }

  .typed-cursor {
    opacity: 1;
    animation: blink 0.7s infinite;
  }

  @keyframes showup {
    0% {
      filter: blur(10px);
    }
    100% {
      letter-spacing: 10px;
      filter: blur(0.5px);
    }
  }
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
