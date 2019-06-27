<template>
  <div class="amap-wrapper">
    <el-amap class="amap-box"
             vid="map"
             :zoom="zoom"
             :center="center">
    </el-amap>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  data () {
    return {
      zoom: 16,
      center: [121.406051, 31.179695],

    }

  }
}
</script>



