<template>
  <!-- 页尾 -->
  <div class="footer"
       v-show="footer">
    <div class="content">
      <div class="link">
        <router-link to="/DGUSTIntroduction"
                     :title="$t('Header.h2')">{{$t('Header.h2')}}</router-link>
        <el-divider direction="vertical"></el-divider>
        <router-link to="/Contact"
                     :title="$t('Header.h6')">{{$t('Header.h6')}}</router-link>
        <el-divider direction="vertical"></el-divider>
        <router-link to="/Talent"
                     :title="$t('Header.h5')">{{$t('Header.h5')}}</router-link>
        <el-divider direction="vertical"></el-divider>
        <router-link to="/"
                     :title="$t('Header.h7')">{{$t('Header.h7')}}</router-link>
        <br>
        <span class="txt">
          {{$t('Footer.addr[0]')}}&nbsp;{{$t('Footer.addr[1]')}}</span>
        <span class="txt">
          {{$t('Footer.tel[0]')}}&nbsp;{{$t('Footer.tel[1]')}}&nbsp;&nbsp;{{$t('Footer.tel[2]')}}&nbsp;{{$t('Footer.tel[3]')}}</span>
        <br>
        <span class="txt">{{$t('Footer.copyright')}}</span>
      </div>
    </div>
  </div>
  <!-- 页尾 -->
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: "Footer",
  data () {
    return {
      footer: 1,
    }
  },
  methods: {
    getDeviceCookie () {
      this.device = Cookies.get('device');
      if (this.device == 'mobile') {
        this.footer = 0;
      }
      else {
        this.footer = 1;
      }
    },
  },
  mounted () {
    this.getDeviceCookie()
  },
}
</script>


<style scoped>
.footer {
  width: 100%;
  background: #007cf8f3;
  height: 100px;
  overflow: hidden;
}
.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  font-size: 14px;
}
.link {
  color: #ffffff;
  text-align: center;
  display: block;
}
/* 清除rooter-link的样式 */
a {
  color: #ffffff;
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
/* 清除rooter-link的样式 */
.txt {
  margin: 0 auto;
  text-align: center;
}
</style>

