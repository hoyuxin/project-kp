export default [
  {
    path: '/about/company',
    name: 'Company',
    component: () => import(/* webpackChunkName: "company" */ '@/views/about/Company.vue'),
  },
  {
    path: '/about/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '@/views/about/News.vue'),
  },
];
