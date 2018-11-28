<template>
  <div class="narrative">
    <div class="text">
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',

  mounted () {
    const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    document.getElementById('app').style.height = height + 'px';
  }
};
</script>

<style lang="scss" scoped>
.narrative {
  margin: 0 auto;
  margin-top: -20px;

  .text {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 40px;
  }
}
</style>
