<template>
  <section id="specialisation">
    <div>
      <Card>
        <div slot="card-header" class="text-center card-header__placeholder">
          <h2 class="card-header">{Specialization}</h2>
        </div>
        <div slot="card-body" class="card-body">
          <div class="card-body__content">
            <div class="row">
              
            </div>
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

  .card-header__placeholder {
    margin: 0 auto;
  }
</style>