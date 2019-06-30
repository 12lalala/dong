<template>
  <div>
    <div class="banner">
      <dl>
        <dd></dd>
        <dt>{{$t('Header.h6')}}</dt>
        <dd></dd>
      </dl>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{$t('Header.h1')}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Contact' }">{{$t('Header.h6')}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <h3>{{$t('Header.h6')}}</h3>
      <br>
      <div class="map">
        <div class="amap-wrapper">
          <el-amap class="amap-box"
                   vid="map"
                   resizeEnable="true"
                   :zoom="zoom"
                   :center="center">
            <el-amap-marker vid="component-marker"
                            :position="position"></el-amap-marker>
          </el-amap>
        </div>
      </div>
      <p class="description1">{{$t('Contact.schoolname')}}</p>
      <p class="description2">
        {{$t('Contact.addr')}}{{address}}
        <br>
        {{$t('Contact.tel')}}{{tel}}
        <br>
        {{$t('Contact.fax')}}{{fax}}
        <br>
        {{$t('Contact.email')}}
        <el-link :href="email.url"
                 :underline="false"
                 target="_blank">{{email.email}}</el-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data () {
    return {
      zoom: 16,
      center: [113.875019, 22.902542],
      position: [113.875019, 22.902542],
      img: require("../assets/contact.png"),
      address: this.$t('Contact.address'),
      tel: this.$t('Contact.telephone'),
      fax: this.$t('Contact.faxaddress'),
      email: {
        email: this.$t('Contact.emailaddress'),
        url: "",
      },
    }
  }
}
</script>
<style scoped>
.map {
  height: 450px;
  overflow: hidden;
}
.amap-wrapper {
  height: 450px;
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
  background-color: #fff;
  margin-bottom: 50px;
}
.content h3 {
  font-size: 1.75em;
  font-weight: normal;
  margin-bottom: 1em;
  line-height: 1;
  margin: 0;
}
.content .description1 {
  font-weight: bold;
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 0px;
  color: #333;
}
.content .description2 {
  color: #333;
  line-height: 2;
  margin-bottom: 6px;
  margin-top: 8px;
}
/* 面包屑 */
.breadcrumb {
  max-width: 1200px;
  overflow: hidden;
  margin: 20px auto;
}
</style>

