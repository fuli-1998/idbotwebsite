<script setup>
import Header from '@/components/Header.vue'
import Home from '@/views/Home.vue'
import Data from '@/views/Data.vue'
import Social from '@/views/Social.vue'
import FAQ from '@/views/FAQ.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <!-- <Header></Header> -->
    <Home></Home>
    <Data></Data>
    <Social></Social>
    <FAQ></FAQ>
    <Footer></Footer>
  </div>
 
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
