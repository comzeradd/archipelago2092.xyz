<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  name: 'Home',

  mounted () {
    const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    document.getElementById('app').style.height = height + 'px';
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';
@import '../assets/scss/mixins';
</style>
