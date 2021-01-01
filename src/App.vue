<template>
  <div class="app-body">
      <router-view></router-view>
  </div>
</template>

<script>
  export default{
  }

</script>

<style lang="scss">
  @import "@/scss/vendors/themed-bootstrap.scss";
  @import "@/scss/main.scss";

   .app-body{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    min-height: 100vh;
  }
  .app-main{
    flex: 1 0 auto;
  }
</style>