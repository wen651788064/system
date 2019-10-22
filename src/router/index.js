import Vue from 'vue'
import Router from 'vue-router'
import Order from '../pages/order';
import Index from '../pages/index';
import Register from '../pages/register';

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
];

export default new Router({
  routes: constantRouterMap
})
