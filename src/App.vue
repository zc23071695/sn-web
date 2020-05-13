<template>
  <div id="app">
    <div id="nav">
      <h1>
        Good Job
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      name: 'xiaoming',
    }
  },
  methods: {
    fn1(user) {
      function Range(x) {
        this.x = x
      }
      Range.prototype = {
        includes: function() {
          return true
        },
      }
      Object.defineProperty(Object.prototype, 'num', {
        value: 132,
        enumerable: false,
      })

      var r = new Range(12)
      console.log(Object.keys({ name: 'cc' }))
      let obj = { name: 'cc' }
      for (let i in obj) {
        console.log(i + 'ww')
      }
    },
  },
  mounted() {
    this.fn1()
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
