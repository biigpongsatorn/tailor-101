<template>
  <div id="fragment-1">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your fragment-1 App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'fragment-1',
  components: {
    HelloWorld
  }
}
</script>

<style>
#fragment-1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
