import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: '',
    component: Home,
    // component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
