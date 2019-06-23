<template>
  <div class="main">
    <main-header></main-header>
    <img src="./../assets/404_2.png"
         width="900px"
         height="565.3px">
  </div>
</template>
<script>
export default {
  name: "404",
  data () {
    return {
      activeIndex: "/404",
    }
  }

}
</script>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  background: #f0faff;
}

.main {
  width: 1200px;
  margin: 0 auto;
}

.header1 {
  width: 95%;
  float: left;
}

.header2 {
  width: 750px;
  float: right;
}

.logo {
  height: 50px;
  float: left;
  margin: 5px;
}
</style>
