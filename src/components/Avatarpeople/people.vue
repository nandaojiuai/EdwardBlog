<!--人像组件-->
<script lang="ts" setup>
import cartoonFigure from '@/assets/img/cartoonFigure.png'
</script>

<template>
  <div style="width: 100%">
    <div class="container">
      <img :src="cartoonFigure" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  //height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    $s: 190px;
    /* 图片大小 */
    $b: 5px;
    /* 边框厚度 */
    $c: rgba(0, 0, 0, 0);
    /* 边框颜色 */
    --f: 1;
    /* 初始倍数 */

    $g: 50% / calc(100% / var(--f)) 100% no-repeat content-box;
    //放大倍率
    $o: calc((1 / var(--f) - 1) * $s / 2 - $b);

    width: $s;
    aspect-ratio: 1;
    padding-top: calc($s / 5);
    cursor: pointer;
    border-radius: 0 0 calc($s / 2) calc($s / 2);
    outline: $b solid $c;
    outline-offset: $o;
    //生成一个内部黄色填充的红圈
    background: radial-gradient(
        circle closest-side,
        #ecd078 calc(99% - $b),
        $c calc(100% - $b) 99%,
        #0000
      )
      $g;
    -webkit-mask: linear-gradient(#000 0 0) no-repeat 50% calc(-1 * $o) /
        calc(100% / var(--f) - 2 * $b) 50%,
      radial-gradient(circle closest-side, #000 99%, #0000) $g;
    transform: scale(var(--f));
    transition: 0.5s;

    &:hover {
      --f: 1.2;
      /* hover scale */
    }
  }
}
</style>
