<template>
  <section id="contact">
    <div>
      <Card>
        <div slot="card-body" class="card-body">
          <div class="card-body__content">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="text-center card-header__placeholder">
                    <h2 class="card-header pt-0 pb-4">{Contact Me}</h2>
                  </div>
                </div>
                <div class="col-lg-6 mb-3">
                  <Card class="specialisation-html">
                    <div slot="card-header" class="card-header text-center card-header__placeholder">
                      <i class="fab fa-html5 specialisation-icon"></i>
                      <p class="p-1 caption m-0">HTML5</p>
                    </div>
                    <div slot="card-body" class="card-body pt-3">
                      <div class="card-body__content pt-0">
                        <p class="paragraph">Proper understanding and usage of HTML, DOM & SVGs for content
                          presentation and structuring on the web.</p>
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

  p.caption {
    @media (min-width: 320px) {
      font-size: 16px;
    }

    @media (min-width: 769px) {
      font-size: 20px;
    }
  }

  .specialisation-html {
    background: #ffffff;
    border: 2px solid $magenta;
    color: #303030;

    p.caption {
      color: #303030;
    }

    .specialisation-icon {
      color: #bcbcbc;
      font-size: 4rem;
    }
  }

  p.paragraph {
    height: 40px;
  }
</style>