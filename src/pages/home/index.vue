<template>
  <div style="width: 100%; height: 100vh">
    <!--    <MyHeader></MyHeader>-->
    <Sunbutton @click="change"></Sunbutton>
    <!--    <MyImage></MyImage>-->
    <MyTitle></MyTitle>
    <MyWaves></MyWaves>
    <el-icon :color="'#b7b8c4'" :size="36" class="arrow-down" @click="arrowDown">
      <ArrowDown />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import utils from '@/utils/dark'
import { onMounted, reactive } from 'vue'
// import MyHeader from "@/components/Header/index.vue"
import MyImage from '@/components/Images/index.vue'
import MyTitle from '@/components/Title/index.vue'
import MyWaves from '@/components/Waves/index.vue'
import Sunbutton from '@/components/Sundarkbutton/button.vue'

const state = reactive({})
const change = () => {
  console.log('323232')
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
