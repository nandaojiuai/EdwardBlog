<template>
  <div style="width: 100%; height: 100vh">
    <div style="position: relative; top: 0px; height: 0; z-index: 999">
      <Header></Header>
    </div>
    <MyImage></MyImage>
    <MyTitle></MyTitle>
    <MyWaves></MyWaves>
    <el-icon :color="'#2b303e'" :size="36" class="arrow-down" @click="arrowDown">
      <ArrowDown />
    </el-icon>
    <uppeople></uppeople>
    <Blobitem></Blobitem>
  </div>
</template>

<script lang="ts" setup>
import utils from '@/utils/dark'
import { onMounted, reactive } from 'vue'
import MyImage from '@/components/Images/index.vue'
import MyTitle from '@/components/Title/index.vue'
import MyWaves from '@/components/Waves/index.vue'
import Header from '@/components/Header/index.vue'
import Uppeople from '@/components/Uppeople/uppeople.vue'
import Blobitem from '@/components/Blobitem/blobitem.vue'

const state = reactive({})
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
