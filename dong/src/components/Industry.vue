<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>产业规划</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="content">
      <div class="r">
        <h1>产业规划中心</h1>
        <strong>科技创新·规划服务</strong>
        <p>浙江大学国际创新研究院下设区域与城市发展研究中心，专业化开展国内外区域与城市、经济与产业、社会体系、信息网络、生态环境、资源和可持续发展，区域文化和科技创新、区域协调和管理体制等多个领域和层面的研究、咨询和规划设计。通过课题研究和规划设计中的创新，探索中国区域与城市发展的理论与实践的创新之路。</p>
        <strong>产城一体·城乡统筹</strong>
        <p>在国内外区域与城市发展研究中，注重以产业为先导，使产业发展规划与城乡发展规划相辅相成，相互支撑，确保在空间发展中体现产业发展的实效性，使产业发展与城乡发展融成一体，形成产城一体化，产业和城乡协调、持续、健康地发展，真正推动产业转型升级，推动当地形成并扩大一系列新的经济增长点。</p>
        <strong>多元项目·服务地方</strong>
        <p>浙江大学国际创新研究院区域与城市发展中心课题主要来源：国家自然科学基金和社会科学规划、科技攻关等国家级研究项目；联合国所属机构、外国政府的国际合作研究项目；中央部委的研究项目；省市政府、发改委、科委的研究项目、各厅（局）级项目；以及各级地方政府、企业、社会委托的横向层面上的研究项目、规划设计；规划项目主要来源有：各级地方政府、企业、社会团体等委托的城乡规划设计项目。</p>
        <strong>学术支撑·团队强大</strong>
        <p>中国城市规划学会小城镇规划学术委员会挂靠单位为浙江大学国际创新研究院区域与城市发展中心，中心主任王士兰教授是小城镇规划学术委员会的主任委员。学术委员会荟萃着全国各省、市、自治区的众多领导、专家、学者，他们来自大专院校、科研院所、政府部门等各条战线，具有较广泛的代表性，积极开展科研、咨询、交流等学术活动，为各级地方政府服务，积累了丰硕的科研成果和宝贵经验。</p>
        <p>区域与城市发展中心同时与中国联合工程公司规划建筑设计研究院等多家单位有着良好的长期合作关系，相互之间优势互补、资源共享、积极合作，形成强大的规划、建筑、景观、咨询设计团队，共同承接大量高水平、高层次的规划设计和研究项目。</p>
        <strong>建德航空小镇产业规划案例</strong>
        <p>作为建德市的标志，横钢曾是国家二级企业，轰动一时，却在2003年倒闭，当地其它产业如千岛湖机场自运营以来也一直处于亏损状态，现有新安江玉温泉度假区尽管环境优美。建德航空小镇拟成立40亿通航旅游产业基金，支持小镇建设。通过规划建德将以通航特色盘活小镇旅游资源，打造“工业产业型+环境聚集型+活动娱乐型”三位一体的新型旅游模式，将航空运动、航空旅游、航空体验、飞行培训、温泉养生度假融为一体，推动当地休闲商业、酒店民宿、餐饮、特色教育等行业快速发展。</p>
        <br>
        <br>
        <el-image style="width: 758px; height: 261px"
                  :src="url1"
                  :fit="fit"></el-image>
        <br>
        <strong>小镇产业规划带给区域赋能价值</strong>
        <br>
        <el-image style="width: 853px; height: 398px"
                  :src="url2"
                  :fit="fit"></el-image>
      </div>
      <div class="l">
        <h3>产学研</h3>
        <el-divider></el-divider>
        <el-menu default-active="/1"
                 class="el-menu-vertical-demo"
                 router>
          <el-menu-item index="1">
            <span slot="title">科创服务中心</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">国际交流中心</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/3">
            <span slot="title">投资孵化中心</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="/4">
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
      url1: require("../assets/industry1.jpg"),
      url2: require("../assets/industry2.png")
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
</style>

