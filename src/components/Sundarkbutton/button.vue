<!--日/夜按钮-->
<script lang="ts" setup>
import { ref } from 'vue'

const btnClass = ref('')
const toggleClass = (e: any) => {
  btnClass.value = btnClass.value === 'active' ? '' : 'active'
}
</script>

<template>
  <div id="adc" :class="btnClass" @click="toggleClass"></div>
</template>

<style lang="scss" scoped>
#adc {
  transform: scale(0.3);
  //transform-origin: center center;
  position: relative;
  //margin: auto;
  width: 220px;
  height: 90px;
  //夜晚星空样式
  background: radial-gradient(circle at 18% 20px, #fff, #fff 6px, transparent 7px, transparent),
    radial-gradient(circle at 35% 45px, #fff, #fff 1px, transparent 2px, transparent),
    radial-gradient(circle at 10% 70px, #fff, #fff 2.5px, transparent 3.5px, transparent),
    radial-gradient(circle at 25% 15px, #fff, #fff 3px, transparent 4px, transparent),
    radial-gradient(circle at 15% 50px, #fff, #fff 1.5px, transparent 2.5px, transparent),
    radial-gradient(circle at 30% 75px, #fff, #fff 5px, transparent 6px, transparent),
    radial-gradient(circle at 5% 30px, #fff, #fff 0.5px, transparent 1.5px, transparent),
    radial-gradient(circle at 25% 60px, #fff, #fff 0.5px, transparent 1.5px, transparent),
    radial-gradient(circle at 7% 35px, #fff, #fff 0.5px, transparent 1.5px, transparent),
    linear-gradient(90deg, #2b303e, #2b303e 50%, #5a81b4 50%, #5a81b4);
  background-repeat: no-repeat;
  background-size: 200% 100%;
  background-position: 100% 0;
  border-radius: 90px;
  box-shadow: 0 -3px 4px #999, inset 0 3px 5px #333, 0 4px 4px #ffe, inset 0 -3px 5px #ddd;
  cursor: pointer;
  overflow: hidden;
  transition: 0.5s all;

  &::before,
  &::after {
    content: '';
    position: absolute;
    transition: 0.5s all;
  }

  //圆圈按钮大小
  &::before {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background: #e9cb50;
    inset: 7.5px;
    box-shadow: 0 0 5px #333, inset 2px 2px 3px #f8f4e4, inset -2px -2px 3px #665613;
    z-index: 1;
  }

  //左侧按钮样式
  &::after {
    width: 70px;
    height: 70px;
    inset: 10px;
    border-radius: 50%;
    box-shadow: 10px 60px 0 10px #fff, 65px 60px 0 5px #fff, 95px 70px 0 10px #fff,
      135px 45px 0 5px #fff, 170px 35px 0 10px #fff, 195px -5px 0 10px #fff,
      -10px 0 0 50px rgba(255, 255, 255, 0.2), 15px 0 0 50px rgba(255, 255, 255, 0.15),
      40px 0 0 50px rgba(255, 255, 255, 0.21), 10px 40px 0 10px #abc1d9, 70px 35px 0 10px #abc1d9,
      95px 40px 0 10px #abc1d9, 135px 20px 0 10px #abc1d9, 155px 15px 0 10px #abc1d9,
      190px -20px 0 10px #abc1d9;
  }
}

#adc:hover::before {
  filter: contrast(90%) brightness(110%);
  scale: 1.05;
}

#adc.active {
  transform: scale(0.3);
  //黑夜背景XY轴
  background-position: 0 0;

  &::before {
    //调整黑夜模式按钮位置
    translate: 130px;
    background: radial-gradient(
        //最上猫爪
        circle at 50% 20px,
        #939aa5,
        #939aa5 6.5px,
        transparent 7px,
        transparent
      ),
      //左下最大猫爪
      radial-gradient(circle at 35% 45px, #939aa5, #939aa5 11.5px, transparent 12px, transparent),
      //右下猫爪
      radial-gradient(circle at 72% 50px, #939aa5, #939aa5 8.5px, transparent 9px, transparent),
      //猫爪区背景色
      radial-gradient(#cbcdda, #cbcdda);
  }

  &::after {
    //黑夜猫爪下方阴影样式位置 白天状态为0覆盖
    transform: translate(130px);
    box-shadow: 30px 60px 0 10px transparent, 65px 60px 0 5px transparent,
      95px 70px 0 10px transparent, 135px 45px 0 5px transparent, 170px 35px 0 10px transparent,
      195px -5px 0 10px transparent, 10px 0 0 50px rgba(255, 255, 255, 0.2),
      -15px 0 0 50px rgba(255, 255, 255, 0.15), -40px 0 0 50px rgba(255, 255, 255, 0.21),
      10px 40px 0 10px transparent, 70px 35px 0 10px transparent, 95px 40px 0 10px transparent,
      135px 20px 0 10px transparent, 155px 15px 0 10px transparent, 190px -20px 0 10px transparent;
  }
}
</style>
