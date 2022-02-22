<template>
  <section id="landing">
    <!-- <header class="app-header">
      <div class="container align-items-center">
        <div class="app-header__content">
          <Navigation :isNavActive="navStatus" @closeNav="closeNavigation()" />
          <button class="toggle-navigation" @click="openNavigation()">
            <span class="fas fa-bars text-white"></span>
          </button>
        </div>
        <a href="#contact">
          <button class="btn bg-transparent ml-auto btn-hire">Hire Me</button>
        </a>
      </div>
    </header> -->
    <slot />
    <Footer />
  </section>
</template>

<script>
//   import Navigation from '@/components/nav/Navigation';
  import Footer from "@/components/Footer"
  export default {
    name: 'default-layout',
    components: {
    //   Navigation,
      Footer
    },
    data() {
      return {
        navStatus: false
      }
    },
    methods: {
      openNavigation() {
        this.navStatus = true;
      },
      closeNavigation() {
        this.navStatus = false;
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/variables.scss";
  @import "@/scss/abstracts/mixins.scss";

  a:link {
    text-decoration: none;
  }

  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 50;
    background-color: RGB(0, 0, 0, 0.3);

    &>.container {
      display: flex;
      justify-content: space-between;
      padding: 0;
    }
  }

  // ===========MOBILE HEADER ================
  @include breakpoint-max(lg) {

    .app-header {
      animation: none !important;
    }

    .toggle-navigation {
      display: block;
      padding: 1.125rem 1rem;
      border: 0;
      background: transparent;
      outline: none;
      color: grey;

      &>span {
        display: inline-block;
        line-height: 1.75rem;
        font-size: 1rem;
        font-weight: bold;

        &:first-of-type {
          margin-right: .25rem;
        }
      }
    }

    .btn-hire {
      display: none;
    }
  }

  .container {
    @include breakpoint-min(sm) {
      min-width: 540px;
      max-width: calc(100% - 70px);
    }

    @include breakpoint-min(md) {
      max-width: calc(100% - 108px);
      min-width: 720px;
    }

    @include breakpoint-min(lg) {
      min-width: 960px;
    }

    @media (min-width: 1440px) {
      max-width: 1300px;
    }
  }

  // ==========DESKTOP HEADER =============
  @include breakpoint-min(lg) {
    .toggle-navigation {
      display: none;
    }

    .btn-hire {
      width: 8.9375rem;
      height: 2.9375rem;
      padding-top: 0.9rem;
      border: 1px solid #009D9D;
      color: white;
      display: block;

      &:hover {
        color: #009D9D;
        border: 1px solid white;
      }
    }
  }
</style>