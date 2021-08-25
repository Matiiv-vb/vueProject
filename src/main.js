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
      count: 0,
    }
  },
  methods: {


  },
  computed: {

    validateClass(){
      console.log(this, 'classsssssss');
      return{
        'red': !this.valid
      }
    },

  },
  props: ['name', "value", 'valid', 'pattern', 'activatedfff'],
  template: `<div>
            <div class="form-group"   >
              <label >{{name}} <span v-bind:class="validateClass" v-show="activatedfff" > !!! </span>  </label>
              <input type="text" class="form-control" 
              v-bind:value="value"
              v-on:input="$emit('inputss', $event.target.value), $emit('dia')"
              
              
              >
              
            </div>
          </div>`
})

new Vue({
  el: "#app",
  render: h => h(App)
});
