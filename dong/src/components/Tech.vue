<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>科创服务</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="content">
      <div class="r">
        <h1>科创服务中心</h1>
        <p>浙江大学国际创新研究院下设科创服务中心，围绕紫金小镇、梦想小镇、未来科技城等双创平台，围绕创业教育、创业活动、创业赛事、项目孵化、孵化成功等五大板块构建全面的双创服务体系，打造双创标杆示范区，强化区域性产业规划研究。</p>
        <br>
        <br>
        <el-image style="width: 853px; height: 475px"
                  :src="url"
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
      url: require("../assets/tech.png")
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

