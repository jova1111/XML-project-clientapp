import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import MessageForm from './components/messages/MessageForm';
import Inbox from './components/messages/Inbox';
import LodgingPage from './components/lodging/LodgingPage';
import UserPage from './components/UserPage';


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
    },
    {
      path: '/register',
      component: RegisterForm
    },
    {
      path: '/lodging/:id',
      component: LodgingPage,
      props: true
    },
    {

      path: '/reservations',
      component: UserPage
    },
    {
      path: '/message/:reservationId',
      component: MessageForm
    },
    {
      path: '/inbox',
      component: Inbox
    }
  ]
})