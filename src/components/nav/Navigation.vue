<template>
  <nav class="app-navigation" :class="isNavActive ? 'is-active' : '' ">
    <div class="app-navigation__header">
      <button class="close-navigation" @click="closeNavigation()">
        <span>Close</span>
        <span class="fas fa-times"></span>
      </button>
    </div>
    <div class="app-navigation__body">
      <ul class="main-nav-links">
        <li v-for="link in mainNavLinks" :key="link.id">
          <a class="main-nav-link" exact @click="closeNavigation()" :href="link.url">{{link.name}}<i class="ml-2"
              :class="link.iconClass ? link.iconClass : 'd-none'"></i></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation',
    data() {
      return {
        mainNavLinks: [{
            name: 'Home',
            url: '/'
          }, {
            name: 'Projects',
            url: '/projects'
          },
          {
            name: 'About',
            url: '/about'
          },
          {
            name: 'Contact',
            url: '/contact'
          },
        ],
      }
    },
    props: {
      isNavActive: Boolean
    },
    methods: {
      closeNavigation() {
        this.$emit('closeNav')
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/variables.scss";
  @import "@/scss/abstracts/mixins.scss";

  .app-navigation {
    display: block;
    z-index: 60;
    position: relative;
  }

  // ==== MOBILE NAVIGATION ==== //
  @include breakpoint-max(lg) {
    .app-navigation {
      display: none;
      position: fixed;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      padding: .5rem;
      overflow: auto;

      &.is-active {
        display: block;
      }

      &::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        height: calc(60% - 1rem);
        width: calc(100% - 1rem);
        z-index: -1;
        margin: .5rem;
        background: $white;
      }
    }

    .app-navigation__header {
      display: flex;
      position: sticky;
      top: 0;
      margin-bottom: 1.5rem;
    }

    .close-navigation {
      background: transparent;
      margin: 0;
      border: 0;
      outline: none;
      padding: 1.125rem 1rem;
      font-size: $fontSize-s;
      line-height: 1.5rem;

      span {
        margin-right: .25rem;
      }
    }

    .app-navigation__body {
      margin: 1.5rem;
      display: flex;
    }

    .main-nav-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .main-nav-link {
      display: inline-block;
      font-size: $fontSize-s;
      font-weight: $bold;
      line-height: 1.25;
      padding: 1.25rem 1.25rem 1.25rem 0;
      color: black;
    }

  }

  // ==== DESKTOP NAVIGATION ==== //
  @include breakpoint-min(lg) {
    .main-nav-links {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
    }

    .main-nav-link {
      display: inline-block;
      text-decoration: none;
      color: white;
      font-size: $fontSize-lg;
      font-weight: $semi-bold;
      line-height: 1.5;
      padding: 1.5rem 0.8rem;
      margin-right: 0.9rem;
      transition: 300ms ease color;
    }

    a:hover,
    a:active,
    a:focus {
      color: #009D9D;
    }

    .main-nav-links li:last-of-type a.main-nav-link {
      margin-right: 0;
    }

    .app-navigation__header {
      display: none;
    }
  }
</style>