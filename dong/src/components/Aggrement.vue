<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>协议伙伴</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Aggrement' }">协议伙伴</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="r">
        <h1>协议伙伴</h1>
        <p>
          <el-image style="width: 853px; height: 475px"
                    :src="url"
                    :fit="fit"></el-image>
        </p>
      </div>
      <div class="l">
        <h3>协议伙伴</h3>
        <el-divider></el-divider>
        <el-menu default-active="/Aggrement"
                 class="el-menu-vertical-demo"
                 router>
          <el-menu-item index="/DGUSTIntroduction">
            <span slot="title">学校简介</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/DGUSTTeam">
            <span slot="title">学校团队</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/Organization">
            <span slot="title">组织构架</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/Cooperate">
            <span slot="title">合作伙伴</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/Aggrement">
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
      fit: 'fill',
      url: require('../assets/aggrement.jpg')
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
  margin: 0 auto;
  color: #fff;
  overflow: hidden;
  padding: 0;
  line-height: 380px;
  text-align: center;
}

.banner dd {
  display: inline-block;
  vertical-align: middle;
  height: 1px;
  background: #fff;
  width: 60px;
  margin: 0;
}
.banner dl dt {
  margin: 0 0.5em;
  display: inline-block;
  vertical-align: middle;
  font-size: 2.5em;
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
/* 面包屑 */
.breadcrumb {
  max-width: 1200px;
  overflow: hidden;
  margin: 20px auto;
}
</style>

