<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>联系我们</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/16' }">联系我们</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <h3>联系我们</h3>
      <div class="map">
        <div class="amap-wrapper">
          <el-amap class="amap-box"
                   vid="map"
                   :zoom="zoom"
                   :center="center">
          </el-amap>
        </div>
      </div>
      <p class="description1">东莞理工学院国际创新研究院</p>
      <p class="description2">
        地址：{{address}}
        <br>
        电话: {{tel}}
        <br>
        传真: {{fax}}
        <br>
        简历投递邮箱：
        <el-link :href="email.url"
                 :underline="false"
                 target="_blank">{{email.email}}</el-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data () {
    return {
      zoom: 16,
      center: [121.406051, 31.179695],
      img: require("../assets/contact.png"),
      address: "",
      tel: "",
      fax: "",
      email: {
        email: "",
        url: "",
      },
    }
  }
}
</script>
<style scoped>
.map {
  height: 300px;
}
.banner {
  height: 380px;
  background-image: url("../assets/contact.png");
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
  height: 600px;
  margin: 0 auto;
  background-color: #fff;
  margin-bottom: 50px;
}
.content h3 {
  font-size: 1.75em;
  font-weight: normal;
  margin-bottom: 1em;
  line-height: 1;
  margin: 0;
}
.content .description1 {
  font-weight: bold;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 0px;
  color: #333;
}
.content .description2 {
  color: #333;
  line-height: 2;
  margin-bottom: 6px;
  margin-top: 8px;
}
/* 面包屑 */
.breadcrumb {
  width: 1200px;
  overflow: hidden;
  margin: 20px auto;
}
</style>

