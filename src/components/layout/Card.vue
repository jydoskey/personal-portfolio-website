<template>
  <div class="card">
    <slot name="card-header" />
    <slot name="card-body" />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["header"]
};
</script>

<style lang="scss" scoped>
@import "@/scss/abstracts/_variables.scss";
@import "@/scss/abstracts/_mixins.scss";

.card {
  background: black;
  margin-bottom: 1rem;
  @include breakpoint-min(lg) {
    margin-bottom: 2rem;
  }
}
.card-header {
  padding: 1.5rem 1rem 0 1rem;
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