<template>
  <div>
    <mt-header title=" 联系我们"
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
        <dt>{{$t('Header.h6')}}</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">&nbsp;{{$t('Header.h1')}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Contact' }">{{$t('Header.h6')}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <h3>{{$t('Header.h6')}}</h3>
      <br>
      <div class="map">
        <div class="amap-wrapper">
          <el-amap class="amap-box"
                   vid="map"
                   resizeEnable="true"
                   :zoom="zoom"
                   :center="center">
            <el-amap-marker vid="component-marker"
                            :position="position"></el-amap-marker>
          </el-amap>
        </div>
      </div>
      <p class="description1">{{$t('Contact.schoolname')}}</p>
      <p class="description2">
        {{$t('Contact.addr')}}{{address}}
        <br>
        {{$t('Contact.tel')}}{{tel}}
        <br>
        {{$t('Contact.fax')}}{{fax}}
        <br>
        {{$t('Contact.email')}}
        <el-link :href="email.url"
                 :underline="false"
                 target="_blank">{{email.email}}</el-link>
      </p>
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
  name: "Contact",
  data () {
    return {
      lang: "",
      zoom: 16,
      center: [113.875019, 22.902542],
      position: [113.875019, 22.902542],
      img: require("../assets/contact.png"),
      address: this.$t('Contact.address'),
      tel: this.$t('Contact.telephone'),
      fax: this.$t('Contact.faxaddress'),
      email: {
        email: this.$t('Contact.emailaddress'),
        url: "",
      },
      headdown: 0,
      goback: 0,
      about: 0,
      title: 1,
      fixed: true,
      selected: '联系我们',
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
.map {
  height: 450px;
  overflow: hidden;
}
.amap-wrapper {
  height: 450px;
}
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
  .map {
    height: 250px;
  }
  .content h3 {
    font-size: 1.45em;
    font-weight: normal;
    margin-bottom: 1em;
    line-height: 1;
    margin: 0;
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
