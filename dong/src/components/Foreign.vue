<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>海外合伙</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Foreign' }">海外合伙</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="r">
        <h1>海外合伙人</h1>
        <div class="content-sub">
          <img :src="img[0]"
               alt="">
          <div class="description">
            <h2>Qi&nbsp;Wang</h2>
            <ul>
              <p>浙江大学国际创新研究院海外创新中心合伙人，毕业于新加坡南洋理工大学工程学机械工程。现为诚亚资本管理有限公司高管，作为私人投资者管理着数只中型基金，投资领域涉及信息技术、高科技制造、移动支付、多媒体协作平台、数字营销和人工智能等。</p>
              <br>
              <p>QiWang，partner of Zhejiang University Innovation Institute International(ZIII) overseas innovation center,she graduated from Nanyang Technological University , Singapore with a bachelor degree of Mechanical Engineering. She serves as a Private Investor at Honesta Capital Management Ltd.,and manages several medium-size funds forthe investments in the areas of Information Technology,High-tech Manufacturing, Mobile Payment, Multimedia Collaboration Platforms, Digital Marketing and Artificial Intelligence.</p>
            </ul>
          </div>
        </div>
        <el-divider></el-divider>
      </div>
      <div class="l">
        <h3>智库专家</h3>
        <el-divider></el-divider>
        <el-menu default-active="/Foreign"
                 class="el-menu-vertical-demo"
                 router>
          <el-menu-item index="/Expert">
            <span slot="title">专家团队</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/Pioneer">
            <span slot="title">创业导师</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/Foreign">
            <span slot="title">海外合伙人</span>
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
      img: [
        require("../assets/head.jpg"),
      ]
    }
  }
}
</script>
<style scoped>
.banner {
  height: 380px;
  background-image: url("../assets/think.png");
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
.content .content-sub {
  overflow: hidden;
}
.content .content-sub img {
  float: left;
  margin-right: 40px;
}
.content .content-sub .description {
  float: left;
  max-width: 590px;
}
.content .content-sub .description h2 {
  margin: 0;
  font-weight: 400;
}
.content .content-sub .description ul {
  padding: 0;
}
/* 面包屑 */
.breadcrumb {
  max-width: 1200px;
  overflow: hidden;
  margin: 20px auto;
}
</style>

