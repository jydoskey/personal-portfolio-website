<template>
  <section id="coming-soon">
    <div>
      <Card>
        <div slot="card-header" class="text-center card-header__placeholder">
          <h2 class="card-header">{Coming Soon}</h2>
        </div>
        <div slot="card-body" class="card-body">
          <div class="card-body__content">
            <div class="container">
              <div class="row justify-content-around">
                <div class="col-lg-12 mb-3">
                  <Card class="col-12 specialisation-html">
                    <div slot="card-header" class="card-header text-center card-header__placeholder">
                      <i class="fas fa-smile-wink text-magenta"></i>
                      <p class="p-1 caption m-0 text-magenta">I am working on upgrading my website, check later</p>
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

  .col-lg-4 {
    overflow: hidden;
    margin-bottom: 0;
  }

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

  p.paragraph {
    height: 60px;
  }
</style>