<template>
  <section class="landing">
    <header class="app-header">
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
    </header>
    <picture>
      <source media="(max-width:768px)" srcset="@/assets/hero-image-mobile.png">
      <img class="hero-image" src="@/assets/hero-image.png" alt="hero-image">
    </picture>
    <div class="hero-text ml-0">
      <h1 class="hero-header heading-1">Hi, !'m Jide. A Frontend Developer Based in Lagos, Nigeria.</h1>
      <p class="caption hero-description pt-4">Passionate about turning abstract web ideas into visual reality,
        experienced with all the stages of software development cycle. Possess an adequate knowledge of web
        technologies
        and
        agile methodology.</p>
      <a href="#projects">
        <button class="btn bg-transparent btn-portfolio">Portfolio</button>
      </a>
    </div>
    <div>
      <Work />
      <AboutMe />
      <Specialisation />
      <Contact />
    </div>
  </section>
</template>

<script>
  import Navigation from '@/components/nav/Navigation'
  import Work from '@/components/Work'
  import AboutMe from '@/components/About'
  import Specialisation from '@/components/Specialisation'
  import Contact from '@/components/Contact'
  export default {
    name: 'LandingPage',
    components: {
      Navigation,
      Work,
      AboutMe,
      Specialisation,
      Contact
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
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/variables.scss";
  @import "@/scss/abstracts/mixins.scss";

  a:link {
    text-decoration: none;
  }

  .landing {
    background-color: black;
  }

  .hero-image {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    position: relative;
    overflow: hidden;
    object-fit: cover;
    background-size: cover;
  }

  .hero-text {
    color: white;
    position: absolute;

    @include breakpoint-max (lg) {
      top: 14rem;
    }

    @include breakpoint-max (md) {
      top: 8rem;
      padding: 0 1rem;
    }

    @media (max-width:360px) {
      top: 4rem;
    }

    @include breakpoint-min (lg) {
      top: 14rem;
      left: 5%;
      width: 38.5rem;
    }
  }

  .hero-header {
    font-size: 2.5rem;

    @include breakpoint-max (lg) {
      text-align: center;
      margin: 0 auto;
    }

    @include breakpoint-max(md) {
      font-size: 25px;
    }
  }

  .hero-description {
    color: white;
    line-height: 1.7;
    font-size: 13.6px;
    @include breakpoint-max (lg) {
      text-align: center;
      margin: 0 auto;
      max-width: 38.5rem;
    }
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

  .btn-portfolio {
    width: 8.9375rem;
    height: 2.9375rem;
    padding-top: 0.9rem;
    border: 1px solid #009D9D;
    display: block;
    color: white;

    @include breakpoint-max (lg) {
      margin: 2rem auto 0 auto;
    }

    @include breakpoint-min (md) {
      margin-top: 3rem;
    }

    &:hover {
      color: #009D9D;
      border: 1px solid white;
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