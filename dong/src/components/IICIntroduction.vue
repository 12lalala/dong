<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>{{$t('Header.h2_1')}}</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{$t('Header.h1')}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('Header.h2')}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/IICIntroduction' }">{{$t('Header.h2_1')}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="r">
        <h1>{{$t('Header.h2_1')}}</h1>
        <p>{{$t('iic.p1')}}</p>
        <p>{{$t('iic.p2')}}</p>
        <p>{{$t('iic.p3')}}</p>
        <p class="title">{{$t('iic.p4')}}</p>
        <p>{{$t('iic.p5')}}</p>
        <p class="title">{{$t('iic.p6')}}</p>
        <p>{{$t('iic.p7')}}</p>
        <p class="title">{{$t('iic.p8')}}</p>
        <p>{{$t('iic.p9')}}</p>
      </div>
      <div class="l">
        <h3>{{$t('Header.h2')}}</h3>
        <el-divider></el-divider>
        <el-menu default-active="/IICIntroduction"
                 class="el-menu-vertical-demo"
                 router>
          <el-menu-item index="/IICIntroduction">
            <span slot="title">{{$t('Header.h2_1')}}</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/Organization">
            <span slot="title">{{$t('Header.h2_2')}}</span>
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
      img: require("../assets/contact.png")
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

