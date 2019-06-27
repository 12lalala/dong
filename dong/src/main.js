import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

import VueRouter from 'vue-router'

Vue.use(VueRouter)
//定义路由表
import Hello from './components/Hello.vue'
import n404 from './components/404'
import Contact from './components/Contact.vue'
import Talent from './components/Talent.vue'
import DGUSTIntroduction from './components/DGUSTIntroduction'
const routes = [{
    path: '/',
    component: Hello
  },
  {
    path: '/1',
    component: DGUSTIntroduction
  },
  {
    path: '/16',
    component: Contact
  },
  {
    path: '/15',
    component: Talent
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

// 引入vue-amap
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '	babc79e9db5dae067346e8058d8ef61d',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
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