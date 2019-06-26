<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>人才招聘</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="content">
      <div class="r">
        <h3>ZIII简介</h3>
        <p>浙江大学国际创新研究院(Zhejiang University Innovation Institute International，英文简称ZIII）是由浙江大学和赛伯乐集团于2007年共同发起建立的国际性创新创业平台。依托浙江大学和赛伯乐的资源及资金优势，研究院以“锻造国际产学研合作创新链、助推创新生态营造与区域经济发展”为宗旨，以服务三浙、推动三化为使命，致力于发展成为世界一流水平的科技与产业创新的研发机构。外引以美国斯坦福大学为代表的世界一流大学和以美国硅谷为代表的高水平创新资源，内联正在寻求国际化与产业创新机遇的浙商企业，通过自主创新和集成创新全面提升浙江大学及浙江省在国际创新链中的地位，探索出一种从大学国际化到区域现代化、从技术创新到产业创新、从企业区块集群到营建全球创新联盟的新颖发展模式，从而为浙江经济科技的发展探索新的成长之路。</p>
        <p>研究院将依靠浙大丰富的学术资源充分进行跨学科交叉，培养有责任感的和创业精神的国际商业领袖，孵化培育新一代国际领军企业。通过国际创业交流、创新创业孵化、全球实习就业等活动为浙江大学的学生服务；通过科研成果转化、项目基金投资、全球资源整合、国际科研交流、区域产业规划等手段为浙江大学的老师服务；通过校友国际并购、对接百城众创资源、对接赛伯乐全球基金等形式为浙江大学的校友服务。研究院将以紫金众创小镇的国际化建设为契机，大力引入国际资本及国际企业，同时助推优秀项目进军国际市场。</p>
        <p>基于国际创新资源的汇聚交融优势，浙江大学国际创新研究院从功能上定位于“三个平台”：</p>
        <p>1、国际产学研项目合作及产业化平台</p>
        <p>引进、整合以美国加州硅谷、斯坦福大学为代表的全球创新资源，打造创新基地，在技术创新与产品创新的基础上，侧重于市场创新与跨行业、跨领域的创新协作，围绕模式创新、规则创新、资源重组与系统集成等方面开展国际合作与产业服务，逐步营建接轨国际的产学研创新体系。</p>
        <p>2、国际化创新型人才交流与培育平台</p>
        <p>引进国际一流专家、学者加盟浙大创新研究院，领衔创新研发团队，带动国际学术交流与合作；联手世界高水平大学与研究机构，面向学校和企业开展国际化、创新型产业领袖人才的培养与训练。</p>
        <p>3、浙商企业创新创业支撑与服务平台</p>
        <p>以浙江大学国际创新研究院为核心，建设与企业密切结合的国际化研发机构集群，提供高价值的新技术和先进的商业模式；结合国内外风险投资与科技金融，建立面向全球的金融创新支撑平台，通过资本市场激励创新并培育创新企业；建设国际一流的产学研一体化的创新示范基地，协助浙商企业实现产业结构调整与升级，指导和引导以现代服务业为核心的价值再造，提升民营经济发展水平，逐步在全球形成具有强大竞争力的区域创新战略联盟。</p>
      </div>
      <div class="l">
        <h3>关于我们</h3>
        <el-divider></el-divider>
        <el-menu default-active="2"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose">
          <el-menu-item index="1">
            <span slot="title">DGUST简介</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">DGUST团队</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">组织构架</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">合作伙伴</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="5">
            <span slot="title">协议伙伴</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
        </el-menu>

      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: require("../assets/contact.png")
    }
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
  margin-bottom: 10px;
}
</style>

