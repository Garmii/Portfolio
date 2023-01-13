<script setup lang="ts">
import FullPage from "../components/FullPage.vue";
import Navbar from "../components/NavBar.vue";
</script>

<template>
  <header id="nav">
    <Navbar />
  </header>
  <main id="body">
    <FullPage />
  </main>
</template>

<style scoped>
nav {
  overflow: auto;
}
</style>
