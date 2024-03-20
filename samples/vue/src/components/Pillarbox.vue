<script setup>
import { onMounted } from 'vue';
import pillarbox from '@srgssr/pillarbox-web';
import '@srgssr/pillarbox-web/dist/pillarbox.min.css';

// Define props
const props = defineProps({
  src: String,
  type: {
    type: String,
    default: 'srgssr/urn',
  },
});

onMounted(() => {
  const player = pillarbox('main-player');
  player.src({ src: props.src, type: props.type });
});
</script>

<template>
  <video id="main-player" class="video-js pillarbox-js" controls crossOrigin="anonymous"></video>
</template>

<style scoped>
@import "@srgssr/pillarbox-web";
</style>
