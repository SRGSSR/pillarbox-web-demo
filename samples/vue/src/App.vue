<script setup>
import Pillarbox from './components/Pillarbox.vue';
</script>

<template>
  <header>
    <div class="logo-container">
      <img src="/pb.webp" class="logo" alt="Pillarbox logo"/>
      <img src="/vue.svg" class="logo ts" alt="TypeScript logo"/>
    </div>
    <h1>Pillarbox + Vue</h1>
  </header>
  <div class="player-container">
    <Pillarbox src="urn:srf:video:c89ed8ad-d949-4ef0-81e5-3cf16dc11c25"/>
  </div>
</template>
