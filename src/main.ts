import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Button, Carousel, CarouselItem, Icon } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n';
import messages from '@/i18n';

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Carousel);
Vue.use(CarouselItem);
let lang: any = 'zh-tw';
if (localStorage.getItem('locale')) {
  lang = localStorage.getItem('locale');
}
const i18n = new VueI18n({
  locale: lang,
  messages,
});
new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
