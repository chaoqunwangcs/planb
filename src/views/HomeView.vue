<template>
  <div>
    <ImageCarousel :images="carouselImages" :interval="5000" />
  </div>
</template>

<script>
import ImageCarousel from '@/components/home/ImageCarousel.vue';

export default {
  components: {
    ImageCarousel,
  },
  data() {
    return {
      carouselImages: [
        { url: '1.jpg', alt: 'Image 1' },
        { url: '2.jpg', alt: 'Image 2' },
        { url: '3.jpg', alt: 'Image 3' },
        // Add more image URLs and alt text as needed
      ],
    };
  },
};
</script>
