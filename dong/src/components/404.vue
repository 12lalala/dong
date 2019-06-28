<template>
  <div class="main">
    <div class="four">
      <el-image style="width: 1000px; height: 660px"
                :src="img"
                :fit="fit"></el-image>
    </div>
  </div>
</template>
<script>
export default {
  name: "404",
  data () {
    return {
      fit: "fill",
      activeIndex: "/404",
      img: require('../assets/404_2.png')
    }
  }

}
</script>

<style scoped>
.main {
  width: 1200px;
}
.four {
  margin: 0 auto;
}
</style>
