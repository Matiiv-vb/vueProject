<template>
  <div id="app">
    <div class="sample">
          <form>
          <div class="progress" >
            <div class="progress-bar" role="progressbar" ></div>
          </div>
          <div>
            <button-counter
              v-for="(feald, i) in info"
              v-bind:key="i"
              v-bind:name="feald.name" 
              v-bind:value="feald.value" 
              v-bind:valid="feald.valid" 
              v-bind:pattern="feald.pattern" 
              v-on:inputss="feald.value = $event"
              v-on:dia="diaMethod(feald, i)"
              
              
            
            ></button-counter>
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

</template>

<script>



export default {
  name: 'app',
  data () {
    return {
      info: [
					{
						name: 'Name',
						value: '',
						pattern: /^[a-zA-Z ]{2,30}$/
					},
					{
						name: 'Phone',
						value: 'dd',
						pattern: /^[0-9]{7,14}$/
					},
					{
						name: 'Email',
						value: '',
						pattern: /.+/
					},
					{
						name: 'Some Field 1',
						value: '',
						pattern: /.+/
					},
					{
						name: 'Some Field 2',
						value: '',
						pattern: /.+/
					}
				],
      


    }
  },
  methods: {
    diaMethod(f, i) {
      console.log(f.valid = f.pattern.test(f.value), "diaMethodddd");
      return{
        'red': !this.info[i].valid
      }
    }

  },
  computed: {

    // validateClass(f, i){
    //   console.log( 'classsssssss');
    //   // return{
    //   //   'red': !this.info[i].valid
    //   // }
    // },

  },
  beforeCreate() {
    console.log(app, 'beforeCreate');
    
    },

  created() {
    console.log(app, 'created');
    console.log(this.info.forEach((e)=>{e.valid=false; e.activated=false}), 'Create inf');
    },

  beforeMount() {
    console.log(app, 'beforeMount');
    },

  mounted() {
    // this.$nextTick(()=>{
    //   this.$refs.fInput.focus()
    // })
    console.log(app, 'mounted');
    
    },

  beforeUpdate() {
    console.log(app, 'beforeUpdate');
  },

  updated() {
    console.log(app, 'updated');
  },
  beforeDestroy() {
    console.log(app, 'beforeDestroy');
  },
  destroyed() {
    console.log(app, 'destroyed');
  }
}


</script>

<style lang='scss'>


.fzBig {
  font-size: 40px;
}


.content{
			height: 300px;
			overflow: auto;
		}

.red {
  background-color: rgb(109, 62, 69);
  color: red;
}

.orange {
  background-color: rgb(175, 72, 12);
  color: orange
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
.wrapper  {
  width: 700px;
}


.jj {
  height: 300px;
}

.btn-danger {
  color: yellow;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
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
