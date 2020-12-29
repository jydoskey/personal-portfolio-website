<template>
  <div id="home">
    <Landing />
  </div>
</template>

<script>
  import Landing from './components/LandingPage.vue'

  export default {
    name: "Home",
    components: {
      Landing
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