<template>
  <div class="carousel">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="getAssetURL(image)" />
      </van-swipe-item>
    </van-swipe>

  </div>
</template>

<script setup>
import images from '@/assets/data/carousel';
import { getAssetURL } from "@/utils/load_assets";
</script>

<style lang="less" scoped>
.carousel {
  img {
    height: 200px;
    width: 100%;
  }
}
</style>