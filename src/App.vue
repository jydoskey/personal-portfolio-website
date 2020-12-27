<template>
  <div id="app">
    <Landing />
  </div>
</template>

<script>
  import Landing from './components/LandingPage.vue'

  export default {
    name: "App",
    components: {
      Landing
    },
    mounted() {

    },
  };
</script>

<style lang="scss">
  @import "@/scss/vendors/themed-bootstrap.scss";
  @import "@/scss/main.scss";

  th.caption {
    color: #505358;
  }
</style>