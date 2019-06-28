<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>创业导师</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Pioneer' }">创业导师</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="r">
        <h1>创业导师</h1>
        <div class="content-sub">
          <dl>
            <dt>安玉贤</dt>
            <dd>SABIC（沙特基础工业公司）中国研发中心总监</dd>
          </dl>
          <dl>
            <dt>程&nbsp;&nbsp;&nbsp;铭</dt>
            <dd>3M中国研发中心总经理、副总裁</dd>
          </dl>
          <dl>
            <dt>罗文中</dt>
            <dd>霍尼韦尔中国研发中心总经理</dd>
          </dl>
          <dl>
            <dt>彭培源</dt>
            <dd>LG电子中国研发中心总经理、全球副总裁</dd>
          </dl>
          <dl>
            <dt>任道远</dt>
            <dd>VMware中国研发中心总经理</dd>
          </dl>
          <dl>
            <dt>施嘉诺</dt>
            <dd>KLA-Tencor中国研发中心总经理</dd>
          </dl>
          <dl>
            <dt>王&nbsp;&nbsp;&nbsp;熙</dt>
            <dd>飞利浦中国副总裁、CTO</dd>
          </dl>
          <dl>
            <dt>殷&nbsp;&nbsp;&nbsp;鹏</dt>
            <dd>雅培中国研发中心总经理</dd>
          </dl>
        </div>
      </div>
      <div class="l">
        <h3>智库专家</h3>
        <el-divider></el-divider>
        <el-menu default-active="/Pioneer"
                 class="el-menu-vertical-demo"
                 router>
          <el-menu-item index="/Expert">
            <span slot="title">专家团队</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/Pioneer">
            <span slot="title">创业导师</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/Foreign">
            <span slot="title">海外合伙人</span>
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
      img: [
        require("../assets/head.jpg"),
      ]
    }
  }
}
</script>
<style scoped>
.banner {
  height: 380px;
  background-image: url("../assets/think.png");
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
  width: 65%;
  margin-top: 0px;
  margin-right: 110px;
}
.content .r h1 {
  font-weight: 400;
  margin: 5px;
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
.content .content-sub {
  overflow: hidden;
}
.content .content-sub dt {
  width: 20%;
  font-weight: normal;
  font-size: 1.5em;
  display: inline-block;
  color: #333;
  vertical-align: middle;
  border-right: solid 1px #ddd;
}
.content .content-sub dd {
  width: 72%;
  margin-left: 6%;
  display: inline-block;
  vertical-align: middle;
  color: #666;
}
.content .content-sub h1 {
  float: left;
  font-weight: 300;
}
.content .content-sub h3 {
  float: left;
  font-weight: 300;
}
.content .content-sub img {
  float: left;
  margin-right: 40px;
}
.content .content-sub .description {
  float: left;
  max-width: 590px;
}
.content .content-sub .description h2 {
  margin: 0;
  font-weight: 400;
}
.content .content-sub .description ul {
  padding: 0;
}
/* 面包屑 */
.breadcrumb {
  max-width: 1200px;
  overflow: hidden;
  margin: 20px auto;
}
</style>

