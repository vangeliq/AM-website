<script setup>
import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'
import TheWelcome from './components/TheWelcome.vue'
// import Footer from './components/Footer.vue'
</script>

<script>

import Footer from './components/Footer.vue'
import CollapsibleItem from './components/CollapsibleItem.vue'

import Home from './components/Home.vue'
// import CollapsibleItem from './components/CollapsibleItem.vue'
import About from './components/About.vue'
import ContactUs from './components/ContactUs.vue'
import RequestIntegration from './components/RequestIntegration.vue'
import IntegrationInstructions from './components/IntegrationInstructions.vue'


const routes = {
  '/': Home,
  '/about': About,
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
  <!-- <v-app> -->

  <header>
    <Header />
    <NavBar />
  <!-- <nav role="navigation">
    <div class="container">
        <ul>
          <li :class= "active"><a href="#/">Home</a></li>
          <li :class= "inactive"><a href="#/about">About</a></li>
        </ul>
      </div>
  </nav> -->
  
  </header>

  <main>
    <!-- <CollapsibleItem /> -->
    <component :is="currentView" />
    <!-- <router-view></router-view> -->
    <!-- <TheWelcome /> -->
  </main>

  <!-- <footer> -->
    <Footer />
  <!-- </footer> -->
  <!-- </v-app> -->

</template>

<style src=./assets/css/main.css></style>
<style src=./assets/css/reset.css></style>
<style src=./assets/css/typography.css></style>

