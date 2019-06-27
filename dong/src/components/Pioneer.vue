<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>创业导师</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="content">
      <div class="r">
        <h1>创业导师</h1>
        <div class="content-sub">
          <span class="1">安玉贤</span>
          <el-divider direction="vertical"></el-divider>
          <span class="2">SABIC（沙特基础工业公司）中国研发中心总监</span>
        </div>
      </div>
      <div class="l">
        <h3>智库专家</h3>
        <el-divider></el-divider>
        <el-menu default-active="2"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose">
          <el-menu-item index="1">
            <span slot="title">专家团队</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">创业导师</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="3">
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
  max-width: 910px;
  margin-top: 0px;
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
</style>

