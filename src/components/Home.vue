<template>
  <div class="home">
    <video autoplay loop muted poster="../assets/img/archipelago.jpg" id="bgvid" class="hidden-xs">
      <source src="../assets/video/archipelago.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
video {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
}
</style>
