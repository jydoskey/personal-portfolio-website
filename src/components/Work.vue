<template>
  <section>
    <div>
      <Card>
        <div slot="card-header" class="text-center card-header__placeholder">
          <h2 class="card-header">{Projects}</h2>
        </div>
        <div slot="card-body" class="card-body">
          <div class="card-body__content">
            <embed src="https://sad-williams-c75fdc.netlify.app/" style="width:500px; height: 300px;">
            <embed src="https://codepen.io/Jydoskey/pen/XWJPKNL" style="width:500px; height: 300px;">
            <embed src="https://codepen.io/Jydoskey/pen/wLrJjd" style="width:500px; height: 300px;">
            <embed src="https://nifty-cray-f7844b.netlify.app/" style="width:500px; height: 300px;">
            <p class="paragraph">for more...</p>
          </div>
        </div>
      </Card>
    </div>
  </section>
</template>

<script>
  import Card from "@/components/layout/Card";
  export default {
    components: {
      Card
    },
  };
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";
  @import "@/scss/abstracts/_mixins.scss";

  .card-body__content {
    padding: 1rem;
    text-align: center;
  }

  .icon-showcase {
    text-align: center;
    height: 4rem;
    width: 4rem;
  }

  .card-header__placeholder {
    margin: 0 auto;
  }
</style>