// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import api from '@/request/api' // 导入api接口

Vue.prototype.$api = api; // 将api挂载到vue的原型上

import axios from 'axios'
Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/api'
Vue.prototype.API='https://api.9xy.cn/Tp/';
import qs from 'qs'
Vue.prototype.qs = qs;

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

import VueQuillEditor from 'vue-quill-editor'
 
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
 
Vue.use(VueQuillEditor, /* { default global options } */)

import VCharts from 'v-charts'
Vue.use(VCharts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
