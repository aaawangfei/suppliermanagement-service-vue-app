// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn';
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Vant);

Vue.prototype.$dayjs = dayjs ;
dayjs.locale('zh-cn');
Vue.use(dayjs)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
