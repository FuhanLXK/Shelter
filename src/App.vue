<template>
  <div id="app">
     <router-view />
  </div>
</template>

<script>
// import Header from './components/header.vue'
// import Home from './shelter/index/index'

export default {
  name: 'app',
  components: {
    // Header,
    // Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-color: #eceff1;
  margin: 0px;
}
html{
  margin:0;
  padding: 0;
  font-size: 12px;
}
</style>
