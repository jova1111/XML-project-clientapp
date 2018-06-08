<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import home from './components/Home.vue';
import navbar from './components/Navbar.vue';
import router from './router.js';
import 'bulma/css/bulma.css';
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
}
</style>
