import Vue from "vue";
import App from "./AppCopy.vue";
// import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  props: ['name', "value"],
  template: `<div>
            <div class="form-group"   >
              <label >{{name}} {{value}}</label>
              <input type="text" class="form-control" 
               v-bind:value="value"
               v-on:input="$emit('input', $event.target.value)" >
            </div>
          </div>`
})

new Vue({
  el: "#app",
  render: h => h(App)
});
