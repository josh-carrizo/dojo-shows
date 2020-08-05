<template>
  <div id="app">
    <img class="imagen" alt="Vue logo" src="https://i.pinimg.com/originals/04/5d/c1/045dc1a51ca8db75d5d6116e214a3a32.gif">
    <HelloWorld msg="DoJOSHows"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
