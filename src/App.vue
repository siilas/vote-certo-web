<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>

  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<style>

* {
  padding: 0;
  margin: 0;
}

</style>
