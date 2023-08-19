<template>
  <v-app>
    <Navbar class="index"/>
    <Dashboard/>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Dashboard from '../components/Dashboard.vue';
  export default {
    name: 'HomeView',
    components: {
     Navbar,
     Footer,
     Dashboard
    },
  }
</script>

<style scoped>
.index{
  z-index: 9999;
}
</style>