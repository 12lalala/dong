<template>
  <!-- 页尾 -->
  <div class="footer">
    <div class="content">
      <div class="link">
        <router-link to="/DGUSTIntroduction"
                     title="关于我们">关于我们</router-link>
        <el-divider direction="vertical"></el-divider>
        <router-link to="/Contact"
                     title="联系我们">联系我们</router-link>
        <el-divider direction="vertical"></el-divider>
        <router-link to="/Talent"
                     title="人才招聘">人才招聘</router-link>
        <el-divider direction="vertical"></el-divider>
        <router-link to="/"
                     title="返回首页">返回首页</router-link>
        <br>
        <span class="txt">
          联系地址:&nbsp;广东省东莞市松山湖高新区</span>
        <span class="txt">
          联系电话:&nbsp;(+86-571)89995070&nbsp;&nbsp;传真:&nbsp;(+86-571)89995070</span>
        <br>
        <span class="txt">
          Copyright © 2019 东莞理工学院国际合作创新区. All Rights Reserved.</span>
      </div>
    </div>
  </div>
  <!-- 页尾 -->
</template>

<script>
export default {
  name: "Footer",

}
</script>


<style scoped>
.footer {
  width: 100%;
  background: #007cf8f3;
  height: 100px;
  overflow: hidden;
}
.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  font-size: 14px;
}
.link {
  color: #ffffff;
  text-align: center;
  display: block;
}
/* 清除rooter-link的样式 */
a {
  color: #ffffff;
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
/* 清除rooter-link的样式 */
.txt {
  margin: 0 auto;
  text-align: center;
}
</style>

