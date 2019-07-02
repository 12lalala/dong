<template>
  <div>
    <mt-header title=" 人才招聘"
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
        <dt>{{$t('Header.h5')}}</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">&nbsp;{{$t('Header.h1')}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Talent' }">{{$t('Header.h5')}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <h3>{{$t('Header.h5')}}</h3>
      <div class="content-sub">
        <div class="sub1">
          <h5>{{$t('Hire.position1.ptitle')}}</h5>
          <p>{{$t('Hire.num')}}&nbsp;1</p>
        </div>
        <div class="sub2">
          <p>
            <strong>{{$t('Hire.duties')}}</strong>
            <br>
            {{$t('Hire.position1.p1')}}
            <br>
            {{$t('Hire.position1.p2')}}
            <br>
            {{$t('Hire.position1.p3')}}
            <br>
            {{$t('Hire.position1.p4')}}
            <br>
            {{$t('Hire.position1.p5')}}
          </p>
          <p>
            <strong>{{$t('Hire.demand')}}</strong>
            <br>
            {{$t('Hire.position1.p6')}}
            <br>
            {{$t('Hire.position1.p7')}}
            <br>
            {{$t('Hire.position1.p8')}}
          </p>
          <p>
            <strong>{{$t('Hire.email')}}</strong>
            <br>
            <el-link href="mailto:lei.deng@cybernaut.com.cn"
                     target="_blank">lei.deng@cybernaut.com.cn</el-link>
          </p>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="content-sub">
        <div class="sub1">
          <h5>{{$t('Hire.position2.ptitle')}}</h5>
          <p>{{$t('Hire.num')}}&nbsp;2</p>
        </div>
        <div class="sub2">
          <p>
            <strong>{{$t('Hire.duties')}}</strong>
            <br>
            {{$t('Hire.position2.p1')}}
            <br>
            {{$t('Hire.position2.p2')}}
            <br>
            {{$t('Hire.position2.p3')}}
            <br>
            {{$t('Hire.position2.p4')}}
            <br>
            {{$t('Hire.position2.p5')}}
          </p>
          <p>
            <strong>{{$t('Hire.demand')}}</strong>
            <br>
            {{$t('Hire.position2.p6')}}
            <br>
            {{$t('Hire.position2.p7')}}
            <br>
            {{$t('Hire.position2.p8')}}
            <br>
            {{$t('Hire.position2.p9')}}
          </p>
          <p>
            <strong>{{$t('Hire.email')}}</strong>
            <br>
            <el-link href="mailto:lei.deng@cybernaut.com.cn"
                     target="_blank">lei.deng@cybernaut.com.cn</el-link>
          </p>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="content-sub">
        <div class="sub1">
          <h5>{{$t('Hire.position3.ptitle')}}</h5>
          <p>{{$t('Hire.num')}}&nbsp;1</p>
        </div>
        <div class="sub2">
          <p>
            <strong>{{$t('Hire.duties')}}</strong>
            <br>
            {{$t('Hire.position3.p1')}}
            <br>
            {{$t('Hire.position3.p2')}}
            <br>
            {{$t('Hire.position3.p3')}}
            <br>
            {{$t('Hire.position3.p4')}}
          </p>
          <p>
            <strong>{{$t('Hire.demand')}}</strong>
            <br>
            {{$t('Hire.position3.p5')}}
            <br>
            {{$t('Hire.position3.p6')}}
            <br>
            {{$t('Hire.position3.p7')}}
          </p>
          <p>
            <strong>{{$t('Hire.email')}}</strong>
            <br>
            <el-link href="mailto:lei.deng@cybernaut.com.cn"
                     target="_blank">lei.deng@cybernaut.com.cn</el-link>
          </p>
        </div>
      </div>
      <el-divider></el-divider>
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
      img: require("../assets/contact.png"),
      headdown: 0,
      goback: 0,
      about: 0,
      title: 1,
      fixed: true,
      selected: '人才招聘',
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
.content h3 {
  font-size: 1.75em;
  font-weight: normal;
  margin-bottom: 1em;
  line-height: 1;
  margin: 0;
}
.content .content-sub {
  overflow: hidden;
  padding-top: 35px;
  line-height: 1;
}
.content .content-sub .sub1 {
  float: left;
  overflow: hidden;
  margin-top: 6px;
  width: 30%;
}
.content .content-sub .sub1 h5 {
  font-size: 1.333em;
  font-weight: normal;
  color: #409eff;
  margin-bottom: 20px;
  margin-top: 0px;
}
.content .content-sub .sub2 {
  float: left;
  line-height: 2.2;
  overflow: hidden;
  max-width: 700px;
}
.content .content-sub .sub2 p {
  margin-top: 0;
}
.content .content-sub .sub2 p a {
  text-decoration: none;
  color: black;
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
  .content h3 {
    font-size: 1.45em;
    font-weight: normal;
    margin-bottom: 1em;
    line-height: 1;
    margin: 0;
  }
  .content .content-sub {
    overflow: hidden;
    padding-top: 10px;
    line-height: 1;
  }
  .content .content-sub .sub1 {
    float: left;
    overflow: hidden;
    margin-top: 6px;
    width: 100%;
  }
  .content .content-sub .sub2 p {
    margin-top: 0;
    line-height: 1.8;
  }
}
</style>

