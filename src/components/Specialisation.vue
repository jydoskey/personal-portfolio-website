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
                <div class="col-lg-4 mb-3">
                  <Card class="specialisation-css">
                    <div slot="card-header" class="card-header text-center card-header__placeholder">
                      <i class="fab fa-css3 specialisation-icon"></i>
                      <p class="p-1 caption m-0">CSS3</p>
                    </div>
                    <div slot="card-body" class="card-body pt-3">
                      <div class="card-body__content pt-0">
                        <p class="paragraph">Proper understanding and usage of CSS, its frameworks and architecture, to
                          describe document presented in
                          HTML. </p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div class="col-lg-4">
                  <Card class="specialisation-js">
                    <div slot="card-header" class="card-header text-center card-header__placeholder">
                      <i class="fab fa-js specialisation-icon"></i>
                      <p class="p-1 caption m-0">JAVASCRIPT</p>
                    </div>
                    <div slot="card-body" class="card-body pt-3">
                      <div class="card-body__content pt-0">
                        <p class="paragraph">Proper understanding and usage of JS to create event driven and functional
                          web pages. With a knack for VueJS & NodeJS.</p>
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

  .specialisation-html,
  .specialisation-js {
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

  .specialisation-css {
    background: $magenta;
    color: white;

    p.caption {
      color: white;
    }

    .specialisation-icon {
      color: white;
      font-size: 4rem;
    }
  }

  p.paragraph {
    height: 60px;
  }
</style>