<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>投资孵化</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Investment' }">投资孵化</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="r">
        <h1>投资孵化中心</h1>
        <p>浙江大学国际创新研究院依托赛伯乐强大的投融资平台，将研究院的科技产业服务体系和赛伯乐投资的产业投资体系紧密结合，为创新科技企业特别是校友创业企业提供全方位的专业投融资服务。一方面，研究院立足于新能源领域和信息技术领域，拥有丰富的产业项目、人才、技术研发、市场等服务资源；另一方面，依托赛伯乐专业的投资服务经验，对于研究院完善投融资服务平台、提升企业投融资服务能力提供强大的知识和业务支撑。</p>
        <br>
        <br>
        <el-image style="width: 853px; height: 289px"
                  :src="url"
                  :fit="fit"></el-image>
      </div>
      <div class="l">
        <h3>产学研</h3>
        <el-divider></el-divider>
        <el-menu default-active="/Investment"
                 class="el-menu-vertical-demo"
                 router>
          <el-menu-item index="/Tech">
            <span slot="title">科创服务中心</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/International">
            <span slot="title">国际交流中心</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/Investment">
            <span slot="title">投资孵化中心</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/Industry">
            <span slot="title">产业规划中心</span>
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
      fit: 'fill',
      url: require("../assets/investment.png")
    }
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
  margin-top: 0px;
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