<template>
  <section id="projects">
    <div>
      <Card>
        <div slot="card-header" class="text-center card-header__placeholder">
          <h2 class="card-header">{Projects}</h2>
        </div>
        <div slot="card-body" class="card-body">
          <div class="card-body__content">
            <div class="row">
              <div class="col-lg-6 card-body-project">
                <div class="col-lg-12 pb-5">
                  <div class="content">
                    <a href="https://sad-williams-c75fdc.netlify.app/" target="_blank">
                      <div class="content-overlay"></div>
                      <img class="bg-smoke card-body-netlify" src="@/assets/unsplash-clone.png" alt="unsplash clone">
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">Unsplash Clone</h3>
                        <p class="content-text">A static page that generates images based on Unsplash Api, which also
                          has a search function implemented.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <a href="https://github.com/jydoskey/" target="_blank">
                  <button class="secondary-button btn btn-md">
                    <p class="button-text caption text-magenta">View on Github...</p>
                  </button>
                </a>
              </div>
              <div class="col-lg-6">
                <div class="col-lg-12 card-body-project">
                  <div class="content">
                    <a href="https://codepen.io/Jydoskey/full/OeYLey" target="_blank">
                      <div class="content-overlay"></div>
                      <img class="bg-smoke card-body-codepen" src="@/assets/js-documentation.png"
                        alt="javascript documentation">
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">js documentation</h3>
                        <p class="content-text">A page that explains some basic concepts of javascript.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-lg-12 card-body-project pb-5">
                  <div class="content">
                    <a href="https://codepen.io/Jydoskey/full/wLrJjd" target="_blank">
                      <div class="content-overlay"></div>
                      <img class="bg-smoke card-body-codepen" src="@/assets/trombones.png" alt="original trombones">
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">original trombones</h3>
                        <p class="content-text">A sample homepage that showcases a wind instrument.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <a href="https://codepen.io/Jydoskey/" target="_blank">
                  <button class="primary-button btn btn-md">
                    <p class="button-text caption text-white">View on Codepen...</p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <specialisation />
    </div>
  </section>
</template>

<script>
  import Card from "@/components/layout/Card";
  import Specialisation from "@/components/Specialisation"
  export default {
    components: {
      Card,
      Specialisation
    },
  };
</script>

        Specialisation
<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";
  @import "@/scss/abstracts/_mixins.scss";

  .primary-button {
    background: #009D9D;

    &:hover {
      background: #008080;
    }
  }

  .secondary-button {
    background: #ffffff;

    &:hover {
      background: $smoke;
    }
  }

  .button-text {
    margin: 0 auto;

    @media (min-width:280px) {
      font-size: 0.8rem;
      font-style: normal;
      margin: 0 auto;
    }
  }

  .card-body__content {
    padding: 1rem;
    text-align: center;
  }

  .content {
    position: relative;
    margin: auto;
    overflow: hidden;
    width: 100%;
    max-width: 500px;
  }

  .content .content-overlay {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
  }

  .content:hover .content-overlay {
    opacity: 1;
  }

  .content-details {
    position: absolute;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    top: 50%;
    left: 50%;
    opacity: 0;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  .content:hover .content-details {
    top: 50%;
    left: 50%;
    opacity: 1;
  }

  .content-details h3 {
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.15em;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }

  .content-details p {
    color: #fff;
    font-size: 0.8em;
  }

  .fadeIn-bottom {
    top: 80%;
  }

  .fadeIn-top {
    top: 20%;
  }

  .fadeIn-left {
    left: 20%;
  }

  .fadeIn-right {
    left: 80%;
  }

  .card-body-netlify {
    height: 600px;

    @include breakpoint-max (lg) {
      height: 300px;
    }

    @media (max-width: 1200px) {
      max-width: 450px;
    }
  }

  .card-body-codepen {
    height: 300px;

    @media (max-width: 1200px) {
      max-width: 450px;
    }
  }

  .card-header__placeholder {
    margin: 0 auto;
  }

  .card-body-project {
    @include breakpoint-max (lg) {
      padding-bottom: 2rem;
    }
  }
</style>