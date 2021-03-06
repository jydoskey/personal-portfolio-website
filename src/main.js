import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router";

import moment from 'moment';
Vue.prototype.moment = moment

import { KinesisContainer, KinesisElement} from "vue-kinesis"

Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
