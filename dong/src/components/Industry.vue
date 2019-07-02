<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>{{$t('Hello.p4')}}</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">&nbsp;{{$t('Header.h1')}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('Header.h3')}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Industry' }">{{$t('Hello.p4m')}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="r">
        <h1>{{$t('Hello.p4')}}</h1>
        <strong>{{$t('Division.city.t1')}}</strong>
        <p>{{$t('Division.city.p1')}}</p>
        <strong>{{$t('Division.city.t2')}}</strong>
        <p>{{$t('Division.city.p2')}}</p>
        <strong>{{$t('Division.city.t3')}}</strong>
        <p>{{$t('Division.city.p3')}}</p>
        <strong>{{$t('Division.city.t4')}}</strong>
        <p>{{$t('Division.city.p4_1')}}</p>
        <p>{{$t('Division.city.p4_2')}}</p>
        <strong>{{$t('Division.city.t5')}}</strong>
        <p>{{$t('Division.city.p5')}}</p>
        <br>
        <br>
        <el-image class="photo1"
                  :src="url1"
                  :fit="fit"></el-image>
        <br>
        <strong>{{$t('Division.city.t6')}}</strong>
        <br>
        <el-image class="photo2"
                  :src="url2"
                  :fit="fit"></el-image>
      </div>
      <div class="l">
        <h3>{{$t('Header.h3')}}</h3>
        <el-divider></el-divider>
        <el-menu default-active="/Industry"
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
      url1: require("../assets/industry1.jpg"),
      url2: require("../assets/industry2.png")
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
.content .r .photo1 {
  width: 840px;
  height: 253px;
}
.content .r .photo2 {
  width: 853px;
  height: 398px;
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
@media only screen and (max-width: 830px) {
  .banner {
    height: 220px;
    background-image: url("../assets/contact.png");
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .banner dl {
    margin: 0 auto;
    color: #fff;
    overflow: hidden;
    padding: 0;
    line-height: 220px;
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
    font-size: 1.5em;
  }
  .content .r {
    float: right;
    margin: 0px;
  }
  .content .r .photo1 {
    width: 100%;
    height: 150px;
  }
  .content .r .photo2 {
    width: 100%;
    height: 220px;
  }
  .content .r h1 {
    font-weight: 400;
    margin: 5px;
    font-size: 1.45em;
  }
  .content .r p {
    line-height: 1.8;
    text-indent: 40px;
    margin: 8px;
  }
  .content {
    max-width: 1200px;
    padding: 5.3px;
    margin: 0 auto;
    padding-bottom: 20px;
    background-color: #fff;
    overflow: hidden;
    margin-bottom: 50px;
  }
}
</style>