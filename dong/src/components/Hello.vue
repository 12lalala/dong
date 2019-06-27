<template>
  <div>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
    <!-- 跑马灯 -->
    <div class="carousel">
      <el-carousel :interval="5000"
                   arrow="always"
                   :height="bannerH + 'px'">
        <el-carousel-item v-for="(img,index) in imgList"
                          :key="index">
          <img class="img2"
               :src="img.url"
               ref="imgHeight">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 分类 -->
    <div class="part1 content">
      <ul>
        <a href="/page/page13.html"
           target="_self">
          <dl>
            <dt>
              <img :src="imgCard[0]"
                   alt="科创服务中心">
            </dt>
            <dd>
              <h5>科创服务中心</h5>
              <p>
                建设全方位双创服务体系<br>打造双创标杆示范区
              </p>
            </dd>
          </dl>
        </a>
      </ul>
      <ul>
        <a href="/page/page14.html"
           target="_self">
          <dl>
            <dt>
              <img :src="imgCard[1]"
                   alt="国际交流中心">
            </dt>
            <dd>
              <h5>国际交流中心</h5>
              <p>提供赴海外创新创业教育服务</p>
            </dd>
          </dl>
        </a>
      </ul>
      <ul>
        <a href="/page/page15.html"
           target="_self">
          <dl>
            <dt>
              <img :src="imgCard[2]"
                   alt="投资孵化中心">
            </dt>
            <dd>
              <h5>投资孵化中心</h5>
              <p>依托赛伯乐强大的投融资平台</p>
            </dd>
          </dl>
        </a>
      </ul>
      <ul>
        <a href="/page/page16.html"
           target="_self">
          <dl>
            <dt>
              <img :src="imgCard[3]"
                   alt="产业规划中心">
            </dt>
            <dd>
              <h5>产业规划中心</h5>
              <p>
                探索中国区域与城市发展的理论<br>与实践的创新之路
              </p>
            </dd>
          </dl>
        </a>
      </ul>
      <p class="clear"></p>
    </div>
    <!-- 卡片 -->
    <div class="cards">
      <div>
        <div class="card">
          <h2>关于我们</h2>
          <el-card class="box-card"
                   :body-style="{ padding: '15px' }"
                   shadow="hover">
            <div>
              <el-image style="width: 550px; height: 250px"
                        :src="aboutimage"
                        :fit="fit"></el-image>
              <div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{abouttxt}}</span><br>
                <el-link href="/1"
                         :underline="false"
                         type="primary"
                         style="float: right; padding: 3px 0">详情<i class="el-icon-d-arrow-right"></i></el-link>
              </div>
            </div>
          </el-card>
        </div>
        <div class="card">
          <h2>最新动态</h2>
          <el-card class="box-card"
                   :body-style="{ padding: '15px' }"
                   shadow="hover">
            <div>
              <div class="block">
                <el-carousel height="300px">
                  <el-carousel-item v-for="(img,index) in dynamic"
                                    :key="index">
                    <el-image style="width: 550px; height: 300px"
                              :src="img.url"
                              :fit="fit"></el-image>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="link"
                   v-for="(title,index) in titles"
                   :key="index">
                <el-link :href="title.url"
                         target="_blank"
                         :underline="false"
                         icon="el-icon-right">{{title.title}}</el-link>
                <span>{{title.time}}</span>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hello",
  data () {
    return {
      bannerH: 343,
      imgList: [
        { url: require("../assets/hello.jpg") },
        { url: require("../assets/hello.jpg") },
        { url: require("../assets/hello.jpg") }
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
      abouttxt: "浙江大学国际创新研究院创是浙江大学下设的民办非企业研究院，由赛伯乐投资集团筹资发起成立。作为国际性的创新创业平台，依托浙江大学和赛伯乐的资源及资金优势，研究院以“锻造国际产学研合作创新链、助推创新生态营造与区域经济发展……",
      titles: [
        { title: "浙江大学国际创新研究院和瑞士洛桑大学高等经济商学院签订...", time: "2019-04-02", url: "" },
        { title: "中瑞企业创新发展对话—中欧对话制高点 瑞士洛桑中国经济金...", time: "2019-02-18", url: "" },
        { title: "“创新•匠心”中日大学携手资本探讨科技创新 暨 浙江大学国...", time: "2019-02-15", url: "" },
      ],
      aboutimage: require("../assets/about_pic.png")
    }
  },
  methods: {
    setBannerH () {
      this.bannerH = document.body.clientWidth / 3.5
    }
  },
  mounted () {
    this.setBannerH()
    window.addEventListener('resize', () => {
      this.setBannerH()
    }, false)
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
/* 清除rooter-link的样式 */
a {
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
    font-size: 1.25em;
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
    margin: 20px auto;
    overflow: hidden;
  }
  .cards div {
    max-width: 600px;
    margin: 0 auto;
  }
  .card {
    max-width: 600px;
    margin: 20px 5px auto;
    float: left;
  }
}
</style>