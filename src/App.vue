<template>
  <div id="app">
    <section class="hero is-light">
    <Navbar/>
    <router-view/>
    <Footer/>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'rick-morty-pwa',
  components: { Navbar, Footer },
};
</script>

<style>
#app {
  text-align: center;
  color: #18192B;
}
</style>
