<template>
  <div id="app">
    <navbar></navbar>
    <div class="router-view-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import home from './components/Home.vue';
import navbar from './components/navbar/Navbar.vue';
import router from './router.js';
import { getApiEndpoint } from './constants/index.js';

export default {
  name: 'app',
  router,
  components: {
    home,
    navbar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    console.log(getApiEndpoint());
  }
}
</script>

<style>
#app {
  margin: 10px;
}

.router-view-container {
  margin: 20px;
}
</style>
