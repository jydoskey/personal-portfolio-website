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
                  <div class="content">
                    <a href="https://sad-williams-c75fdc.netlify.app/" target="_blank">
                      <div class="content-overlay"></div>
                      <embed class="bg-smoke card-body-netlify" src="https://sad-williams-c75fdc.netlify.app/">
                      <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">This is a title</h3>
                        <p class="content-text">This is a short description</p>
                      </div>
                    </a>
                  </div>
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

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .content {
    position: relative;
    margin: auto;
    overflow: hidden;
    @include breakpoint-min (lg) {
      width: 550px;
      height: 600px;
    }

    @include breakpoint-max (md) {
      width: 600px;
    }
  }

  .content .content-overlay {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    height: 99%;
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