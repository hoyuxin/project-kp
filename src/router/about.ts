export default [
  {
    path: 'company',
    name: 'Company',
    component: () => import(/* webpackChunkName: "company" */ '@/views/about/Company.vue'),
  },
  {
    path: 'news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '@/views/about/News.vue'),
  },
];
