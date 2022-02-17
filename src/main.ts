import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {
  Select,
  Option,
  Button,
  Carousel,
  CarouselItem,
  Icon,
  Table,
  TableColumn,
  Row,
  Col,
  Collapse,
  CollapseItem,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n';
import messages from '@/i18n';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.config.productionTip = false;
Vue.use(VueAxios);
const host = process.env.VUE_APP_API;
const instance = axios.create({
  baseURL: host,
});
Vue.prototype.$http = instance;

Vue.use(VueI18n);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Row);
Vue.use(Col);
Vue.use(Collapse);
Vue.use(CollapseItem);
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
