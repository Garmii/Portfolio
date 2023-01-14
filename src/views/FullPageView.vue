<script setup lang="ts">
import FullPage from "../components/FullPage.vue";
import Navbar from "../components/NavBar.vue";
</script>

<template>
  <div id="container"></div>
  <header id="nav">
    <Navbar />
  </header>
  <main id="body">
    <FullPage />
  </main>
</template>

<style scoped>
#container {
  position: relative;
}
#fullpage {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
}
#nav {
  position: absolute;
  z-index: 10;
}
</style>
