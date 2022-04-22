
<script>
import Home from './Home.vue'
import ContactUs from './ContactUs.vue'

export default {
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
  <nav role="navigation">
    <div class="container">
        <ul>
          <li ><a href="#/" class= "($route.name == 'Home' ? 'active' : 'inactive'">Home</a></li>
          <li><a href="#/contact-us" class= "($route.name == 'ContactUs' ? 'active' : 'inactive'">Contact Us</a></li>
        </ul>
      </div>
  </nav>
</template>


<style scoped>
/* Main Navigation */
nav {
    height: 40px;
    background-color: #38598A;
}
nav .container {
    max-width: 1320px;
    min-width: 1100px;
    margin: 0 auto;
    padding: 0 60px;
}
nav .container ul {
  padding: 0;
  
}
nav .container ul li {
    
    color: #FFFFFF;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    vertical-align: top;
    font-weight: bold;
}
nav .container ul li .active {
    background-color: #496DA2;
}
nav .container ul li:first-child {
    margin-left: -20px;
    
}
nav .container ul li:hover {
    cursor: pointer;
    background-color: #496DA2;
}
nav .container ul li a {
    display: block;
    font-size: 1rem;
    line-height: 40px;
    color: #FFFFFF;
    text-decoration: none;
    height: 40px;
    padding: 0 20px;
}
nav .container ul li a:focus {
    background-color: #496DA2;
}
</style>
