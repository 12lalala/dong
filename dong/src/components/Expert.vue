<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>专家团队</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Expert' }">专家团队</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="r">
        <h1>专家团队</h1>
        <div class="content-sub">
          <img :src="img[0]"
               alt="">
          <div class="description">
            <h2>Prof.Edison&nbsp;Tse</h2>
            <ul>
              <p>“动态管理之父”</p>
              <p>斯坦福大学终身教授</p>
              <p>斯坦福大学管理科学与工程亚太中心主任</p>
              <p>著名的人工智能公司（ADS）的创办者及董事</p>
              <p>上市公司Verity创办者及原董事</p>
              <p>“创新战略理论和创新商业模式引发新市场”研究领域最前言学者</p>
            </ul>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="content-sub">
          <img :src="img[0]"
               alt="">
          <div class="description">
            <h2>
              Prof. Gerald&nbsp;G. Fuller</h2>
            <ul>
              <p>美国国家工程院院士</p>
              <p>美国文理科学院院士</p>
              <p>美国物理科学院院士</p>
              <p>斯坦福化学工程学院教授</p>
              <p>斯坦福医学院心血管研究中心成员</p>
              <p>斯坦福本科教育研究的卓越贡献授予舵手奖章(2006年)</p>
              <p>The Fletcher Jones基金会，Fletcher Jones研究员</p>
              <p>美国康奈尔大学化学与生物分子工程Julian C. Smith讲师</p>
              <p>加州大学-圣塔芭芭拉分校Pearson讲师</p>
              <p>Gerald G. Fuller教授的研究领域在流变学和界面流体力学, 他的著作被流变学会最高奖-宾汉奖（Bingham Medal）收录。他拥有加州理工学院理学学士和博士学位，同时也是希腊克里特大学荣誉博士，比利时鲁汶大学荣誉博士。</p>
            </ul>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="content-sub">
          <img :src="img[0]"
               alt="">
          <div class="description">
            <h2>Prof. Alfred M.&nbsp;Spormann</h2>
            <ul>
              <p>斯坦福化学工程学院教授</p>
              <p>土木与环境工程学院教授</p>
              <p>斯坦福生物学名誉教授</p>
              <p>斯坦福著名研究机构Bio-x研究员</p>
              <p>斯坦福儿童健康研究院研究员</p>
              <p>Alfred 教授担任斯坦福Alfred M. Spormann实验室目负责人, Alfred在国际重要期刊中发表了127项著作成果。主要研究领域是疾病、生物能源和生物修复中的厌养微生物新城代谢。</p>
              <p>曾担任美国微生物科学院研究员, 丹麦技术大学（Danish Technical University）访问教授，是 Charles Lee Powell Foundation基金会研究奖获得者，荣获美国国家科学基金会杰出青年学者事业奖荣誉（NSF CAREER Award是美国政府奖励在基础研究领域做出突出贡献和成就的年轻有才华的科学家）。此外，他还曾担任明尼苏达州立大学生物化工和生物工艺研究院客座教授，德国科学基金会博士后研究员，荣获斯坦福大学特曼奖（Terman Fellowship Award）获得者。</p>
            </ul>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="content-sub">
          <img :src="img[0]"
               alt="">
          <div class="description">
            <h2>Mary&nbsp;Fuller</h2>
            <ul>
              <p>美国圣母大学法学院法律博士</p>
              <p>北亚利桑那大学电机工程学士学位</p>
              <p>法律博士美国最为昂贵和含金量最高的学位之一</p>
              <p>现担任美国ASSIA公司的法律总顾问以及公司总裁秘书，有30年的高新技术行业相关从业经验。曾担任美国著名半导体公司美信集成首席法务顾问，为公司管理层提供解决专利，著作，商标，知识产权诉讼等知识产权方案，以及经营许可，并购，政策等商业合同指导和服务。</p>
            </ul>
          </div>
        </div>
        <el-divider></el-divider>
      </div>
      <div class="l">
        <h3>智库专家</h3>
        <el-divider></el-divider>
        <el-menu default-active="/Expert"
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

