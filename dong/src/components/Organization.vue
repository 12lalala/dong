<template>
  <div>
    <mt-header title="组织架构"
               v-show="goback"
               fixed>
      <router-link to="/"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <div slot="right">
        <mt-button @click="changeLanguage">{{lang}}</mt-button>
      </div>
    </mt-header>
    <div class="banner">
      <dl v-show="title">
        <dd></dd>
        <dt>{{$t('Header.h2_2')}}</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">&nbsp;{{$t('Header.h1')}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('Header.h2')}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Organization' }">{{$t('Header.h2_2')}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="r">
        <h1>{{$t('Header.h2_2')}}</h1>
        <el-image class="photo"
                  :src="img"
                  :fit="fit"></el-image>
      </div>
      <div class="l"
           v-show="left">
        <h3>{{$t('Header.h2')}}</h3>
        <el-divider></el-divider>
        <el-menu default-active="/Organization"
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
    <!-- 移动端导航栏 -->
    <div v-show="headdown"
         class="headdown">
      <mt-tabbar v-model="selected"
                 :fixed="fixed">
        <mt-tab-item id="ICC简介">
          <span slot="icon"
                class="el-icon-s-home"></span>
          ICC简介
        </mt-tab-item>
        <mt-tab-item id="组织架构">
          <span slot="icon"
                class="el-icon-s-home"></span>
          组织架构
        </mt-tab-item>
        <mt-tab-item id="人才招聘">
          <span slot="icon"
                class="el-icon-s-home"></span>
          人才招聘
        </mt-tab-item>
        <mt-tab-item id="联系我们">
          <span slot="icon"
                class="el-icon-s-home"></span>
          联系我们
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      lang: "",
      img: require("../assets/organization.png"),
      fit: 'fill',
      left: 1,
      headdown: 0,
      goback: 0,
      about: 0,
      title: 1,
      fixed: true,
      selected: '组织架构',
      device: '',
      downabout: [
        './Contact',
        './Talent',
      ],
    }
  },
  watch: {
    selected (newval) {
      switch (newval) {
        case 'ICC简介':
          this.$router.push({
            path: '/IICIntroduction'
          })
          break;
        case '组织架构':
          this.$router.push({
            path: '/Organization'
          })
          break;
        case '人才招聘':
          this.$router.push({
            path: '/Talent'
          })
          break;
        case '联系我们':
          this.$router.push({
            path: '/Contact'
          })
          break;
      }
    }
  },
  methods: {
    getDeviceCookie () {
      this.device = Cookies.get('device');
      if (this.device == 'mobile') {
        this.headdown = 1;
        this.goback = 1;
        this.title = 0;
        this.left = 0;
      }
      else {
        this.headdown = 0;
        this.goback = 0;
        this.title = 1;
        this.left = 1;
      }
    },
    getLangageCookie () {
      let language = Cookies.get('language');
      if (language == "zh" || language == null) {
        this.lang = "English";
      }
      else {
        this.lang = "中文";
      }
    },
    changeLanguage () {
      if (this.lang == "中文") {
        this.lang = "English";
        this.$i18n.locale = "zh";
        Cookies.set('language', "zh");
      }
      else {
        this.lang = "中文";
        this.$i18n.locale = "en";
        Cookies.set('language', "en");
      }
    }
  },
  mounted () {
    this.getDeviceCookie()
    this.getLangageCookie()
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
.content .r .photo {
  width: 840px;
  height: 365px;
}
.content .r h1 {
  font-weight: 400;
  margin: 5px;
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
    font-size: 1.5em;
  }
  .content .r {
    float: right;
    margin: 0px;
  }
  .content .r .photo {
    width: 100%;
    height: 200px;
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