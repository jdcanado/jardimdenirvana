import Vue from "vue";
import App from "./App.vue";
import AuthPlugin from "./plugins/auth";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

const opts = { };
Vue.use(Vuetify);
Vue.config.productionTip = false;
Vue.use(AuthPlugin);

new Vue({
  vuetify: new Vuetify(opts),
  router,
  render: h => h(App)
}).$mount("#app");
