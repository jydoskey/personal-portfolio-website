<template>
  <section id="specialisation">
    <div>
      <Card>
        <div slot="card-header" class="text-center card-header__placeholder">
          <h2 class="card-header">{Specialization}</h2>
        </div>
        <div slot="card-body" class="card-body">
          <div class="card-body__content">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 mb-3">
                  <Card class="specialisation-html">
                    <div slot="card-header" class="card-header text-center card-header__placeholder">
                      <p class="card--bg p-1 caption mb-4 m-0 text-white">COMING SOON</p>
                      <h2>{{pageName}}</h2>
                    </div>
                    <div slot="card-body" class="card-body">
                      <div class="card-body__content">
                        <p class="paragraph">{{pageName}} is coming to <b>Checkout with REACH</b> soon</p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div class="col-lg-4 mb-3">
                  <Card class="specialisation-css">
                    <div slot="card-header" class="card-header text-center card-header__placeholder">
                      <p class="card--bg p-1 caption mb-4 m-0 text-white">COMING SOON</p>
                      <h2>{{pageName}}</h2>
                    </div>
                    <div slot="card-body" class="card-body">
                      <div class="card-body__content">
                        <p class="paragraph">{{pageName}} is coming to <b>Checkout with REACH</b> soon</p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div class="col-lg-4">
                  <Card class="specialisation-js">
                    <div slot="card-header" class="card-header text-center card-header__placeholder">
                      <p class="card--bg p-1 caption mb-4 m-0 text-white">COMING SOON</p>
                      <h2>{{pageName}}</h2>
                    </div>
                    <div slot="card-body" class="card-body">
                      <div class="card-body__content">
                        <p class="paragraph">{{pageName}} is coming to <b>Checkout with REACH</b> soon</p>
                      </div>
                    </div>
                  </Card>
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

  .card-body__content {
    padding: 1rem;
    text-align: center;
  }

  .card-header__placeholder {
    margin: 0 auto;
  }

  .specialisation-html, .specialisation-js {
    background: snow;
  }

  .specialisation-css {
    background: $magenta;
  }
</style>