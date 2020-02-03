<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>


<style>

</style>
<script>
  import NavBar from "./components/NavBar";
  export default {
    components: {
      NavBar
        },
    
  }
</script>