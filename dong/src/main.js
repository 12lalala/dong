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
    path: '/1',
    component: DGUSTIntroduction
  },
  {
    path: '/2',
    component: DGUSTTeam
  },
  {
    path: '/3',
    component: Organization
  },
  {
    path: '/4',
    component: Cooperate
  },
  {
    path: '/5',
    component: Aggrement
  },
  {
    path: '/6',
    component: Tech
  },
  {
    path: '/7',
    component: International
  },
  {
    path: '/8',
    component: Investment
  },
  {
    path: '/9',
    component: Industry
  },
  {
    path: '/10',
    component: News
  },
  {
    path: '/11',
    component: Announcement
  },
  {
    path: '/12',
    component: Expert
  },
  {
    path: '/13',
    component: Pioneer
  },
  {
    path: '/14',
    component: Foreign
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
  {
    path: '*', // 此处需特别注意至于最底部
    redirect: '/404'
  }
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