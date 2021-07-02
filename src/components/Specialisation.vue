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
              <div class="row justify-content-around">
                <div class="col-lg-4 mb-3">
                  <Card class="col-12 specialisation-html">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
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
                  <Card class="col-12 specialisation-css">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
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
                <div class="col-lg-4 mb-3">
                  <Card class="col-12 specialisation-js">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div slot="card-header" class="card-header text-center card-header__placeholder">
                      <i class="fab fa-js specialisation-icon"></i>
                      <p class="p-1 caption m-0">JAVASCRIPT</p>
                    </div>
                    <div slot="card-body" class="card-body pt-3">
                      <div class="card-body__content pt-0">
                        <p class="paragraph">Proper understanding and usage of JS to create event driven and functional
                          web pages. With a knack for VueJS, NuxtJS & NodeJS.</p>
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

  .specialisation-html,
  .specialisation-js {
    background: #ffffff;
    color: #303030;
    overflow: hidden;
    height: 100%;

    p.caption {
      color: #303030;
    }

    .specialisation-icon {
      color: #bcbcbc;
      font-size: 4rem;
    }

    span {
      transition: 0.5;
    }

    span:nth-child(1) {
      position: absolute;
      top: 0;
      left: 0;
      width: 96%;
      height: 3px;
      background: linear-gradient(to right, transparent, $magenta);
      animation: animation1 2s linear infinite;
    }

    span:nth-child(2) {
      position: absolute;
      top: 0;
      right: 0;
      width: 3px;
      height: 96%;
      background: linear-gradient(to bottom, transparent, $magenta);
      animation: animation2 2s linear infinite;
      animation-delay: 1s;
    }

    span:nth-child(3) {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 96%;
      height: 3px;
      background: linear-gradient(to left, transparent, $magenta);
      animation: animation3 2s linear infinite;
    }

    span:nth-child(4) {
      position: absolute;
      top: 0;
      left: 0rem;
      width: 3px;
      height: 96%;
      background: linear-gradient(to top, transparent, $magenta);
      animation: animation4 2s linear infinite;
    }
  }

  @keyframes animation1 {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }

  @keyframes animation2 {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(100%);
    }
  }

  @keyframes animation3 {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes animation4 {
    0% {
      transform: translateY(100%);
    }

    100% {
      transform: translateY(-100%);
    }
  }

  .specialisation-css {
    background: $magenta;
    color: white;
    height: 100%;
    overflow: hidden;

    p.caption {
      color: white;
    }

    .specialisation-icon {
      color: white;
      font-size: 4rem;
    }

    span {
      transition: 0.5;
    }

    span:nth-child(1) {
      position: absolute;
      top: 0;
      left: 0;
      width: 96%;
      height: 3px;
      background: linear-gradient(to right, transparent, #ffffff);
      animation: animation1 2s linear infinite;
    }

    span:nth-child(2) {
      position: absolute;
      top: 0;
      right: 0rem;
      width: 3px;
      height: 96%;
      background: linear-gradient(to bottom, transparent, #ffffff);
      animation: animation2 2s linear infinite;
      animation-delay: 1s;
    }

    span:nth-child(3) {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 96%;
      height: 3px;
      background: linear-gradient(to left, transparent, #ffffff);
      animation: animation3 2s linear infinite;
    }

    span:nth-child(4) {
      position: absolute;
      top: 0;
      left: 0rem;
      width: 3px;
      height: 96%;
      background: linear-gradient(to top, transparent, #ffffff);
      animation: animation4 2s linear infinite;
    }
  }

  p.paragraph {
    height: 60px;
  }
</style>