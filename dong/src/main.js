import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueAMap from 'vue-amap'

import './assets/css/override-element-ui.css'

Vue.use(VueRouter)

Vue.use(ElementUI);

Vue.use(VueAMap);


VueAMap.initAMapApiLoader({
  key: '	babc79e9db5dae067346e8058d8ef61d',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});


//定义路由表
import Hello from './components/Hello'
import n404 from './components/404'
import Contact from './components/Contact'
import Talent from './components/Talent'
import DGUSTIntroduction from './components/DGUSTIntroduction'
import DGUSTTeam from './components/DGUSTTeam'
import Organization from './components/Organization'
import Cooperate from './components/Cooperate'
import Aggrement from './components/Aggrement'
import Tech from './components/Tech'
import International from './components/International'
import Investment from './components/Investment'
import Industry from './components/Industry'
import Expert from './components/Expert'
import Pioneer from './components/Pioneer'
import Foreign from './components/Foreign'
import News from './components/News'
import Announcement from './components/Announcement'
import ArticleA from './components/ArticleA'
import ArticleN from './components/ArticleN'
const routes = [{
    path: '/',
    component: Hello
  },
  {
    path: '/DGUSTIntroduction',
    component: DGUSTIntroduction
  }, //1
  {
    path: '/DGUSTTeam',
    component: DGUSTTeam
  }, //2
  {
    path: '/Organization',
    component: Organization
  }, //3
  {
    path: '/Cooperate',
    component: Cooperate
  }, //4
  {
    path: '/Aggrement',
    component: Aggrement
  }, //5
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
    path: '/Expert',
    component: Expert
  }, //12
  {
    path: '/Pioneer',
    component: Pioneer
  }, //13
  {
    path: '/Foreign',
    component: Foreign
  }, //14
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
  render: h => h(App),
  router
});