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
    patternCheck(e, i){
      
      console.log(e, "EEE");
      console.log(this.$emit('dia'), 'IIIi');
      // console.log(this.valid = this.pattern.test(this.value), 'uuuu');
      
      // if(this.info[i].valid = this.info[i].pattern.test(this.info[i].value)){
      //   let max = 100;
      //   let par = this.validCheck();
      //   console.log(par, 'parrrr');
      //   let sumPart = par/this.info.length * 100
      //   console.log(sumPart, 'part');
        
      //   this.progressStyleWidth = sumPart + '%'
      //   this.styleF()
      // }
      //   this.info[i].activated = true

      // this.validCheck()

      
    },
  },
  computed: {

    validateClass(){
      console.log(this, 'classsssssss');
      return{
        'red': !this.valid
      }
    },

  },
  props: ['name', "value", 'valid', 'pattern'],
  template: `<div>
            <div class="form-group"   >
              <label >{{name}} <span v-bind:class="validateClass"> !!! </span>  </label>
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
