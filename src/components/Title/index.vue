<template>
  <div class="title">
    <h1 class="artboard">闭门即是深山，读书随处净土。</h1>
  </div>
</template>

<script lang="ts" setup></script>

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
    font-size: 65px;
    line-height: 1.2;
    animation: showup 2s linear forwards;
    letter-spacing: -50px;
    text-align: center;
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
