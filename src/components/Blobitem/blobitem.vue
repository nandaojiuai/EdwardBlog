<script lang="ts" setup>
import People from '@/components/Avatarpeople/people.vue'
</script>

<template>
  <div class="blob-center">
    <div class="right-box">
      <div class="avatar">
        <people></people>
      </div>
      <div class="avatar-item">
        <div
          style="
            text-align: center;
            margin-top: 20px;
            font-size: 24px;
            font-weight: 400;
            color: #676767;
          "
        >
          Edward
        </div>
        <div style="text-align: center; margin-top: 10px; margin-bottom: 10px; color: #888888">
          BUG退散┗( T﹏T )┛
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blob-center {
  width: 1400px;
  height: 100vh;
  margin: 0 auto;

  .right-box {
    width: 280px;
    border: 1px solid #f5f5f5;

    .avatar {
    }
  }
}
</style>
