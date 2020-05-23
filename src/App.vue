<template>
  <div id="app">
    <div id="nav">
      <h1>Good Job</h1>
      <div class="inner">demo</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      name: "xiaoming"
    };
  },
  methods: {
    fn(n) {
      if (n == 1) {
        return n;
      } else {
        return n * this.fn(n - 1);
      }
    }
  },
  mounted() {
    this.fn(1);
    console.log(this.fn(5));
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .inner{
    color: red;
  }
}
</style>
