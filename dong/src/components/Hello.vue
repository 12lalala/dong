<template>
  <div>
    <!-- 跑马灯 -->
    <div class="carousel">
      <el-carousel :interval="5000"
                   arrow="always"
                   :height="bannerH + 'px'">
        <el-carousel-item v-for="(img,index) in imgList"
                          :key="index">
          <el-image class="img2"
                    :src="img.url"
                    :fit="fit"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 分类 -->
    <div class="part1 content">
      <ul>
        <router-link to="/Tech"
                     :title="$t('Hello.p1m')">
          <dl>
            <dt>
              <img style="object-fit: cover; width: 280px; height: 170px;"
                   :src="imgCard[0]"
                   :alt="$t('Hello.p1')">
            </dt>
            <dd>
              <h5>{{$t('Hello.p1')}}</h5>
            </dd>
          </dl>
        </router-link>
      </ul>
      <ul>
        <router-link to="/International"
                     :title="$t('Hello.p2m')">
          <dl>
            <dt>
              <img style="object-fit: cover; width: 280px; height: 170px;"
                   :src="imgCard[1]"
                   :alt="$t('Hello.p2')">
            </dt>
            <dd>
              <h5>{{$t('Hello.p2')}}</h5>
            </dd>
          </dl>
        </router-link>
      </ul>
      <ul>
        <router-link to="/Investment"
                     :title="$t('Hello.p3m')">
          <dl>
            <dt>
              <img style="object-fit: cover; width: 280px; height: 170px;"
                   :src="imgCard[2]"
                   :alt="$t('Hello.p3')">
            </dt>
            <dd>
              <h5>{{$t('Hello.p3')}}</h5>
            </dd>
          </dl>
        </router-link>
      </ul>
      <ul>
        <router-link to="/Industry"
                     :title="$t('Hello.p4m')">
          <dl>
            <dt>
              <img style="object-fit: cover; width: 280px; height: 170px;"
                   :src="imgCard[3]"
                   :alt="$t('Hello.p4')">
            </dt>
            <dd>
              <h5>{{$t('Hello.p4')}}</h5>
            </dd>
          </dl>
        </router-link>
      </ul>
      <p class="clear"></p>
    </div>
    <!-- 卡片 -->
    <div class="cards">
      <div>
        <div class="card">
          <h2>&nbsp;&nbsp;{{$t('Header.h2')}}</h2>
          <el-card class="box-card"
                   :body-style="{ padding: '15px' }"
                   shadow="hover">
            <div>
              <el-image class="cardimg"
                        :src="aboutimage"
                        :fit="fit"></el-image>
              <div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{abouttxt}}</span><br>
                <el-link href="/IICIntroduction"
                         :underline="false"
                         type="primary"
                         style="float: right; padding: 3px 0">{{$t('Hello.more')}}<i class="el-icon-d-arrow-right"></i></el-link>
              </div>
            </div>
          </el-card>
        </div>
        <div class="card"
             v-show="cardpc">
          <h2>&nbsp;&nbsp;{{$t('Header.h4_1')}}</h2>
          <el-card class="box-card"
                   :body-style="{ padding: '15px' }"
                   shadow="hover">
            <div>
              <div class="block">
                <el-carousel height="300px">
                  <el-carousel-item v-for="(img,index) in dynamic"
                                    :key="index">
                    <el-image class="cardimg"
                              :src="img.url"
                              :fit="fit"></el-image>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="link"
                   v-for="(title,index) in titles"
                   :key="index">
                <el-link :href="url"
                         :underline="false"
                         icon="el-icon-right">{{title.titlepc}}</el-link>
                <span>{{title.time}}</span>
              </div>
            </div>
          </el-card>
        </div>
        <div class="card"
             v-show="cardmb">
          <h2>&nbsp;&nbsp;{{$t('Header.h4_1')}}</h2>
          <el-card class="box-card"
                   :body-style="{ padding: '15px' }"
                   shadow="hover">
            <div>
              <div class="block">
                <el-carousel height="200px">
                  <el-carousel-item v-for="(img,index) in dynamic"
                                    :key="index">
                    <el-image class="cardimg"
                              :src="img.url"
                              :fit="fit"></el-image>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="link"
                   v-for="(title,index) in titles"
                   :key="index">
                <el-link :href="url"
                         :underline="false"
                         icon="el-icon-right">{{title.titlemb}}</el-link>
                <span>{{title.time}}</span>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <div class="friendLinks"
         v-show="frindlink">
      <div class="container">
        <div class="row">
          <div class="col-xs-2">
            <div class="linksTitle">友情链接 <span>Links</span></div>
            <div style="position: absolute;left: 124px; width: 30px;top: 75px;height: 4px;background: #f5874a"></div>
          </div>

          <div class="col-xs-2 list1">
            <ul>
              <li><a href="http://sw.dgut.edu.cn/">计算机与网络安全学院</a></li>
              <li><a href="http://172.31.5.17/">电子工程与智能化学院</a></li>
              <li><a href="http://hshx.dgut.edu.cn/">化学工程与能源技术学院</a></li>
              <li><a href="http://jxx.dgut.edu.cn/">机械工程学院</a></li>
              <li><a href="http://jmx.dgut.edu.cn/">经济与管理学院</a></li>
              <li><a href="http://wch.dgut.edu.cn/">文学与传媒学院</a></li>
              <li><a href="http://zfx.dgut.edu.cn/">法律与社会工作学院</a></li>
              <li><a href="http://zfx.dgut.edu.cn/">（知识产权学院）</a></li>
              <li><a href="http://sf.dgut.edu.cn/">教育学院（师范学院）</a></li>
              <li><a href="http://civil.dgut.edu.cn/">生态环境与建筑工程学院</a></li>
              <li><a href="http://cjy.dgut.edu.cn/">继续教育学院</a></li>
              <li><a href="http://szb.dgut.edu.cn">思想政治理论教学部</a></li>
            </ul>
          </div>

          <div class="col-xs-2 list2">
            <ul>
              <li><a href="http://yb.dgut.edu.cn/">学校办公室</a></li>
              <li><a href="http://zzb.dgut.edu.cn/">党委组织部</a></li>
              <li><a href="http://eelab.dgut.edu.cn/">党委宣传部</a></li>
              <li><a href="http://sjc.dgut.edu.cn/">审计监察部</a></li>
              <li><a href="http://eelab.dgut.edu.cn/">人事处</a></li>
              <li><a href="http://jwc.dgut.edu.cn">教务处</a></li>
              <li><a href="http://xsc.dgut.edu.cn/">学生处</a></li>
              <li><a href="http://scitech.dgut.edu.cn/">科研处</a></li>
              <li><a href="http://gjc.dgut.edu.cn/">国际合作与交流处</a></li>
              <li><a href="http://eelab.dgut.edu.cn/">财务处</a></li>
              <li><a href="http://eelab.dgut.edu.cn/">资产后勤管理处</a></li>
              <li><a href="http://bwc.dgut.edu.cn/">保卫处</a></li>
              <li><a href="http://gh.dgut.edu.cn/">工会</a></li>
              <li><a href="http://tw.dgut.edu.cn/">团委</a></li>
            </ul>
          </div>

          <div class="col-xs-2 list3">
            <ul>
              <li><a href="http://xyh.dgut.edu.cn/">学科建设管理办公室</a></li>
              <li><a href="http://xyh.dgut.edu.cn/">发展与联络办公室</a></li>
              <li><a href="http://eelab.dgut.edu.cn/">高教研究与评估中心</a></li>
              <li><a href="http://eelab.dgut.edu.cn/">协同创新办公室</a></li>
              <li><a href="http://eelab.dgut.edu.cn/">教师发展中心</a></li>
              <li><a href="http://eelab.dgut.edu.cn/">学生事务与发展中心</a></li>
              <li><a href="http://gcxq.dgut.edu.cn/">莞城校区管委会</a></li>
            </ul>
          </div>

          <div class="col-xs-2 list3">
            <ul>
              <li><a href="http://xyh.dgut.edu.cn/">科技创新研究院</a></li>
              <li><a href="http://www.lib.dgut.edu.cn/">图书馆</a></li>
              <li><a href="http://nic.dgut.edu.cn/">网络与教育技术中心</a></li>
              <li><a href="http://dglg.cbpt.cnki.net">学报编辑部</a></li>
              <li><a href="http://eelab.dgut.edu.cn/">工程技术研究院</a></li>
              <li><a href="http://shyjy.dgut.edu.cn/">社会发展研究院</a></li>
              <li><a href="http://eelab.dgut.edu.cn/">广东高校化工清洁生产与绿色化学品工程技术开发中心</a></li>
              <li><a href="http://eelab.dgut.edu.cn/">广东高校网络与信息安全工程技术开发中心</a></li>
              <li><a href="http://www.dgcp.org/">东莞市清洁生产科技中心</a></li>
            </ul>
          </div>

          <div class="col-xs-2 list3">
            <ul>
              <li><a href="http://houqin.dgut.edu.cn/">后勤集团</a></li>
              <li><a href="http://kjcy.dgut.edu.cn/">科技产业公司</a></li>
              <li><a href="http://eelab.dgut.edu.cn/">学术交流中心</a></li>
              <li><a href="http://eelab.dgut.edu.cn/">体育场馆中心</a></li>
            </ul>
          </div>

        </div>
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
  name: "Hello",
  data () {
    return {
      url: "./News",
      fit: "cover",
      fixed: true,
      about: 0,
      selected: '首页',
      device: '',
      headdown: 0,
      goback: 0,
      frindlink: 1,
      cardpc: 1,
      cardmb: 0,
      bannerH: 343,
      downabout: [
        './Contact',
        './Talent',
      ],
      imgList: [
        { url: require("../assets/hello1.jpg") },
        { url: require("../assets/hello1.jpg") },
        { url: require("../assets/hello1.jpg") }
      ],
      imgCard: [
        require("../assets/imgcard1.png"),
        require("../assets/imgcard2.png"),
        require("../assets/imgcard3.png"),
        require("../assets/imgcard4.png")
      ],
      dynamic: [
        { url: require("../assets/dynamic/1.png") },
        { url: require("../assets/dynamic/2.png") },
        { url: require("../assets/dynamic/3.jpg") },
        { url: require("../assets/dynamic/4.jpg") },
      ],
      abouttxt: this.$t('Hello.card.about.abouttxt'),
      titles: [
        { titlepc: this.$t('Hello.card.titlespc[0]'), titlemb: this.$t('Hello.card.titlesmb[0]'), time: "2019-04-02", },
        { titlepc: this.$t('Hello.card.titlespc[1]'), titlemb: this.$t('Hello.card.titlesmb[1]'), time: "2019-02-18", },
        { titlepc: this.$t('Hello.card.titlespc[2]'), titlemb: this.$t('Hello.card.titlesmb[2]'), time: "2019-02-15", },
      ],
      aboutimage: require("../assets/about_pic.png"),
    }
  },
  methods: {
    setBannerH () {
      this.bannerH = document.body.clientWidth / 3.5
    },
    getDeviceCookie () {
      this.device = Cookies.get('device');
      if (this.device == 'mobile') {
        this.headdown = 1;
        this.about = 1;
        this.goback = 1;
        this.cardmb = 1;
        this.cardpc = 0;
        this.frindlink = 0;
      }
      else {
        this.goback = 0;
        this.headdown = 0;
        this.about = 0;
        this.cardmb = 0;
        this.cardpc = 1;
        this.frindlink = 1;
      }
    },

  },
  mounted () {
    this.setBannerH()
    window.addEventListener('resize', () => {
      this.setBannerH()
    }, false)
    this.getDeviceCookie()
  },
  created () { }
}
</script>

<style scoped>
/* 跑马灯 */
.carousel {
  overflow: hidden;
}

.img1 {
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
.img2 {
  max-width: 100%;
  max-height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/* 清除router-link的样式 */
ul a {
  color: #ffffff;
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
/* 分类 */
ul,
li,
ol {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}
a img,
img {
  border: none;
  vertical-align: middle;
}
.content img {
  max-width: 100%;
}
a:link,
a:visited {
  text-decoration: none;
  color: #333;
}
.content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  display: block;
}
.part1 {
  padding: 4em 0;
  overflow: hidden;
}
.part1 ul {
  width: 25%;
  float: left;
}
.part1 ul dl {
  width: 94%;
  margin: 0 auto;
  position: relative;

  overflow: hidden;
}

.part1 ul dd {
  position: absolute;
  top: 30%;
  left: 0;
  width: 100%;
  z-index: 12;
  text-align: center;
  color: #fff;
  margin-left: 0;
}
.part1 ul a dd h5 {
  font-size: 1.75em;
  margin-bottom: 0.35em;
  font-weight: normal;
  color: #fff;
  margin-top: 0;
}
.part1 ul a img {
  transition: all 0.3s;
}
.part1 ul a:hover img {
  transform: scale(1.1);
  transition: all 0.3s;
}
/* 卡片 */
.cards {
  max-width: 1200px;
  margin: 50px auto;
  overflow: hidden;
}
.card {
  max-width: 600px;
  margin: 20px 5px auto;
  float: left;
  overflow: hidden;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 580px;
}
.link el-link {
  float: left;
}
.link span {
  float: right;
  color: #8b9aaf;
  font-size: 12px;
  padding-top: 4px;
}
.headdown {
  position: absolute;
  z-index: 100;
}
/* .about {
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
} */
/* 友情链接 */
.friendLinks {
  width: 100%;
  margin-top: 35px;
  height: 500px;
  background-color: #f5f5f5;
  overflow: hidden;
}
/* .container {
  width: 1230px !important;
} */
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 1230px;
  overflow: hidden;
}
.friendLinks > .container {
  position: relative;
  bottom: -17px;
  background: url("../assets/footer_bg.jpg") no-repeat;
  background-position: -345px 20px;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.row ol,
ul {
  margin-top: 0;
  margin-bottom: 10px;
}
.col-xs-2 {
  width: 16.66666667%;
}
.friendLinks .list1,
.list2,
.list3 {
  margin-top: 53px;
}
.linksTitle {
  width: 180px;
  margin-top: 47px;
  margin-right: 170px;
  font-size: 25px;
  font-family: PingFangSC, 微软雅黑;
  color: rgb(46, 126, 185);
}
.linksTitle span {
  font-family: 微软雅黑;
  vertical-align: super;
  font-size: 14px;
}
.friendLinks ul li {
  list-style: none;
  line-height: 30px;
}
.friendLinks a {
  color: #000;
}
.col-xs-1,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9 {
  float: left;
}
@media only screen and (max-width: 1200px) and (min-width: 830px) {
  /* 分类 */
  ul,
  li,
  ol {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
  }
  a img,
  img {
    border: none;
    vertical-align: middle;
  }
  .content img {
    max-width: 100%;
  }
  a:link,
  a:visited {
    text-decoration: none;
    color: #333;
  }
  .content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
    display: block;
  }
  .part1 {
    padding: 4em 0;
    overflow: hidden;
  }
  .part1 ul {
    width: 25%;
    float: left;
  }
  .part1 ul dl {
    width: 94%;
    margin: 0 auto;
    position: relative;
  }
  .part1 ul dd {
    position: absolute;
    top: 30%;
    left: 0;
    width: 100%;
    z-index: 12;
    text-align: center;
    color: #fff;
    margin-left: 0;
  }
  .part1 ul a dd h5 {
    font-size: 1.25em;
    margin-bottom: 0.35em;
    font-weight: normal;
    color: #fff;
    margin-top: 0;
  }
  .part1 ul a dd p {
    font-size: 0.25em;
  }
  .part1 ul a img {
    transition: all 0.3s;
  }
  .part1 ul a:hover img {
    transform: scale(1.1);
    transition: all 0.3s;
  }
  /* 卡片 */
  .cards {
    max-width: 1000px;
    margin: 20px auto;
    overflow: hidden;
  }
  .cards div {
    max-width: 600px;
    margin: 0 auto;
  }
  .card {
    max-width: 600px;
    margin: 0 auto;
    float: left;
    overflow: hidden;
  }
}
@media only screen and (max-width: 830px) {
  .carousel {
    margin-top: 50px;
    overflow: hidden;
  }
  /* 分类 */
  ul,
  li,
  ol {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
  }
  a img,
  img {
    border: none;
    vertical-align: middle;
  }
  .content img {
    max-width: 100%;
  }
  a:link,
  a:visited {
    text-decoration: none;
    color: #333;
  }
  .content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
    display: block;
  }
  .part1 {
    padding: 2em 0;
  }

  .part1 ul {
    width: 50%;
    margin-bottom: 1em;
  }
  .part1 ul a dd h5 {
    font-size: 1em;
    margin-bottom: 0.35em;
    font-weight: normal;
    color: #fff;
    margin-top: 0;
  }
  .part1 ul a dd p {
    font-size: 0.25em;
  }
  .cards {
    max-width: 1000px;
    margin: 0px auto;
    overflow: hidden;
    margin-bottom: 60px;
  }
  .cards div {
    max-width: 100%;
    margin: 0 auto;
  }
  .card {
    max-width: 100%;
    margin: 20px 0px auto;
    float: left;
  }
  .cardimg {
    width: 100%;
    height: 200px;
  }
  /* .about {
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
    margin-bottom: 60px;
  } */
}
</style>