<template>
  <div class="nav-bar">
    <div class="title">梦想的田野</div>
  </div>
  <carousel/>
</template>

<script setup>
import Carousel from "../cpns/carousel.vue";
</script>

<style lang="less" scoped>
  .nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    border-bottom: 1px solid #f2f2f2;

    .title {
      color: var(--primary-color);
      font-size: 16px;
      font-weight: 600;
    }
  }
</style>