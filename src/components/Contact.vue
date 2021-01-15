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
                  <Card class="contact-html">
                    <div slot="card-header" class="card-header text-center card-header__placeholder">
                      <p class="p-1 caption">Hire Me For Your Projects</p>
                    </div>
                    <div slot="card-body" class="card-body pt-3">
                      <div class="card-body__content pt-0">
                        
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
    max-width: 250px;
    margin: 0 auto;

    @media (min-width: 320px) {
      font-size: 16px;
      margin: 0 auto;
    }

    @media (min-width: 769px) {
      font-size: 20px;
      margin: 0 auto;
    }
  }

  .contact-html {
    background: #ffffff;
    border-radius: 0.2rem;
    color: #303030;

    p.caption {
      color: #303030;
    }
  }
</style>