<template>
  <div class="card">
    <slot />
    <slot name="card-header" />
    <slot name="card-body" />
  </div>
</template>

<script>
  export default {
    name: "Card",
  };
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";
  @import "@/scss/abstracts/_mixins.scss";

  .card {
    background: #8b8b8b;
    margin-bottom: 1rem;

    @include breakpoint-min(lg) {
      margin-bottom: 2rem;
    }
  }

  .card-header {
    padding: 1.5rem 1rem 0 1rem;
    color: #1c1c1c;
    font-size: 4.8rem;

    @include breakpoint-max(lg) {
      font-size: 4rem;
    }

    @include breakpoint-max(md) {
      font-size: 3rem;
    }

    @include breakpoint-max(sm) {
      font-size: 2rem;
    }

    @include breakpoint-min(lg) {
      padding: 2.25rem 1.5rem 0 1.5rem;
    }
  }

  .card-body {
    padding: 1.25rem 1rem;
  }

  @include breakpoint-min(lg) {
    .card-body {
      padding: 2rem 1.5rem;
    }
  }
</style>
