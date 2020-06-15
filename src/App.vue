<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      age: "xiaoming"
    };
  },
  methods: {
    fn(n) {
      if (n == 1) {
        return n;
      } else {
        return n * this.fn(n - 1);
      }
    },
    fn1() {
      
    }
  },
  mounted() {
    this.fn1();
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
  .inner {
    color: red;
  }
}

</style>
