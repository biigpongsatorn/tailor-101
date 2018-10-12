<template>
  <div id="fragment-2">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Fragment-2 App"/> -->
    fragment 2
    <button @click="sendMessage">send message</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import 'pubsub-js'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
    sendMessage () {
      console.log('send message')
      PubSub.publish('oms.chat.msg', 'hello world')
    }
  }
 }
</script>

<style>
#fragment-2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
