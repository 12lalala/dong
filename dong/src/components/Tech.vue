<template>
  <div>
    <mt-header title="国际高端人才培育区"
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
        <dt>{{$t('Hello.p1')}}</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">&nbsp;{{$t('Header.h1')}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('Header.h3')}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Tech' }">{{$t('Hello.p1m')}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="r">
        <h1>{{$t('Header.h3_1')}}</h1>
        <p>{{$t('Division.talent')}}</p>
        <br>
        <br>
        <el-image :src="url"
                  :fit="fit"></el-image>
      </div>
      <div class="l"
           v-show="left">
        <h3>{{$t('Header.h3')}}</h3>
        <el-divider></el-divider>
        <el-menu default-active="/Tech"
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
        <mt-tab-item id="人才培育">
          <span slot="icon"
                class="el-icon-s-home"></span>
          人才培育
        </mt-tab-item>
        <mt-tab-item id="发展引领">
          <span slot="icon"
                class="el-icon-s-home"></span>
          发展引领
        </mt-tab-item>
        <mt-tab-item id="科技创新">
          <span slot="icon"
                class="el-icon-s-home"></span>
          科技创新
        </mt-tab-item>
        <mt-tab-item id="城市功能">
          <span slot="icon"
                class="el-icon-s-home"></span>
          城市功能
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
      fit: 'fill',
      url: require("../assets/tech.png"),
      left: 1,
      headdown: 0,
      goback: 0,
      about: 0,
      title: 1,
      fixed: true,
      selected: '人才培育',
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
        case '人才培育':
          this.$router.push({
            path: '/Tech'
          })
          break;
        case '发展引领':
          this.$router.push({
            path: '/International'
          })
          break;
        case '科技创新':
          this.$router.push({
            path: '/Investment'
          })
          break;
        case '城市功能':
          this.$router.push({
            path: '/Industry'
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
  },
  mounted () {
    this.getDeviceCookie()
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
.content .r .photo {
  width: 853px;
  height: 475px;
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
  .content .r {
    float: right;
    margin: 0px;
  }
  .content .r .photo {
    width: 100%;
    height: 500px;
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