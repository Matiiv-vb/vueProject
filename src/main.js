import Vue from "vue";
import store from "./store";
import App from "./HtmlScss.vue";
import "./assets/scss/app.scss";
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// import App from "./AppCopy.vue";
// import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import '@babel/polyfill'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faAllergies, faUserSecret} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import "animate.css"

// library.add(faAllergies)
// library.add(faUserSecret)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.config.productionTip = false;

new Vue({
  store,
  el: "#app",
  render: h => h(App)
});
