<script setup>
import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<script>


import Home from './components/Home.vue'
import CollapsibleItem from './components/CollapsibleItem.vue'
import ContactUs from './components/ContactUs.vue'
import RequestIntegration from './components/RequestIntegration.vue'
import IntegrationInstructions from './components/IntegrationInstructions.vue'


const routes = {
  '/': Home,
  '/contact-us': ContactUs,
  '/request-integration': RequestIntegration,
  '/request-integration/instructions': IntegrationInstructions
}


export default {
  components: { Footer },
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}

</script>

<template>
  <header>
    <Header />
    <NavBar />
  
  </header>

  <main>
    <component :is="currentView" />
  </main>

    <Footer />
</template>

<style src=./assets/css/main.css></style>
<style src=./assets/css/reset.css></style>
<style src=./assets/css/typography.css></style>

