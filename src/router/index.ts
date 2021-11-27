import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';

const originalPush: any = Router.prototype.push;

Router.prototype.push = function push(location: any) {
  return originalPush.call(this, location).catch((error: any) => error);
};
Vue.use(Router);
const context = (require as any).context('./', false, /\.ts$/);
let routes: any[] = [];
context
  .keys()
  .filter((item: string) => item !== './index.ts')
  .map((path: string) => {
    routes = [...routes, ...context(path).default];
  });

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export default router;
