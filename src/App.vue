<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h1>{{ fff }}</h1>
    <input type="text" v-bind:value="msg" v-on:input="msg = $event.target.value">
    <input type="text" v-bind:value="fff" v-on:input="ggg">
    <button v-on:click="show = !show">BTN</button>
    <h2 v-show="show">{{ pov }}</h2>

    <button class="jj">JJJJJJ</button>
    <button class="btn btn-danger">bbbbb</button> -->

    <div class="wrapper">
      <div class="sample">
        <form>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              v-bind:style="prBar"
            ></div>
          </div>
          <div>
            <div class="form-group" v-for="(feald, i) in info" v-bind:key="i">
              <label>{{ feald.name }}</label>
              <span
                v-if="feald.activated"
                v-bind:class="validateClass(feald, i)"
                >!</span
              >
              <input
                type="text"
                class="form-control"
                v-model="feald.value"
                ref="inputPattern"
                v-on:input="patternCheck(feald, i)"
              />
            </div>
          </div>
          <button class="btn btn-primary">
            Send Data
          </button>
        </form>
        <div>
          <table class="table table-bordered">
            <tr>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="wrapper" v-bind:class="myClass">
      <div class="sample" v-bind:class="textHeight">
        <button v-on:click="clickHeight = !clickHeight">Heigth</button>
        <form @submit.prevent="checkDis()">
          <div class="form-group">
            <label>Email</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="email"
              ref="fInput"
            />
            <label>Phone</label>
            <input type="text" class="form-control" v-model.trim="phone" />
            <label>First Name</label>
            <input type="text" class="form-control" v-model.trim="firstName" />
            <label>Last Name</label>
            <input type="text" class="form-control" v-model.trim="LastName" />
          </div>
          ...
          <div class="form-group">
            <label>Guests</label>
            <input
              type="button"
              class="btn btn-primary"
              value="+"
              v-on:click="add"
            />
          </div>
          <div class="form-group" v-for="(i, ind) in guest" v-bind:key="ind">
            <label>Guest {{ ind }} </label>
            <input type="text" v-model="guest[ind].v" ref="lastInp" />
            <button class="btn btn-danger" v-on:click="$delete(guest, ind)">
              del
            </button>
          </div>
          <hr />
          <button
            class="btn btn-success my-button"
            v-on:click="checkGuest()"
            v-bind:disabled="!checkDis()"
          >
            Send Data
          </button>
        </form>
        <div>
          <h2>All done!</h2>
          <table class="table table-bordered">
            <tr>
              <td>Email {{ email }}</td>
              <td>Phone {{ phone }}</td>
              <td>Full Name {{ concat }}</td>
            </tr>
            <tr>
              <td v-for="(g, index) in guest" v-bind:key="index">
                Guests {{ index }} {{ guest[index].v }}
              </td>
            </tr>
          </table>

          <button v-on:click="checkGuest()">CG</button>
          <p v-bind:class="myClass">tttttttttt</p>
          <p v-bind:style="myStyle">tttttttttt</p>
          <button v-on:click="mySize">sYyYyY</button>
          <p v-bind:style="mySt">YYYYYYY</p>
          <button v-on:click="cl = false">ffff</button>

          <div class="form-check">
            <div>
              <label class="form-check-label">
                <input
                  class="form-check-input"
                  type="radio"
                  value="blu"
                  v-model="cl"
                />
                Blue
              </label>
            </div>
            <div>
              <label class="form-check-label">
                <input
                  class="form-check-input"
                  type="radio"
                  value="orang"
                  v-model="cl"
                />
                Orange
              </label>
            </div>
            <div>
              <label class="form-check-label">
                <input
                  class="form-check-input"
                  type="radio"
                  value="red"
                  v-model="cl"
                />
                Red
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper">
      <div class="sample">
        <form>
          <div class="content alert alert-info" v-on:scroll="scroll">
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
            <p>
              This text no one reads. This text no one reads. This text no one
              reads.
            </p>
          </div>
          <div v-show="scrolledToBottom">
            <div class="form-check">
              <label class="form-check-label" for="checkbox">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="checked"
                />
                1 {{ checked }}
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label" for="checkbox">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="checked2"
                />
                2ch {{ checked }}
              </label>
            </div>
            <div v-show="checked2">
              <div>
                <div class="form-check">
                  <label class="form-check-label" for="one">
                    <input
                      class="form-check-input"
                      id="one"
                      type="radio"
                      name="rad"
                    />
                    Mail
                  </label>
                </div>
              </div>
              <div>
                <label class="form-check-label" for="two">
                  <input
                    class="form-check-input"
                    id="two"
                    type="radio"
                    name="rad"
                  />
                  Phone
                </label>
              </div>
            </div>
            <hr />
            <button class="btn btn-primary" v-bind:disabled="!checked">
              <!-- {{ checked }} -->
              Send Data
            </button>
          </div>
        </form>
        <div>
          <table class="table table-bordered">
            <tr>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      fff: "FFFFF",
      v: 0,
      show: false,
      email: "",
      phone: "",
      firstName: "",
      LastName: "",
      fullName: "",
      mg: "",
      // disabl: true,
      cl: "red",
      // col: 'red',
      guest: [
        // {v: 13},
        // {v: 5},
        // {v: 7}
      ],
      fSize: 10,
      prBar: {
        width: "30%"
      },
      sumPart: 0,
      progressStyleWidth: "10%",
      myStyle: {
        color: "yellow"
      },
      scrolledToBottom: false,
      clickHeight: true,
      checked: false,
      checked2: false,
      info: [
        {
          name: "Name",
          value: "",
          pattern: /^[a-zA-Z ]{2,30}$/
        },
        {
          name: "Phone",
          value: "",
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
    styleF() {
      // console.log(this.progressStyleWidth, 'fss');

      this.prBar = {
        width: this.progressStyleWidth
      };
    },

    validateClass(f, i) {
      return {
        red: !this.info[i].valid
      };
    },
    patternCheck(e, i) {
      console.log(
        (this.info[i].valid = this.info[i].pattern.test(this.info[i].value)),
        "uuuu"
      );

      if (
        (this.info[i].valid = this.info[i].pattern.test(this.info[i].value))
      ) {
        let max = 100;
        let par = this.validCheck();
        console.log(par, "parrrr");
        let sumPart = (par / this.info.length) * 100;
        console.log(sumPart, "part");

        this.progressStyleWidth = sumPart + "%";
        this.styleF();
      }
      this.info[i].activated = true;

      // this.validCheck()
    },

    scroll(e) {
      let div = e.target;

      div.onscroll = () => {
        let bottomOfWindow =
          div.scrollTop + div.getBoundingClientRect().height > div.scrollHeight;

        if (bottomOfWindow) {
          console.log("ggg");
          this.scrolledToBottom = true; // replace it with your code
        } else {
          this.scrolledToBottom = false;
        }
      };
    },

    mySize() {
      this.fSize = this.fSize + 5;
    },
    add() {
      console.log(this.guest.push({ v: "" }));
      this.$nextTick(() => {
        console.log(this.$refs.lastInp[this.$refs.lastInp.length - 1].focus());
      });
    },
    checkDis() {
      console.log(this.disabl);
      if (
        this.email !== "" &&
        this.phone !== "" &&
        this.firstName !== "" &&
        this.LastName !== ""
      ) {
        // console.log(this.disabl = false);
        return true;
      } else {
        // this.disabl = true
        return false;
      }
    },
    checkGuest() {
      this.guest = this.guest.filter(g => {
        return g.v != "";
      });
    },

    ggg(e) {
      this.show = !this.show;
      console.log(this.show);
      console.log("GGG");
      console.log((this.msg = this.v++));
      console.log(e);
      console.log(app);
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
    }
  },
  computed: {
    myClass() {
      console.log("mMMMM");
      return {
        red: this.cl === "red",
        orange: this.cl === "orang",
        blue: this.cl === "blu"
      };
    },
    textHeight() {
      return {
        fzBig: this.clickHeight
      };
    },
    mySt() {
      console.log("Sssss");
      return {
        fontSize: `${this.fSize}px`
      };
    },
    concat() {
      console.log(this.phone);
      return this.firstName + " " + this.LastName;
    },
    pov() {
      console.log("PPPP");
      return `${this.fff} ${this.v}`;
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
    this.$nextTick(() => {
      this.$refs.fInput.focus();
    });
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
