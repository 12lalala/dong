<template>
  <div>
    <div class="banner">
      <dl v-show="title">
        <dd></dd>
        <dt>{{$t('Header.h4_1')}}</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">&nbsp;{{$t('Header.h1')}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('Header.h4')}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/News' }">{{$t('Header.h4_1')}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="r">
        <h1>{{$t('Header.h4_1')}}</h1>
        <el-scrollbar style="height:500px;">
          <ul class="infinite-list"
              v-infinite-scroll="load">
            <li class="content-sub"
                v-for="(article,index) in articles.slice(0, item)"
                :key="index">
              <div class="content-sub1">
                <el-image class="photo"
                          :src="article.imgurl"
                          :fit="fit"></el-image>
                <div class="word">
                  <span class="n1">
                    <router-link :to="'/article/news/' + article.articleid">{{article.title}}</router-link>
                  </span>
                  <span class="n2"><i class="el-icon-time"></i>{{article.time}}</span>
                  <span class="n3">{{article.introduction}}</span>
                </div>
              </div>
              <el-divider></el-divider>
            </li>
          </ul>
        </el-scrollbar>
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
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      fit: "fill",
      url: require("../assets/newimages/1.png"),
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
      // 列表显示数量
      item: 5,
      articles: [
        {
          articleid: "5",
          imgurl: require("../assets/newimages/1.png"),
          title: this.$t('News.articles.article5.title'),
          time: "2019-06-21",
          introduction: this.$t('News.articles.article5.introduction')
        },
        {
          articleid: "4",
          imgurl: require("../assets/newimages/1.png"),
          title: this.$t('News.articles.article4.title'),
          time: "2019-06-21",
          introduction: this.$t('News.articles.article4.introduction')
        },
        {
          articleid: "3",
          imgurl: require("../assets/newimages/1.png"),
          title: this.$t('News.articles.article3.title'),
          time: "2019-06-21",
          introduction: this.$t('News.articles.article3.introduction')
        },
        {
          articleid: "2",
          imgurl: require("../assets/newimages/1.png"),
          title: this.$t('News.articles.article2.title'),
          time: "2019-06-21",
          introduction: this.$t('News.articles.article2.introduction')
        },
        {
          articleid: "1",
          imgurl: require("../assets/newimages/1.png"),
          title: this.$t('News.articles.article1.title'),
          time: "2019-06-21",
          introduction: this.$t('News.articles.article1.introduction')
        },
      ],
    }
  },
  methods: {
    load () {
      this.item += 2
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
/* 清除rooter-link的样式 */
.n1 a {
  color: #409eff;
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
/* 滚动条 */
.el-scrollbar__wrap {
  overflow-x: hidden;
}
/* 滚动条 */
.banner {
  height: 380px;
  background-image: url("../assets/news.jpg");
  background-size: auto 100%;
  background-position: center;
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
  height: 488px;
  margin-top: 0px;
}
.infinite-list {
  list-style-type: none;
}
.content .r .content-sub {
  /* height: 146px; */
  margin-top: 25px;
  list-style-type: none;
  overflow: hidden;
}
.content .r .content-sub .content-sub1 {
  overflow: hidden;
}
.content .r .content-sub .content-sub1 .photo {
  display: block;
  float: left;
  width: 170px;
  height: 100px;
  margin-right: 30px;
  margin-top: 17px;
}
.content .r .content-sub .content-sub1 .word {
  float: left;
  max-width: 70%;
  line-height: 1.5;
}
.content .r .content-sub .content-sub1 .word .n1 {
  font-weight: bold;
}
.content .r .content-sub .content-sub1 .word .n1 a {
  font-size: 16px;
}
.content .r .content-sub .content-sub1 .word .n2 {
  color: #888;
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
}
.content .r .content-sub .content-sub1 .word .n3 {
  font-size: smaller;
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
    padding: 10.3px;
    margin: 0 auto;
    padding-bottom: 20px;
    background-color: #fff;
    overflow: hidden;
    margin-bottom: 50px;
  }
  .infinite-list {
    list-style-type: none;
    padding: 0px;
  }
  .content .r .content-sub {
    margin-top: 5px;
    list-style-type: none;
    overflow: hidden;
  }
  .content .r .content-sub .content-sub1 {
    overflow: hidden;
  }
  .content .r .content-sub .content-sub1 .photo {
    display: block;
    float: left;
    width: 100%;
    height: 200px;
  }
  .content .r .content-sub .content-sub1 .word {
    line-height: 1.5;
    max-width: 100%;
    float: left;
  }
}
</style>

