<template>
  <div>
    <!-- pc端导航栏 -->
    <div class="header1"
         v-show="head">
      <!-- logo -->
      <div class="logo">
        <img src="../assets/logo.png"
             width="310px"
             height="65px">
      </div>
      <div class="button">
        <el-dropdown @command="changelanguage"
                     trigger="click">
          <span class="el-dropdown-link">
            {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="header2">
        <!-- 导航栏 -->
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 router
                 text-color="#000000">
          <el-menu-item index="/">{{$t('Header.h1')}}</el-menu-item>
          <el-submenu index="2">
            <template slot="title">{{$t('Header.h2')}}</template>
            <el-menu-item index="/IICIntroduction">{{$t('Header.h2_1')}}</el-menu-item>
            <el-menu-item index="/Organization">{{$t('Header.h2_2')}}</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">{{$t('Header.h3')}}</template>
            <el-menu-item index="/Tech">{{$t('Header.h3_1')}}</el-menu-item>
            <el-menu-item index="/International">{{$t('Header.h3_2')}}</el-menu-item>
            <el-menu-item index="/Investment">{{$t('Header.h3_3')}}</el-menu-item>
            <el-menu-item index="/Industry">{{$t('Header.h3_4')}}</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">{{$t('Header.h4')}}</template>
            <el-menu-item index="/News">{{$t('Header.h4_1')}}</el-menu-item>
            <el-menu-item index="/Announcement">{{$t('Header.h4_2')}}</el-menu-item>
          </el-submenu>
          <el-menu-item index="/Talent">{{$t('Header.h5')}}</el-menu-item>
          <el-menu-item index="/Contact">{{$t('Header.h6')}}</el-menu-item>
        </el-menu>
      </div>
    </div>
    <mt-header v-show="goback"
               style="background: #fff;color: #409eff;position: absolute;z-index: 100;top: 0;right: 0;left: 0;position: fixed;"
               fixed
               title="东莞理工学院">
      <div slot="left">
        <el-dropdown @command="gogogo"
                     trigger="click">
          <span class="el-dropdown-link"
                id="el-dropdown-link">
            {{gogo}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="首页">首页</el-dropdown-item>
            <el-dropdown-item command="ICC简介">ICC简介</el-dropdown-item>
            <el-dropdown-item command="组织架构">组织架构</el-dropdown-item>
            <el-dropdown-item command="国际高端人才培育区">国际高端人才培育区</el-dropdown-item>
            <el-dropdown-item command="新工科发展引领区">新工科发展引领区</el-dropdown-item>
            <el-dropdown-item command="科技创新示范区">科技创新示范区</el-dropdown-item>
            <el-dropdown-item command="城市功能区域配套区">城市功能区域配套区</el-dropdown-item>
            <el-dropdown-item command="最新动态">最新动态</el-dropdown-item>
            <el-dropdown-item command="通知公告">通知公告</el-dropdown-item>
            <el-dropdown-item command="人才招聘">人才招聘</el-dropdown-item>
            <el-dropdown-item command="联系我们">联系我们</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div slot="right">
        <mt-button @click="changeLanguage"
                   style="color: #409eff;">{{lang}}</mt-button>
      </div>
    </mt-header>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: "Header",
  data () {
    return {
      activeIndex: "/",
      language: "中文",
      flag: "",
      head: 1,
      goback: 0,
      gogo: "",
      lang: "",
    }
  },
  methods: {
    getActiveNav (href) {
      let hrefs = href.split('//');
      let key = hrefs[1].split('/')[1];
      this.activeIndex = "/" + key;
    },
    changelanguage (command) {
      this.$i18n.locale = command;
      if (command == "zh") {
        this.language = "中文";
        location.reload();
      }
      else {
        this.language = "English";
        location.reload();
      }
      Cookies.set('language', command)
    },
    checklonguage () {
      let language = "";
      try {
        language = Cookies.get('language');
        // eslint-disable-next-line no-empty
      } catch (e) { }
      if (language == "zh" || language == null) {
        this.language = "中文";
        this.$i18n.locale = "zh";
      }
      else {
        this.language = "English";
        this.$i18n.locale = "en";
      }
    },
    IsPC () {
      var userAgentInfo = navigator.userAgent;
      var Agents = ["Android", "iPhone", "SymbianOS",
        "Windows Phone", "iPad", "iPod"];
      var flag = true;
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    },
    changeHead () {
      if (!this.flag) {
        this.head = 0;
      }
      else {
        this.head = 1;
      }
    },
    setCookie () {
      if (this.flag == true) {
        Cookies.set('device', "pc")
      }
      else {
        Cookies.set('device', "mobile")
      }
    },
    getDeviceCookie () {
      this.device = Cookies.get('device');
      if (this.device == 'mobile') {
        this.headdown = 1;
        this.goback = 1;
        this.about = 1;
        this.title = 0;
        this.left = 0;
      }
      else {
        this.headdown = 0;
        this.goback = 0;
        this.about = 0;
        this.title = 1;
        this.left = 1;
      }
    },
    getLangageCookie () {
      let language = Cookies.get('language');
      if (language == "zh" || language == null) {
        this.lang = "English";
      }
      else {
        this.lang = "中文";
      }
    },
    changeLanguage () {
      if (this.lang == "中文") {
        this.lang = "English";
        this.$i18n.locale = "zh";
        Cookies.set('language', "zh");
        location.reload();
      }
      else {
        this.lang = "中文";
        this.$i18n.locale = "en";
        Cookies.set('language', "en");
        location.reload();
      }
    },
    gogogo (command) {
      this.gogo = command;
      Cookies.set('gogogo', command);
      switch (this.gogo) {
        case '首页':
          this.$router.push({
            path: '/'
          })
          break;
        case 'ICC简介':
          this.$router.push({
            path: '/IICIntroduction'
          })
          break;
        case '组织架构':
          this.$router.push({
            path: '/Organization'
          })
          break;
        case '国际高端人才培育区':
          this.$router.push({
            path: '/Tech'
          })
          break;
        case '新工科发展引领区':
          this.$router.push({
            path: '/International'
          })
          break;
        case '科技创新示范区':
          this.$router.push({
            path: '/Investment'
          })
          break;
        case '城市功能区域配套区':
          this.$router.push({
            path: '/Industry'
          })
          break;
        case '最新动态':
          this.$router.push({
            path: '/News'
          })
          break;
        case '通知公告':
          this.$router.push({
            path: '/Announcement'
          })
          break;
        case '联系我们':
          this.$router.push({
            path: '/Contact'
          })
          break;
        case '人才招聘':
          this.$router.push({
            path: '/Talent'
          })
          break;
      }
    },
    getGogogoCookie () {
      let gogoC = Cookies.get('gogogo');
      if (gogoC == "首页" || gogoC == null) {
        this.gogo = "首页";
        this.$router.push({
          path: '/'
        })
      }
      else {
        this.gogo = gogoC;
        this.gogogo(this.gogo);
      }
    }
  },
  mounted () {
    this.getActiveNav(window.location.href);
    this.checklonguage();
    this.flag = this.IsPC();
    this.setCookie()
    this.changeHead();
    this.getDeviceCookie()
    this.getGogogoCookie()
    this.getLangageCookie()
  }
}
</script>

<style scoped>
.header1 {
  height: 83px;
  /* max-width: 1200px; */
  margin: 0 auto;
  display: block;
  background: #ffffff;
  overflow: hidden;
  padding: 0 150px;
}

.header2 {
  min-width: 600px;
  float: right;
  margin-top: 20px;
  border-top-style: solid;
  border-top-color: #409eff;
  border-top-width: 2px;
}

.logo {
  float: left;
  margin: 5px auto;
}
.button {
  overflow: hidden;
  float: right;
  width: 80px;
  margin-top: 20px;
  padding-top: 18px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
#el-dropdown-link {
  color: #409eff;
  margin-left: 5px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>