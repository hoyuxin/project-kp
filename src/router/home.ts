import Home from '../views/Home.vue';
export default [
  {
    path: '/',
    name: '',
    component: Home,
    // component: () => import(/* webpackChunkName: "" */ '../views/Home.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
];
