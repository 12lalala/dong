<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>通知公告</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Announcement' }">通知公告</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="r">
        <h1>通知公告</h1>
        <el-scrollbar style="height:500px;">
          <ul class="infinite-list"
              v-infinite-scroll="load">
            <li class="content-sub"
                v-for="(article,index) in articles.slice(0, item)"
                :key="index">
              <div class="content-sub1">
                <el-image class="photo"
                          style="width: 170px; height: 100px"
                          :src="article.imgurl"
                          :fit="fit"></el-image>
                <div class="word">
                  <span class="n1">
                    <router-link :to="'/article/announcement/' + article.articleid">{{article.title}}</router-link>
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
      <div class="l">
        <h3>新闻动态</h3>
        <el-divider></el-divider>
        <el-menu default-active="/Announcement"
                 class="el-menu-vertical-demo"
                 router>
          <el-menu-item index="/News">
            <span slot="title">最新动态</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/Announcement">
            <span slot="title">通知公告</span>
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
      fit: "fill",
      url: require("../assets/newimages/1.png"),
      item: 5,
      articles: [
        {
          articleid: "1",
          imgurl: require("../assets/newimages/1.png"),
          title: "汇聚尖端双创资源，助力海外人才引进 “造梦”白鹿城温州——全球创新创业硅谷视频路演活动成功举办",
          time: "2019-06-21",
          introduction: "6月18日，由温州市市委组织部、温州高新区(浙南科技城)管委会、温州市瓯海区人民政府主办，浙江大学国际创新研究院协办的2019“造梦”白鹿城温州——全球…"
        },
        {
          articleid: "1",
          imgurl: require("../assets/newimages/1.png"),
          title: "汇聚尖端双创资源，助力海外人才引进 “造梦”白鹿城温州——全球创新创业硅谷视频路演活动成功举办",
          time: "2019-06-21",
          introduction: "6月18日，由温州市市委组织部、温州高新区(浙南科技城)管委会、温州市瓯海区人民政府主办，浙江大学国际创新研究院协办的2019“造梦”白鹿城温州——全球…"
        },
        {
          articleid: "1",
          imgurl: require("../assets/newimages/1.png"),
          title: "汇聚尖端双创资源，助力海外人才引进 “造梦”白鹿城温州——全球创新创业硅谷视频路演活动成功举办",
          time: "2019-06-21",
          introduction: "6月18日，由温州市市委组织部、温州高新区(浙南科技城)管委会、温州市瓯海区人民政府主办，浙江大学国际创新研究院协办的2019“造梦”白鹿城温州——全球…"
        },
        {
          articleid: "1",
          imgurl: require("../assets/newimages/1.png"),
          title: "汇聚尖端双创资源，助力海外人才引进 “造梦”白鹿城温州——全球创新创业硅谷视频路演活动成功举办",
          time: "2019-06-21",
          introduction: "6月18日，由温州市市委组织部、温州高新区(浙南科技城)管委会、温州市瓯海区人民政府主办，浙江大学国际创新研究院协办的2019“造梦”白鹿城温州——全球…"
        },
        {
          articleid: "1",
          imgurl: require("../assets/newimages/1.png"),
          title: "汇聚尖端双创资源，助力海外人才引进 “造梦”白鹿城温州——全球创新创业硅谷视频路演活动成功举办",
          time: "2019-06-21",
          introduction: "6月18日，由温州市市委组织部、温州高新区(浙南科技城)管委会、温州市瓯海区人民政府主办，浙江大学国际创新研究院协办的2019“造梦”白鹿城温州——全球…"
        },
        {
          articleid: "1",
          imgurl: require("../assets/newimages/1.png"),
          title: "汇聚尖端双创资源，助力海外人才引进 “造梦”白鹿城温州——全球创新创业硅谷视频路演活动成功举办",
          time: "2019-06-21",
          introduction: "6月18日，由温州市市委组织部、温州高新区(浙南科技城)管委会、温州市瓯海区人民政府主办，浙江大学国际创新研究院协办的2019“造梦”白鹿城温州——全球…"
        },
        {
          articleid: "1",
          imgurl: require("../assets/newimages/1.png"),
          title: "汇聚尖端双创资源，助力海外人才引进 “造梦”白鹿城温州——全球创新创业硅谷视频路演活动成功举办",
          time: "2019-06-21",
          introduction: "6月18日，由温州市市委组织部、温州高新区(浙南科技城)管委会、温州市瓯海区人民政府主办，浙江大学国际创新研究院协办的2019“造梦”白鹿城温州——全球…"
        },
        {
          articleid: "1",
          imgurl: require("../assets/newimages/1.png"),
          title: "汇聚尖端双创资源，助力海外人才引进 “造梦”白鹿城温州——全球创新创业硅谷视频路演活动成功举办",
          time: "2019-06-21",
          introduction: "6月18日，由温州市市委组织部、温州高新区(浙南科技城)管委会、温州市瓯海区人民政府主办，浙江大学国际创新研究院协办的2019“造梦”白鹿城温州——全球…"
        },
        {
          articleid: "1",
          imgurl: require("../assets/newimages/1.png"),
          title: "汇聚尖端双创资源，助力海外人才引进 “造梦”白鹿城温州——全球创新创业硅谷视频路演活动成功举办",
          time: "2019-06-21",
          introduction: "6月18日，由温州市市委组织部、温州高新区(浙南科技城)管委会、温州市瓯海区人民政府主办，浙江大学国际创新研究院协办的2019“造梦”白鹿城温州——全球…"
        },
        {
          articleid: "1",
          imgurl: require("../assets/newimages/1.png"),
          title: "汇聚尖端双创资源，助力海外人才引进 “造梦”白鹿城温州——全球创新创业硅谷视频路演活动成功举办",
          time: "2019-06-21",
          introduction: "6月18日，由温州市市委组织部、温州高新区(浙南科技城)管委会、温州市瓯海区人民政府主办，浙江大学国际创新研究院协办的2019“造梦”白鹿城温州——全球…"
        },
        {
          articleid: "1",
          imgurl: require("../assets/newimages/1.png"),
          title: "汇聚尖端双创资源，助力海外人才引进 “造梦”白鹿城温州——全球创新创业硅谷视频路演活动成功举办",
          time: "2019-06-21",
          introduction: "6月18日，由温州市市委组织部、温州高新区(浙南科技城)管委会、温州市瓯海区人民政府主办，浙江大学国际创新研究院协办的2019“造梦”白鹿城温州——全球…"
        },
        {
          articleid: "1",
          imgurl: require("../assets/newimages/1.png"),
          title: "汇聚尖端双创资源，助力海外人才引进 “造梦”白鹿城温州——全球创新创业硅谷视频路演活动成功举办",
          time: "2019-06-21",
          introduction: "6月18日，由温州市市委组织部、温州高新区(浙南科技城)管委会、温州市瓯海区人民政府主办，浙江大学国际创新研究院协办的2019“造梦”白鹿城温州——全球…"
        },
        {
          articleid: "1",
          imgurl: require("../assets/newimages/1.png"),
          title: "汇聚尖端双创资源，助力海外人才引进 “造梦”白鹿城温州——全球创新创业硅谷视频路演活动成功举办",
          time: "2019-06-21",
          introduction: "6月18日，由温州市市委组织部、温州高新区(浙南科技城)管委会、温州市瓯海区人民政府主办，浙江大学国际创新研究院协办的2019“造梦”白鹿城温州——全球…"
        },
        {
          articleid: "1",
          imgurl: require("../assets/newimages/1.png"),
          title: "汇聚尖端双创资源，助力海外人才引进 “造梦”白鹿城温州——全球创新创业硅谷视频路演活动成功举办",
          time: "2019-06-21",
          introduction: "6月18日，由温州市市委组织部、温州高新区(浙南科技城)管委会、温州市瓯海区人民政府主办，浙江大学国际创新研究院协办的2019“造梦”白鹿城温州——全球…"
        },
        {
          articleid: "1",
          imgurl: require("../assets/newimages/1.png"),
          title: "汇聚尖端双创资源，助力海外人才引进 “造梦”白鹿城温州——全球创新创业硅谷视频路演活动成功举办",
          time: "2019-06-21",
          introduction: "6月18日，由温州市市委组织部、温州高新区(浙南科技城)管委会、温州市瓯海区人民政府主办，浙江大学国际创新研究院协办的2019“造梦”白鹿城温州——全球…"
        },
      ],

    }
  },
  methods: {
    load () {
      this.item += 2
    }
  }
}
</script>
<style scoped>
/* 清除rooter-link的样式 */
a {
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
  height: 488px;
  margin-top: 0px;
}
.infinite-list {
  list-style-type: none;
}
.content .r .content-sub {
  height: 146px;
  margin-top: 25px;
  list-style-type: none;
}
.content .r .content-sub .content-sub1 {
  overflow: hidden;
}
.content .r .content-sub .content-sub1 .photo {
  display: block;
  float: left;
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

