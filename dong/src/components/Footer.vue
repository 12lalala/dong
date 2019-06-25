<template>
  <!-- 页尾 -->
  <div class="footer">
    <div class="link">
      <a href="/"
         title="关于我们">关于我们</a>
      " | "
      <a href="#"
         title="联系我们">联系我们</a>
      " | "
      <a href=""
         title="合作伙伴">合作伙伴</a>
      " | "
      <a href=""
         title="人才招聘">人才招聘</a>
      " | "
      <a href=""
         title="返回首页">返回首页</a>
      <br>
    </div>
  </div>
  <!-- 页尾 -->
</template>

<script>
export default {
  name: "Footer",

}
</script>


<style scoped>
.footer {
  width: 100%;
  background: #409eff;
  height: 80px;
}

.link {
  color: #ffffff;
}

a:link {
  text-decoration: none;
}
</style>

