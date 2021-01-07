<template>
  <section>
    <div>
      <Card>
        <div slot="card-header" class="text-center card-header__placeholder">
          <h2 class="card-header">{Projects}</h2>
        </div>
        <div slot="card-body" class="card-body">
          <div class="card-body__content">
            <p class="paragraph">{{pageName}} is coming to <b>Checkout with REACH</b> soon</p>
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
    props: ["pageName", "pageIcon"]
  };
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";
  @import "@/scss/abstracts/_mixins.scss";

  .card-body__content {
    border: 1px solid grey;
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

  .card-header {
    color: #1c1c1c;
    font-size: 5rem;
  }
</style>