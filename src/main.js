import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css';
import axios from 'axios';

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  const originalRequest = error.config;

  if (error.response.status === 401 && !originalRequest._retry) {

    originalRequest._retry = true;

    localStorage.removeItem('token');
    if(!window.location.href.includes('login')) {
      window.location.reload();
    }
    
  }

  return Promise.reject(error);
});

axios.defaults.headers.Accept = 'application/json';

new Vue({
  el: '#app',
  render: h => h(App)
})
