import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import MessageForm from './components/messages/MessageForm';
import Inbox from './components/messages/Inbox';
import CommentForm from './components/comments/CommentForm';
import LodgingPage from './components/lodging/LodgingPage';
import UserPage from './components/UserPage';
import authService from './services/auth-service';
import { lockedPagesForGuest } from './constants/index';
import { lockedPagesForUser } from './constants/index';


Vue.use(VueRouter)

const router = new VueRouter({
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
    },
    {
      path: '/comment/:reservationId',
      component: CommentForm
    }
  ]
})

router.beforeEach((to, from, next)=>
{
  if (authService.isAuthenticated())
  {
    if (lockedPagesForUser.filter(lockedPage => lockedPage == to.path).length < 1)
    {
      next();
    }
    else next('/');
  }
  else
  {
    if (lockedPagesForGuest.filter(lockedPage => to.path.startsWith(lockedPage)).length < 1)
    {
      next();
    }
    else next('/');
  }
});

export default router;