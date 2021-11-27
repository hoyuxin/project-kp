export default [
  {
    path: '/help/faq',
    name: 'Faq',
    component: () => import(/* webpackChunkName: "faq" */ '@/views/help/Faq.vue'),
  },
];
