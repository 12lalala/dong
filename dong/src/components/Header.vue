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
          <el-menu-item index="/DGUSTIntroduction">DGUST简介</el-menu-item>
          <el-menu-item index="/DGUSTTeam">DGUST团队</el-menu-item>
          <el-menu-item index="/Organization">组织构架</el-menu-item>
          <el-menu-item index="/Cooperate">合作伙伴</el-menu-item>
          <el-menu-item index="/Aggrement">协议伙伴</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">产学研</template>
          <el-menu-item index="/Tech">科创服务中心</el-menu-item>
          <el-menu-item index="/International">国际交流中心</el-menu-item>
          <el-menu-item index="/Investment">投资孵化中心</el-menu-item>
          <el-menu-item index="/Industry">产业规划中心</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">新闻动态</template>
          <el-menu-item index="/News">最新动态</el-menu-item>
          <el-menu-item index="/Announcement">通知公告</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">智库专家</template>
          <el-menu-item index="/Expert">专家团队</el-menu-item>
          <el-menu-item index="/Pioneer">创业导师</el-menu-item>
          <el-menu-item index="/Foreign">海外合伙人</el-menu-item>
        </el-submenu>
        <el-menu-item index="/Talent">人才招聘</el-menu-item>
        <el-menu-item index="/Contact">联系我们</el-menu-item>
      </el-menu>
    </div>
  </div>
  <!-- 页首 -->
</template>

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
  min-width: 750px;
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

<script>
export default {
  name: "Header",
  data () {
    return {
      activeIndex: "/",
    }
  }
}
</script>
