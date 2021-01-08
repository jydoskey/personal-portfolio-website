<template>
  <section>
    <div>
      <Card>
        <div slot="card-header" class="text-center card-header__placeholder">
          <h2 class="card-header">{Projects}</h2>
        </div>
        <div slot="card-body" class="card-body">
          <div class="container py-3">
            <div class="row">
              <div class="col-lg-6 card-body-project">
                <embed class="bg-smoke card-body-netlify" src="https://sad-williams-c75fdc.netlify.app/">
              </div>
              <div class="col-lg-6 pl-0 card-body-project">
                <div class="col-lg-12">
                  <embed class="bg-smoke card-body-codepen" src="https://sad-williams-c75fdc.netlify.app/">
                </div>
                <div class="col-lg-12">
                  <embed class="bg-smoke card-body-codepen" src="https://sad-williams-c75fdc.netlify.app/">
                </div>
              </div>
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

  .card-body-netlify {
    @include breakpoint-min (lg) {
      width: 550px;
      height: 600px;
    }

    @include breakpoint-max (md) {
      width: 600px;
    }
  }

  .card-body-codepen {
    width: 550px;
    height: 297px;
  }

  .card-header__placeholder {
    margin: 0 auto;
  }
</style>