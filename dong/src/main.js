import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 国际化
// 引入 vue-i18n
import i18n from './lang'
// import enLocale from 'element-ui/lib/locale/lang/en'
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import App from './App.vue'
// 引入路由表
import VueRouter from 'vue-router'
// 引入地图
import VueAMap from 'vue-amap'

import './assets/css/override-element-ui.css'

Vue.use(VueRouter)

Vue.use(ElementUI)

Vue.use(VueAMap)

// 国际化
Vue.use(i18n)
// Vue.config.lang = 'zh-cn'
// Vue.locale('zh-cn', zhLocale)
// Vue.locale('en', enLocale)


// 初始化地图
VueAMap.initAMapApiLoader({
  key: '	babc79e9db5dae067346e8058d8ef61d',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});


//定义路由表
import Hello from './components/Hello'
import n404 from './components/404'
import Contact from './components/Contact'
import Talent from './components/Talent'
import IICIntroduction from './components/IICIntroduction'
// import DGUSTTeam from './components/DGUSTTeam'
import Organization from './components/Organization'
// import Cooperate from './components/Cooperate'
// import Aggrement from './components/Aggrement'
import Tech from './components/Tech'
import International from './components/International'
import Investment from './components/Investment'
import Industry from './components/Industry'
import News from './components/News'
import Announcement from './components/Announcement'
import ArticleA from './components/ArticleA'
import ArticleN from './components/ArticleN'
const routes = [{
    path: '/',
    component: Hello
  },
  {
    path: '/IICIntroduction',
    component: IICIntroduction
  }, //1
  {
    path: '/Organization',
    component: Organization
  }, //3
  {
    path: '/Tech',
    component: Tech
  }, //6
  {
    path: '/International',
    component: International
  }, //7
  {
    path: '/Investment',
    component: Investment
  }, //8
  {
    path: '/Industry',
    component: Industry
  }, //9
  {
    path: '/News',
    component: News
  }, //10
  {
    path: '/Announcement',
    component: Announcement
  }, //11
  {
    path: '/Contact',
    component: Contact
  }, //16
  {
    path: '/Talent',
    component: Talent
  }, //15
  {
    path: '/article/news/:id',
    component: ArticleN,
  },
  {
    path: '/article/announcement/:id',
    component: ArticleA,
  },
  {
    path: '/article',
    component: News,
  },
  {
    path: '/404',
    component: n404
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  i18n, // 便于可以直接在组件中通过this.$i18n使用，也可以按需引用
  router,
  render: h => h(App),
});