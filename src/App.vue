<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="nav1">
        <RouterLink to="/">
          <el-button>主页</el-button>
        </RouterLink>
        <RouterLink to="/about">
          <el-button>关于</el-button>
        </RouterLink>
      </nav>
      <nav class="nav2">
        <RouterLink to="/login">
          <el-button>登录</el-button>
        </RouterLink>
        <RouterLink to="/register">
          <el-button type="primary">注册</el-button>
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped="less">
.wrapper {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  .nav1 {
    display: flex;
    justify-content: space-between;
    width: 150px;
  }

  .nav2 {
    display: flex;
    justify-content: space-between;
    width: 150px;
  }
}
</style>
