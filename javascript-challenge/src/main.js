import Vue from "vue";
import { VueMaskDirective } from 'v-mask';
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

Vue.directive('mask', VueMaskDirective);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
