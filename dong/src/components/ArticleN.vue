<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>最新动态</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="content">
      <div class="r">
        <iframe :src="src"
                id="article"
                name="article"
                scrolling="no"
                frameborder="0"
                width="100%"
                :height="hei + 'px'"></iframe>
        <div class="botton">
          <el-button type="text"
                     @click='showall'
                     v-show="butshow">显示全文</el-button>
        </div>
      </div>
      <div class="l">
        <h3>新闻动态</h3>
        <el-divider></el-divider>
        <el-menu default-active="2"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose">
          <el-menu-item index="1">
            <span slot="title">新闻动态</span>
            <i class="el-icon-right"></i>
          </el-menu-item>
          <el-menu-item index="2">
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
      src: '/articles/News/' + this.$route.params.id + '.html',
      hei: 500,
      butshow: true,
    }
  },
  methods: {
    showall () {
      var iframehei = 0;
      try {
        iframehei = window.frames['article'].document.body.scrollHeight;
      } catch (e) { iframehei = 500; }
      finally {
        this.hei = iframehei;
        this.butshow = false;
      }
    }
  },
  mounted () {
    this.setHei()
  }
}
</script>
<style scoped>
.botton {
  float: right;
}
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
  width: 70%;
  /* height: 488px; */
  margin-top: 0px;
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

