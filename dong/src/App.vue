<template>
  <div>
    <div class="main">
      <Header></Header>
      <div id="app">
        <el-tooltip placement="top"
                    content="回到顶部">
          <Backtotop :custom-style="myBackToTopStyle"
                     :visibility-height="300"
                     :back-position="0"
                     transition-name="fade" />
        </el-tooltip>
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Backtotop from './components/Backtotop'

export default {
  name: 'app',
  components: {
    Header, Footer, Backtotop
  },
  data () {
    return {
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        borderRadius: '4px',
        lineHeight: '45px', // 请保持与高度一致以垂直居中
        background: '#e7eaf1'// 按钮的背景颜色
      }
    }
  }
}
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
.main {
  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - 105px);
  max-width: 1920px;
}

/* 950px */
</style>
