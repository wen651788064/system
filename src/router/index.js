import Vue from 'vue'
import Router from 'vue-router'
import Order from '../pages/order';
import Index from '../pages/index';
import Register from '../pages/register';
import Chat from '../pages/chat'
Vue.use(Router)


let constantRouterMap = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/order',
    component: Order,
  },
  {
    path: '/chat',
    component: Chat,
  },
];

export default new Router({
  routes: constantRouterMap
})
