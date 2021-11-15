export default [
  {
    path: '/product/indices',
    name: 'Indices',
    component: () => import(/* webpackChunkName: "indices" */ '@/views/product/Indices.vue'),
  },
  {
    path: '/product/commodity',
    name: 'Commodity',
    component: () => import(/* webpackChunkName: "commodity" */ '@/views/product/Commodity.vue'),
  },
  {
    path: '/product/currency',
    name: 'Currency',
    component: () => import(/* webpackChunkName: "currency" */ '@/views/product/Currency.vue'),
  },
  {
    path: '/product/*',
    redirect: '/',
  },
];
