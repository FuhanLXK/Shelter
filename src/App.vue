<template>
  <div id="app">
     <Header msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Header from './components/header.vue'

export default {
  name: 'app',
  components: {
    Header
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
