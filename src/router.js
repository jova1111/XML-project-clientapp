import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import LoginForm from './components/LoginForm.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: LoginForm
    }
  ]
})