<template>
  <div id="app">
    <div class="sample">
      <h1 class="my-element">bounce</h1>
      <form v-if="!formDone" @submit.prevent>
        <div>
          <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->

          <b-modal id="modal-1" title="BootstrapVue">
            <template v-slot:modal-title>
              <button class="btn btn-danger">sdf</button>
              <ul>
                <ol>
                  punkt1
                </ol>
                <ol>
                  punkt2
                </ol>
              </ul>
            </template>
            dddd
            <p class="my-4">Hello from modal!</p>
          </b-modal>
        </div>

        <div>
          <b-spinner :small="!this.startActivated"></b-spinner>
        </div>
        <!-- <div>
              <font-awesome-icon icon="user-secret" class="text-success" />
            </div>
            <p class="text-success" ref='fh'>hh</p> -->
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            v-bind:style="styleF"
          ></div>
        </div>
        <div>
          <form-component
            ref="fs"
            v-for="(feald, i) in info"
            v-bind:key="i"
            v-bind:name="feald.name"
            v-bind:value="feald.value"
            v-bind:valid="feald.valid"
            v-bind:pattern="feald.pattern"
            v-bind:activatedfff="feald.activated"
            v-on:inputss="feald.value = $event"
            v-on:dia="diaMethod(feald, i)"
          >
            <template v-slot:newSlot>
              <button class="btn btn-danger">sdf</button>
              <!-- <ul>
                <ol>
                  punkt1
                </ol>
                <ol>
                  punkt2
                </ol>
              </ul> -->
            </template>

            <template v-slot:sn>
              <button class="btn btn-success">vb</button>
            </template>
          </form-component>
        </div>
        <button class="btn btn-primary" v-b-modal.modal-2>
          Send Data
        </button>
      </form>

      <div v-else>
        <h2>All Done</h2>
      </div>

      <b-modal id="modal-2" v-model="showModal" v-on:ok="onConfirm">
        <table class="table table-bordered">
          <tbody>
            <tr v-for="(f, i) in info" :key="i">
              <td>{{ f.name }}</td>
              <td>{{ f.value }}</td>
            </tr>
          </tbody>
        </table>
      </b-modal>
    </div>
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";

import { BSpinner } from "bootstrap-vue";
import { BModal } from "bootstrap-vue";
// Vue.component('b-spinner', BSpinner)

export default {
  components: {
    FormComponent,
    BSpinner,
    BModal
  },
  name: "app",
  data() {
    return {
      startActivated: false,
      showModal: false,
      formDone: false,
      progressStyleWidth: "0%",
      info: [
        {
          name: "Name",
          value: "",
          pattern: /^[a-zA-Z ]{2,30}$/
        },
        {
          name: "Phone",
          value: "444444",
          pattern: /^[0-9]{7,14}$/
        },
        {
          name: "Email",
          value: "",
          pattern: /.+/
        },
        {
          name: "Some Field 1",
          value: "",
          pattern: /.+/
        },
        {
          name: "Some Field 2",
          value: "",
          pattern: /.+/
        }
      ]
    };
  },
  methods: {
    onConfirm(){
      this.formDone = true
    },
    diaMethod(f, i) {
      console.log(this.$refs.fh, "reeffs");
      f.valid = f.pattern.test(f.value);

      let par = this.validCheck();
      let sumPart = (par / this.info.length) * 100;

      this.progressStyleWidth = sumPart + "%";

      f.activated = true;
      this.activeSpin();
      console.log(event, "thisEvent");
      console.log(this.$attrs, "atrsssssssss");
      console.log(this.$listeners, "$listeners");
      return {
        red: !this.info[i].valid
      };
    },
    validCheck() {
      let ready = 0;
      this.info.forEach(e => {
        if (e.valid) {
          ready++;
          console.log(ready);
        }
      });
      return ready;
    },
    activeSpin() {
      this.info.forEach(e => {
        console.log(e.activated, "aact");
        if (e.activated == true && this.progressStyleWidth !== "100%") {
          this.startActivated = true;
        } else if (this.progressStyleWidth == "100%") {
          this.startActivated = false;
        }
      });
    }
  },
  computed: {
    styleF() {
      return {
        width: this.progressStyleWidth
      };
    }
  },
  beforeCreate() {
    console.log(app, "beforeCreate");
  },

  created() {
    console.log(app, "created");
    console.log(
      this.info.forEach(e => {
        e.valid = false;
        e.activated = false;
      }),
      "Create inf"
    );
  },

  beforeMount() {
    console.log(app, "beforeMount");
  },

  mounted() {
    // this.$nextTick(()=>{
    //   this.$refs.fInput.focus()
    // })
    console.log(app, "mounted");
  },

  beforeUpdate() {
    console.log(app, "beforeUpdate");
  },

  updated() {
    console.log(app, "updated");
  },
  beforeDestroy() {
    console.log(app, "beforeDestroy");
  },
  destroyed() {
    console.log(app, "destroyed");
  }
};
</script>

<style lang="scss">
.my-element {
  display: inline-block;
  margin: 0 0.5rem;

  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
  animation-iteration-count: infinite;
}

.fzBig {
  font-size: 40px;
}

.content {
  height: 300px;
  overflow: auto;
}

.red {
  background-color: rgb(109, 62, 69);
  color: red;
}

.orange {
  background-color: rgb(175, 72, 12);
  color: orange;
}

.blue {
  background-color: rgb(8, 118, 122);
  color: blue;
}

input {
  margin: 5px 20px;
}

.my-button {
  display: block;
  position: relative;
  left: 5px;
  margin: 0px 20px;
}

.form-group {
  text-align: left;
  label {
    margin: 0px 20px;
  }
}
.wrapper {
  width: 700px;
}

.jj {
  height: 300px;
}

.btn-danger {
  color: yellow;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
