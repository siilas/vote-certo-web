<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header></Header>
  <main>
    <RouterView />
  </main>
  <Footer></Footer>
</template>

<style>

* {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
}

main {
  flex-grow: 1;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

html, body {
  width: 100%;
  height: 100%;
}

header, main, footer {
  flex-shrink: 0;
}

</style>
