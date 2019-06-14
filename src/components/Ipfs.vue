<template>
  <div class="ipfs">
    <div class="terminal">
      $> ipfs get QmUZK7XRo5863Rw9ASbGU8HWbpBM6Tg_______________<br>
      $> cd QmUZK7XRo5863Rw9ASbGU8HWbpBM6Tg_______________<br>
      $> ls
      <div v-if="loading">...</div>
      <div>{{ files }}</div>
    </div>
  </div>
</template>

<script>
import Api from '../api';

export default {
  name: 'Ipfs',

  data () {
    return {
      files: [],
      loading: true
    };
  },

  beforeMount () {
    /*const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    document.getElementById('app').style.height = height + 'px';
    window.scrollTo(0, 0);*/
  },

  created () {
    this.fetchIpfs();

    setInterval(function () {
      this.fetchIpfs();
    }.bind(this), 2000);
  },

  methods: {
    fetchIpfs: function() {
      Api.fetchIpfs().then(response => {
        this.loading = false;
        this.files = response.data;
      // eslint-disable-next-line
      }, error => {
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.ipfs {
  margin: 0 auto;
  margin-top: -20px;
}
</style>
