export default [
  {
    path: '/platform/meta-trade4',
    name: 'MetaTrade4',
    component: () => import(/* webpackChunkName: "meta-trade4" */ '@/views/platform/MetaTrade.vue'),
  },
  {
    path: '/platform/app',
    name: 'App',
    component: () => import(/* webpackChunkName: "mob-app" */ '@/views/platform/MobApp.vue'),
  },
];
