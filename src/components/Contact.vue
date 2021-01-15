<template>
  <section id="contact">
    <div>
      <Card class="contact">
        <div slot="card-body" class="card-body">
          <div class="card-body__content">
            <div class="container">
              <div class="row align-items-center justify-content-between">
                <div class="col-lg-6">
                  <div class="text-center card-header__placeholder">
                    <h2 class="card-header pt-0 pb-4">{Contact Me}</h2>
                  </div>
                </div>
                <div class="col-lg-5 mb-3">
                  <Card class="contact-html">
                    <div slot="card-header" class="card-header text-center card-header__placeholder">
                      <p class="p-1 caption">Hire Me For Your Projects</p>
                    </div>
                    <div slot="card-body" class="card-body pt-3 form-shadow">
                      <div class="card-body__content pt-0">
                        <form action="">
                          <label>
                            <span>Full Name</span>
                            <input type="text" />
                          </label>
                          <label>
                            <span>Email</span>
                            <input type="email" />
                          </label>
                          <label>
                            <span>Phone</span>
                            <input type="number" />
                          </label>
                          <label>
                            <span>Message</span>
                            <input type="text" />
                          </label>
                          <button class="btn btn-magenta btn-send btn-sm ml-auto mr-auto mt-5">Send Message</button>
                        </form>
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
    border-radius: 0.25rem;
    color: #303030;

    p.caption {
      color: #303030;
    }
  }

  input {
    border: none;
    outline: none;
    background: none;
  }

  label {
    display: block;
    margin: 25px auto 0;
    text-align: start;

    span {
      font-size: 14px;
      color: #828282;
    }
  }

  input {
    display: block;
    width: 100%;
    margin-top: 5px;
    padding-bottom: 5px;
    font-size: 15px;
    color: #303030;
    border-bottom: 1px solid $magenta;
    text-align: start;
  }

  .btn-send {
    width: 10rem;
    height: 2.9375rem;
    padding-left: 0;
    padding-right: 0;
    background: #009D9D;
    color: white;
    display: block;

    &:hover {
      background: #008080;
    }
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  .contact {
    height: 34rem;
  }

  .form-shadow {
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072),
      0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
  }
</style>