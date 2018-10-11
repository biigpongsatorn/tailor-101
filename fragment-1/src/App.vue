<template>
  <div id="fragment-1">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your fragment-1 App"/>
    fragment 1
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
import 'pubsub-js'

export default {
  name: 'fragment-1',
  data () {
    return {
      myData: null,
      payload: {}
    }
  },
  async created () {
    // this.myData = await axios.get('https://api.sellsuki.com/')
    PubSub.subscribe('oms.chat', (channel, msg) => {
      console.log('published from = ', channel)
      console.log('message is = ', msg)
    })
  },
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
