<template>
  <div>
    <div class="banner">
      <dl v-show="title">
        <dd></dd>
        <dt>{{$t('Header.h2_1')}}</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">&nbsp;{{$t('Header.h1')}}</el-breadcrumb-item>
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
      <div class="l"
           v-show="left">
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
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      img: require("../assets/contact.png"),
      left: 1,
      headdown: 0,
      goback: 0,
      about: 0,
      title: 1,
      fixed: true,
      selected: 'ICC简介',
      device: '',
      downabout: [
        './Contact',
        './Talent',
      ],
    }
  },
  methods: {
    getDeviceCookie () {
      this.device = Cookies.get('device');
      if (this.device == 'mobile') {
        this.headdown = 1;
        this.goback = 1;
        this.about = 1;
        this.title = 0;
        this.left = 0;
      }
      else {
        this.headdown = 0;
        this.goback = 0;
        this.about = 0;
        this.title = 1;
        this.left = 1;
      }
    },


  },
  mounted () {
    this.getDeviceCookie()
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
.headdown {
  position: absolute;
  z-index: 100;
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
    font-size: 1.8em;
  }
  .content .r {
    float: right;
    margin: 0px;
  }
  .content .r p {
    line-height: 1.8;
    text-indent: 40px;
    margin: 8px;
  }
  .content .r h1 {
    font-weight: 400;
    margin: 5px;
    font-size: 1.45em;
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