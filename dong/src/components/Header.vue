<template>
  <!-- 页首 -->
  <div class="header1">
    <!-- logo -->
    <div class="logo">
      <img src="../assets/logo.jpg"
           width="60px"
           height="60px">
    </div>
    <div class="header2">
      <!-- 导航栏 -->
      <el-menu :default-active="activeIndex"
               class="el-menu-demo"
               mode="horizontal"
               router="true"
               @select="handleSelect"
               text-color="#708eac">
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">关于我们</template>
          <el-menu-item index="/1">DGUST简介</el-menu-item>
          <el-menu-item index="/2">DGUST团队</el-menu-item>
          <el-menu-item index="/3">组织构架</el-menu-item>
          <el-menu-item index="/4">合作伙伴</el-menu-item>
          <el-menu-item index="/5">协议伙伴</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">产学研</template>
          <el-menu-item index="/6">科创服务中心</el-menu-item>
          <el-menu-item index="/7">国际交流中心</el-menu-item>
          <el-menu-item index="/8">投资孵化中心</el-menu-item>
          <el-menu-item index="/9">产业规划中心</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">新闻动态</template>
          <el-menu-item index="/10">最新动态</el-menu-item>
          <el-menu-item index="/11">通知公告</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">智库专家</template>
          <el-menu-item index="/12">专家团队</el-menu-item>
          <el-menu-item index="/13">创业导师</el-menu-item>
          <el-menu-item index="/14">海外合伙人</el-menu-item>
        </el-submenu>
        <el-menu-item index="/15">人才招聘</el-menu-item>
        <el-menu-item index="/16">联系我们</el-menu-item>
      </el-menu>
    </div>
  </div>
  <!-- 页首 -->
</template>

<style scoped>
.header1 {
  width: 95%;
}

.header2 {
  width: 750px;
  float: right;
}

.logo {
  height: 55px;
  float: left;
  margin: 5px;
  padding-left: 50px;
}
</style>

<script>
export default {
  name: "Header",
}
</script>
