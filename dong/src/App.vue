<template>
  <div>
    <div class="main">
      <Header></Header>
      <div id="app">
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    Header, Footer
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
  min-height: calc(100vh - 80px);
}
/* 950px */
</style>
