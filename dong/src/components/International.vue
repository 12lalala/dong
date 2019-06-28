<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>国际交流</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/7' }">国际交流</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="r">
        <h1>国际交流中心</h1>
        <p>基于国际创新资源汇聚交融的优势，以美国斯坦福大学为代表的世界一流大学和以硅谷著名创新公司及孵化器平台为代表的高水平创新平台资源，面向学校和企业开展国际化的项目合作、人才交流和双创培训等业务，为浙大教职工、浙大学生、初创团队、校友企业家提供赴海外创新创业领域的项目培训管理、实习、项目实践、商事培训方案解决等服务。</p>
        <br>
        <br>
        <el-image style="width: 840px; height: 253px"
                  :src="url1"
                  :fit="fit"></el-image>
        <br>
        <el-image style="width: 853px; height: 421px"
                  :src="url2"
                  :fit="fit"></el-image>
      </div>
      <div class="l">
        <h3>产学研</h3>
        <el-divider></el-divider>
        <el-menu default-active="/7"
                 class="el-menu-vertical-demo"
                 router>
          <el-menu-item index="/6">
            <span slot="title">科创服务中心</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/7">
            <span slot="title">国际交流中心</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/8">
            <span slot="title">投资孵化中心</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/9">
            <span slot="title">产业规划中心</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fit: 'fill',
      url1: require("../assets/international1.png"),
      url2: require("../assets/international2.png")
    }
  }
}
</script>
<style scoped>
.banner {
  height: 380px;
  background-image: url("../assets/center.png");
  background-repeat: no-repeat;
  overflow: hidden;
}
.banner dl {
  width: 317px;
  height: 52px;
  color: #fff;
  margin: 0 auto;
  margin-top: 150px;
  overflow: hidden;
}

.banner dd {
  height: 1px;
  width: 60px;
  background-color: #fff;
  float: left;
  margin-top: 25px;
  margin-left: 0;
}
.banner dl dt {
  font-size: 2.5em;
  vertical-align: middle;
  float: left;
  margin: 0 17.5px;
}
.content {
  max-width: 1200px;
  padding: 20.3px;
  margin: 0 auto;
  padding-bottom: 50px;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 50px;
}
.content .r {
  float: right;
  margin: 20.3px;
  margin-left: 30px;
  max-width: 910px;
  margin-top: 0px;
}
.content .r h1 {
  font-weight: 400;
  margin: 5px;
}
.content .r p {
  line-height: 2.2;
  text-indent: 40px;
  margin: 8px;
}
.content .r .title {
  font-weight: 600;
}
.content .l {
  float: left;
  width: 200px;
}
.content .l h3 {
  font-weight: 100;
  font-size: 1.75em;
  margin-left: 40px;
  margin-top: 10px;
  margin-bottom: 0;
}
/* 面包屑 */
.breadcrumb {
  max-width: 1200px;
  overflow: hidden;
  margin: 20px auto;
}
</style>