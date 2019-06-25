import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

import VueRouter from 'vue-router'

Vue.use(VueRouter)
//定义路由表
import Hello from './components/Hello.vue'
import n404 from './components/404'
const routes = [{
    path: '/',
    component: Hello
  },
  {
    path: '/404',
    component: n404
  },
  {
    path: '*', // 此处需特别注意至于最底部
    redirect: '/404'
  }
]

Vue.use(ElementUI);

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
});


// // 注册组件
// import Header from './components/Header.vue'
// Vue.component('main-header', {
//   template: Header,
//   data: function () {
//     return {
//       activeIndex: "/",
//     }
//   }
// })