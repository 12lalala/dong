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
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">关于我们</template>
          <el-menu-item index="/DGUSTIntroduction">IIC简介</el-menu-item>
          <el-menu-item index="/DGUSTTeam">DGUST团队</el-menu-item>
          <el-menu-item index="/Organization">组织构架</el-menu-item>
          <el-menu-item index="/Cooperate">合作伙伴</el-menu-item>
          <el-menu-item index="/Aggrement">协议伙伴</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">板块分区</template>
          <el-menu-item index="/Tech">国际高端人才培育区</el-menu-item>
          <el-menu-item index="/International">新工科发展引领区</el-menu-item>
          <el-menu-item index="/Investment">科技创新示范区</el-menu-item>
          <el-menu-item index="/Industry">城市功能区域配套区</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">新闻动态</template>
          <el-menu-item index="/News">最新动态</el-menu-item>
          <el-menu-item index="/Announcement">通知公告</el-menu-item>
        </el-submenu>
        <el-menu-item index="/Talent">人才招聘</el-menu-item>
        <el-menu-item index="/Contact">联系我们</el-menu-item>
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