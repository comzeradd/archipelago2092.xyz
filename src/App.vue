<template>
  <div id="app">
    <transition name="fade" mode="out-in" :duration="300">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang=scss>
@import './assets/scss/app.scss';
</style>
