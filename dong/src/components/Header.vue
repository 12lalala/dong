<template>
  <!-- 页首 -->
  <div class="header1">
    <!-- logo -->
    <div class="logo">
      <img src="../assets/logo.jpg"
           width="75px"
           height="75px">
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
export default {
  name: "Header",
  data () {
    return {
      activeIndex: "/",
    }
  },
  methods: {
    getActiveNav (href) {
      let hrefs = href.split('//');
      let key = hrefs[1].split('/')[1];
      this.activeIndex = "/" + key;
    }
  },
  mounted () {
    this.getActiveNav(window.location.href);
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
@media screen and (max-device-width: 830px) {
}
</style>