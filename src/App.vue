<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link :to="{ name: 'about' }" class="nav-link">
            <img src="./assets/img/link.svg" alt="about" @mouseover="mouseover" @mouseout="mouseout">
            <span v-if="about">about</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'network' }" class="nav-link">
            <img src="./assets/img/link.svg" alt="network" @mouseover="mouseover" @mouseout="mouseout">
            <span v-if="network">network</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'ipfs' }" class="nav-link">
            <img src="./assets/img/link.svg" alt="ipfs" @mouseover="mouseover" @mouseout="mouseout">
            <span v-if="ipfs">ipfs</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <video autoplay loop muted poster="./assets/img/archipelago.jpg" id="bgvid" class="hidden-xs">
      <source src="./assets/video/archipelago-dark.mp4" type="video/mp4">
    </video>

    <div class="container pt-3">
      <div class="row">
        <div class="col-md-10 offset-md-2">
          <transition name="fade" mode="out-in" :duration="300">
            <router-view/>
          </transition>
        </div>
      </div>
    </div>

    <a href="/#/">
      <img src="./assets/img/archipelago.svg" alt="archipelago" class="logo">
    </a>
  </div>
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      about: false,
      network: false,
      narrative: false,
      ipfs: false
    };
  },

  methods: {
    mouseover: function (event) {
      this[event.target.alt] = true;
    },
    mouseout: function (event) {
      this[event.target.alt] = false;
    }
  }
};
</script>

<style lang=scss>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import './assets/scss/app.scss';
</style>
