<template>
  <div>
    <mt-header title="最新动态"
               v-show="goback"
               fixed>
      <router-link to="/"
                   slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="banner">
      <dl v-show="title">
        <dd></dd>
        <dt>{{$t('Header.h4_1')}}</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{$t('Header.h1')}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('Header.h4')}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/News' }">{{$t('Header.h4_1')}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="r">
        <iframe :src="src"
                id="article"
                name="article"
                scrolling="no"
                frameborder="0"
                width="100%"
                :height="hei + 'px'"></iframe>
        <div class="botton">
          <el-button type="text"
                     @click='showall'
                     v-show="butshow">{{$t('Hello.readmore')}}</el-button>
        </div>
      </div>
      <div class="l"
           v-show="left">
        <h3>{{$t('Header.h4')}}</h3>
        <el-divider></el-divider>
        <el-menu default-active="/News"
                 class="el-menu-vertical-demo"
                 router>
          <el-menu-item index="/News">
            <span slot="title">{{$t('Header.h4_1')}}</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/Announcement">
            <span slot="title">{{$t('Header.h4_2')}}</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <!-- <div class="about"
         v-show="about">
      <div style="margin: 0 auto;width: 130px;">
        <el-link :href="downabout[0]"
                 :underline="false">人才招聘</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link :href="downabout[1]"
                 :underline="false">联系我们</el-link>
      </div>
    </div> -->
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
        <mt-tab-item id="最新动态">
          <span slot="icon"
                class="el-icon-s-home"></span>
          最新动态
        </mt-tab-item>
        <mt-tab-item id="通知公告">
          <span slot="icon"
                class="el-icon-s-home"></span>
          通知公告
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
      src: '/articles' + this.$t('url') + '/News/' + this.$route.params.id + '.html',
      hei: 500,
      butshow: true,
      left: 1,
      headdown: 0,
      goback: 0,
      about: 0,
      title: 1,
      fixed: true,
      selected: '最新动态',
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
        case '最新动态':
          this.$router.push({
            path: '/News'
          })
          break;
        case '通知公告':
          this.$router.push({
            path: '/Announcement'
          })
          break;
      }
    }
  },
  methods: {
    showall () {
      var iframehei = 0;
      try {
        iframehei = window.frames['article'].document.body.scrollHeight;
      } catch (e) { iframehei = 500; }
      finally {
        this.hei = iframehei;
        this.butshow = false;
      }
    },
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
  },
  mounted () {
    this.getDeviceCookie()
  }
}
</script>
<style scoped>
.botton {
  float: right;
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
  padding-bottom: 50px;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 50px;
}
.content .r {
  float: right;
  margin: 20.3px;
  width: 70%;
  /* height: 488px; */
  margin-top: 0px;
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
/* .about {
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
} */
.headdown {
  position: absolute;
  z-index: 100;
}
/* @media only screen and (max-width: 830px) {
  .about {
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
    margin-bottom: 60px;
  }
} */
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
  .content {
    max-width: 1200px;
    padding: 10.3px;
    margin: 0 auto;
    padding-bottom: 20px;
    background-color: #fff;
    overflow: hidden;
    margin-bottom: 50px;
  }
  .content .r {
    float: right;
    width: 100%;
    /* height: 488px; */
    margin: 0;
  }
}
</style>