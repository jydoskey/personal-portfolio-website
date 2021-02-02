<template>
  <div class="app-body">
    <landing-page />
    <work />
    <about-me />
    <specialisation />
    <contact />
  </div>
</template>

<script>
  import Work from '@/components/Work'
  import AboutMe from '@/components/About'
  import Specialisation from '@/components/Specialisation'
  import Contact from '@/components/Contact'
  import LandingPage from '@/components/LandingPage.vue'
  export default {
    components: {
      LandingPage,
      Work,
      AboutMe,
      Specialisation,
      Contact
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
    min-height: 100vh;
    background-color: black;
  }

  .app-main {
    flex: 1 0 auto;
  }
</style>