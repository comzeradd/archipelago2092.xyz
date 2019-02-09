<template>
  <div class="network">
    <div class="terminal">
      $> ls<br>
      <div v-if="loading">...</div>
      <div v-for="file in files" :key="file">{{ file }}</div>
    </div>
  </div>
</template>

<script>
import Api from '../api';

export default {
  name: 'Network',

  data () {
    return {
      files: [],
      loading: true
    };
  },

  mounted () {
    const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    document.getElementById('app').style.height = height + 'px';
    window.scrollTo(0, 0);
  },

  created () {
    this.fetchFiles();

    setInterval(function () {
      this.fetchFiles();
    }.bind(this), 2000);
  },

  methods: {
    fetchFiles: function() {
      Api.fetchFiles().then(response => {
        this.loading = false;
        this.files = response.data;
        const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        document.getElementById('app').style.height = height + 'px';
        window.scrollTo(0, 0);
      // eslint-disable-next-line
      }, error => {
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.network {
  margin: 0 auto;
  margin-top: -20px;

  .terminal {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 40px;
    color: greenyellow;
    font-family: monospace;
    font-size: 0.9rem;
    min-height: 500px;
  }
}
</style>
