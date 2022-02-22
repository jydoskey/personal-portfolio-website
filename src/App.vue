<template>
  <div class="app-body router-color">
  <DefaultLayout>
    <router-view></router-view>
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from "@/components/layout/DefaultLayout"
  export default {
    components: {
      DefaultLayout
    }
  }
</script>
<style lang="scss">
  @import "@/scss/vendors/themed-bootstrap.scss";
  @import "@/scss/main.scss";

  .app-body {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    min-height: 100%;
  }

  .router-color {
    background-color: black;
  }

  .app-main {
    flex: 1 0 auto;
  }
</style>