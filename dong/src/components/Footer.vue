<template>
  <!-- 页尾 -->
  <div class="footer">
    <div class="content">
      <div class="link">
        <router-link to="/1"
                     title="关于我们">关于我们</router-link>
        <el-divider direction="vertical"></el-divider>
        <router-link to="/16"
                     title="联系我们">联系我们</router-link>
        <el-divider direction="vertical"></el-divider>
        <router-link to="/4"
                     title="合作伙伴">合作伙伴</router-link>
        <el-divider direction="vertical"></el-divider>
        <router-link to="/15"
                     title="人才招聘">人才招聘</router-link>
        <el-divider direction="vertical"></el-divider>
        <router-link to="/"
                     title="返回首页">返回首页</router-link>
        <br>
        <span class="txt">
          联系地址:&nbsp;浙江省杭州市西湖区西园一路18号,&nbsp;浙江大学紫金众创小镇D4-4号楼&nbsp;</span>
        <span class="txt">
          联系电话:nbsp;(+86-571)89995070&nbsp;&nbsp;传真:&nbsp;(+86-571)89995070</span>
        <br>
        <span class="txt">
          Copyright © 2017 浙江大学国际创新研究院. All Rights Reserved.</span>
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

