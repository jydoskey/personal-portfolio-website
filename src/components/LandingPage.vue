<template>
  <section id="landing">
    <picture>
      <source media="(max-width:768px)" srcset="@/assets/hero-image-mobile.png">
      <img class="hero-image" src="@/assets/hero-image.png" alt="hero-image">
    </picture>
    <div class="hero-text ml-0">
      <h1 class="hero-header heading-1">Hello, !'m <span class="bg-magenta pr-1 pl-1">Jide</span>. I'm
        <span class="txt-rotate" data-period="2000"
          data-rotate='[ "a Frontend Developer Based in Lagos, Nigeria.", "passionate about turning abstract web ideas into visual reality.", "a problem solver looking to join a skilled team.", "either studying or watching sports during my leisure, I love basketball." ]'></span>
      </h1>
      <p class="caption hero-description pt-4">Passionate about turning abstract web ideas into visual reality,
        experienced with all the stages of software development cycle. Possess an adequate knowledge of web
        technologies
        and
        agile methodology.</p>
      <a href="/projects">
        <button class="btn bg-transparent btn-portfolio">Portfolio</button>
      </a>
    </div>
  </section>
</template>

<script>
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 5) || 20;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 350;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
  export default {
    name: 'LandingPage',
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/variables.scss";
  @import "@/scss/abstracts/mixins.scss";

  a:link {
    text-decoration: none;
  }

  .hero-image {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    position: relative;
    overflow: hidden;
    object-fit: cover;
    background-size: cover;
  }

  .hero-text {
    color: white;
    position: absolute;

    @include breakpoint-max (lg) {
      top: 14rem;
    }

    @include breakpoint-max (md) {
      top: 8rem;
      padding: 0 1rem;
    }

    @media (max-width:360px) {
      top: 4rem;
    }

    @include breakpoint-min (lg) {
      top: 14rem;
      left: 5%;
      width: 38.5rem;
    }
  }

  .hero-header {
    font-size: 2.5rem;

    @include breakpoint-max (lg) {
      text-align: center;
      margin: 0 auto;
    }

    @include breakpoint-max(md) {
      font-size: 25px;
    }
  }

  .hero-description {
    color: white;
    line-height: 1.7;
    font-size: 13.6px;

    @include breakpoint-max (lg) {
      text-align: center;
      margin: 0 auto;
      max-width: 38.5rem;
    }
  }

  .container {
    @include breakpoint-min(sm) {
      min-width: 540px;
      max-width: calc(100% - 70px);
    }

    @include breakpoint-min(md) {
      max-width: calc(100% - 108px);
      min-width: 720px;
    }

    @include breakpoint-min(lg) {
      min-width: 960px;
    }

    @media (min-width: 1440px) {
      max-width: 1300px;
    }
  }

  .btn-portfolio {
    width: 8.9375rem;
    height: 2.9375rem;
    padding-top: 0.9rem;
    border: 1px solid #009D9D;
    display: block;
    color: white;

    @include breakpoint-max (lg) {
      margin: 2rem auto 0 auto;
    }

    @include breakpoint-min (md) {
      margin-top: 3rem;
    }

    &:hover {
      color: #009D9D;
      border: 1px solid white;
    }
  }

</style>