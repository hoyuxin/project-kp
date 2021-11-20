export default [
  {
    path: '/help/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '@/views/help/Contact.vue'),
  },
  {
    path: '/help/faq',
    name: 'Faq',
    component: () => import(/* webpackChunkName: "faq" */ '@/views/help/Faq.vue'),
  },
];
