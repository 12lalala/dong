<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>合作伙伴</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/4' }">合作伙伴</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="r">
        <h1>合作伙伴</h1>
        <div class="display">
          <img :src="imgs[0]"
               alt="">
          <img :src="imgs[1]"
               alt="">
          <img :src="imgs[2]"
               alt="">
          <img :src="imgs[3]"
               alt="">
          <img :src="imgs[4]"
               alt="">
          <img :src="imgs[5]"
               alt="">
          <img :src="imgs[6]"
               alt="">
        </div>
      </div>
      <div class="l">
        <h3>关于我们</h3>
        <el-divider></el-divider>
        <el-menu default-active="/4"
                 class="el-menu-vertical-demo"
                 router>
          <el-menu-item index="/1">
            <span slot="title">学校简介</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/2">
            <span slot="title">学校团队</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/3">
            <span slot="title">组织构架</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/4">
            <span slot="title">合作伙伴</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/5">
            <span slot="title">协议伙伴</span>
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
      img: require("../assets/organization.png"),
      imgs: [
        require("../assets/1.jpg"),
        require("../assets/2.jpg"),
        require("../assets/3.jpg"),
        require("../assets/4.jpg"),
        require("../assets/5.jpg"),
        require("../assets/6.jpg"),
        require("../assets/7.jpg"),
      ]
    }
  }
}
</script>
<style scoped>
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
.content .r .display {
  overflow: hidden;
}
.content .r .display img {
  display: block;
  margin: 20px 40px;
  float: left;
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

