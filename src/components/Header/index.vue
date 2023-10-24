<template>
  <nav>
    <ul>
      <!--      <div style="position: relative; display: flex; align-items: center">-->
      <li><a href="#">首页</a></li>
      <li><a href="#">小记</a></li>
      <li><a href="#">介绍</a></li>
      <li><a href="#">关于</a></li>
      <li><a href="#">留言板</a></li>
      <div class="slider"></div>
      <!--      </div>-->
      <Sunbutton @click="change"></Sunbutton>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import Sunbutton from '@/components/Sundarkbutton/button.vue'
import utils from '@/utils/dark'

const change = () => {
  utils.toggleDark()
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 66px;
  //height: 100vh;

  ul {
    //width: 100%;
    //margin-left: 200px;
    position: relative;
    display: flex;
    //justify-content: space-between;
    align-items: center;
  }

  ul li {
    list-style: none;
    width: 120px;
    line-height: 40px;
    text-align: center;
  }

  ul li a {
    color: #ffffff;
    text-decoration: none;
  }

  .slider {
    width: 100px;
    height: 40px;
    background-color: #799abb;
    border-radius: 4px;
    position: absolute;
    left: 10px;
    //bottom: 0;
    z-index: -1;
    transition: all ease 0.4s;
    animation: 2s ease-in-out waves infinite;
  }

  li:nth-child(1):hover ~ .slider {
    left: 10px;
  }

  li:nth-child(2):hover ~ .slider {
    left: 128px;
  }

  li:nth-child(3):hover ~ .slider {
    left: 248px;
  }

  li:nth-child(4):hover ~ .slider {
    left: 368px;
  }

  li:nth-child(5):hover ~ .slider {
    left: 488px;
  }
}

@keyframes waves {
  from {
    clip-path: polygon(
      0% 17%,
      9% 10%,
      18% 4%,
      30% 0%,
      43% 1%,
      49% 4%,
      57% 7%,
      66% 10%,
      78% 11%,
      89% 11%,
      96% 9%,
      100% 7%,
      100% 100%,
      0% 100%
    );
  }
  50% {
    clip-path: polygon(
      0% 4%,
      6% 9%,
      13% 13%,
      23% 15%,
      31% 16%,
      42% 15%,
      49% 13%,
      61% 10%,
      71% 5%,
      81% 3%,
      90% 2%,
      100% 5%,
      100% 100%,
      0% 100%
    );
  }
  to {
    clip-path: polygon(
      0% 17%,
      9% 10%,
      18% 4%,
      30% 0%,
      43% 1%,
      49% 4%,
      57% 7%,
      66% 10%,
      78% 11%,
      89% 11%,
      96% 9%,
      100% 7%,
      100% 100%,
      0% 100%
    );
  }
}
</style>
