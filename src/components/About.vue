<template>
  <section id="about">
    <div>
      <Card>
        <div slot="card-header" class="text-center card-header__placeholder">
          <h2 class="card-header">{About Me}</h2>
        </div>
        <div slot="card-body" class="card-body">
          <div class="card-body__content">
            <div class="row">
              <div class="col-lg-4 pb-4">
                <h1 class="pb-3 about-header">My Biography</h1>
                <a href="/document/OLAJIDE_OMOTOLA_Resume_19-12-2020-15-56-31.pdf" target="_blank">
                  <button class="btn bg-transparent download-cv ml-auto mr-auto"><i
                      class="fas fa-arrow-down download-icon"></i>&nbsp;Download CV</button>
                </a>
              </div>
              <div class="col-lg-8 pb-4">
                <p class="caption about-text">Innovative software engineer with 1+ years of experience in the
                  implementation and
                  development of
                  data-driven web applications. Passionate about turning abstract web ideas into visual reality and
                  experienced with all stages of the software development cycle, and adequate knowledge of it's
                  technologies and agile methodology.<br> A fast learner that stays true to his fundamental values of
                  creativity, integrity, passion, and simplicity. Looking to join a team of highly skilled and passion-
                  driven engineers while contributing to a meaningful project.</p>
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

  a:link {
    text-decoration: none;
  }

  .about-text {
    color: white;

    @media (min-width: 280px) {
      font-size: 0.75rem;
    }

    @include breakpoint-max(md) {
      font-size: 0.875rem;
      text-align: center;
    }

    @include breakpoint-min(lg) {
      font-size: 0.875rem;
      max-width: 90%;
      text-align: left;
    }
  }

  .download-icon {
    color: #009D9D;
  }

  .download-cv {
    width: 10rem;
    height: 2.9375rem;
    padding-top: 0.9rem;
    padding-left: 0;
    padding-right: 0;
    border: 1px solid #009D9D;
    color: white;
    display: block;

    &:hover {
      color: #009D9D;
      border: 1px solid white;

      .download-icon {
        color: white;
      }
    }
  }

  .card-header__placeholder {
    margin: 0 auto;
  }

  .about-header {
    font-size: 40px;
    max-width: 50%;
    margin: 0 auto;

    @include breakpoint-min (lg) {
      text-align: left;
    }

    @include breakpoint-max(lg) {
      font-size: 40px;
      max-width: 100%;
      text-align: center;
    }

    @include breakpoint-max(md) {
      font-size: 30px;
      text-align: center;
    }
  }
</style>