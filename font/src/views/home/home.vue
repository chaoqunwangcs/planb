<template>
  <div class="home">
    <home-nav-bar />
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import HomeNavBar from "./cpns/home-nav-bar.vue"

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHomeData()
</script>

<style lang="less" scoped>
</style>