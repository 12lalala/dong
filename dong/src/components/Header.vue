<template>
  <!-- 页首 -->
  <div class="header1">
    <!-- logo -->
    <div class="logo">
      <img src="../assets/logo.jpg"
           width="75px"
           height="75px">
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
  <!-- 页首 -->
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: "Header",
  data () {
    return {
      activeIndex: "/",
      language: "中文",
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
      }
      else {
        this.language = "English";
      }
      Cookies.set('language', command)
    },
    checklonguage () {
      let language = "";
      try {
        language = Cookies.get('language');
        // eslint-disable-next-line no-empty
      } catch (e) { }
      if (language == "zh" || language == "") {
        this.language = "中文";
      }
      else {
        this.language = "English";
      }
    }
  },
  mounted () {
    this.getActiveNav(window.location.href);
    this.checklonguage();
  }
}
</script>

<style scoped>
.header1 {
  height: 80px;
  max-width: 1200px;
  margin: 0 auto;
  display: block;
  background: #ffffff;
  overflow: hidden;
}

.header2 {
  min-width: 600px;
  float: right;
  margin-top: 20px;
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
.el-icon-arrow-down {
  font-size: 12px;
}
</style>