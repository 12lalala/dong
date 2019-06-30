<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>{{$t('Hello.p3')}}</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{$t('Header.h1')}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('Header.h3')}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Investment' }">{{$t('Hello.p3m')}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="r">
        <h1>{{$t('Hello.p3')}}</h1>
        <p>{{$t('Division.technology')}}</p>
        <br>
        <br>
        <el-image style="width: 853px; height: 289px"
                  :src="url"
                  :fit="fit"></el-image>
      </div>
      <div class="l">
        <h3>{{$t('Header.h3')}}</h3>
        <el-divider></el-divider>
        <el-menu default-active="/Investment"
                 class="el-menu-vertical-demo"
                 router>
          <el-menu-item index="/Tech">
            <span slot="title">{{$t('Header.h3_1')}}</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/International">
            <span slot="title">{{$t('Header.h3_2')}}</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/Investment">
            <span slot="title">{{$t('Header.h3_3')}}</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/Industry">
            <span slot="title">{{$t('Header.h3_4')}}</span>
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
      url: require("../assets/investment.png")
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
  overflow: hidden;
}
.content .l h3 {
  font-weight: 100;
  font-size: 1.55em;
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