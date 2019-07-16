<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/foo">Foo</router-link>
    <router-link to="/bar">Bar</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}

</style>
