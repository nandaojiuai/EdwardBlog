<template>
  <div style="width: 100%; height: 100vh">
    <div style="position: relative; top: 0px; height: 0; z-index: 999">
      <header>
        <nav>
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">小记</a></li>
            <li><a href="#">介绍</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">留言板</a></li>
            <div class="slider"></div>
            <Sunbutton @click="change"></Sunbutton>
          </ul>
        </nav>
      </header>
    </div>
    <MyImage></MyImage>
    <MyTitle></MyTitle>
    <MyWaves></MyWaves>
    <el-icon :color="'#2b303e'" :size="36" class="arrow-down" @click="arrowDown">
      <ArrowDown />
    </el-icon>
    <uppeople></uppeople>
    <!--    <div style="height: 100vh">这是下方的内容测试暗黑和日间模式</div>-->
  </div>
</template>

<script lang="ts" setup>
import utils from '@/utils/dark'
import { onMounted, reactive } from 'vue'
import MyImage from '@/components/Images/index.vue'
import MyTitle from '@/components/Title/index.vue'
import MyWaves from '@/components/Waves/index.vue'
import Sunbutton from '@/components/Sundarkbutton/button.vue'
import Uppeople from '@/components/Uppeople/uppeople.vue'

const state = reactive({})
const change = () => {
  utils.toggleDark()
}
const arrowDown = () => {
  window.scrollTo({
    behavior: 'smooth',
    top: document.documentElement.clientHeight,
  })
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 66px;
  //height: 100vh;
}

ul {
  position: relative;
  display: flex;
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
  background-color: #8786c9;
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

app {
  background: skyblue;
}

.arrow-down {
  //top: -100px;
  //left: 50%;
  position: absolute;
  bottom: 70px;
  left: 49%;
  -webkit-animation: arrow-shake 1.5s ease-out infinite;
  animation: arrow-shake 1.5s ease-out infinite;
  cursor: pointer;
  z-index: 8;
}

@keyframes arrow-shake {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  30% {
    opacity: 0.5;
    transform: translateY(25px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
