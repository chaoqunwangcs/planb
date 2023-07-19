<template>
    <div class="carousel-container">
      <el-carousel :interval="interval" arrow="always">
        <el-carousel-item v-for="(item, index) in images" :key="index">
          <img :src="item.url" :alt="item.alt" class="carousel-image" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true,
      },
      interval: {
        type: Number,
        default: 5000, // Default interval is 5 seconds
      },
    },
  };
  </script>
  
  <style>
  .carousel-container {
    width: 100%;
    max-width: 800px; /* Adjust the width as per your design */
    margin: 0 auto;
  }
  
  .carousel-image {
    width: 100%;
    height: auto;
  }
  </style>
  