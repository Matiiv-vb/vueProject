<template>
  <div>
    <h2>WoRKS</h2>
    <div>{{ name }}</div>
    <input v-on:input="changComponentInput()" height="200px" width="30px" type="text" v-model="inputValue">
    <div> {{inputValue}} </div>
    <button v-on:click="changComponentInput()">bbb</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      count: 0,
      animateEl: true,
      inputValue: ''

    };
  },
  methods: {
      changComponentInput() {
          console.log("CCI");
          this.$emit('changeTitle', this.inputValue)
      }
  },
  computed: {},
  // props: ['name', "value", 'valid', 'pattern', 'activatedfff']
  props: {
    name: {
      type: String,
      default: "FFF"
    },
    value: {
      type: String,
      default: "sss"
    },
    valid: {
      type: Boolean,
      default: false
    },
    pattern: {
      type: RegExp
    },
    activatedfff: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss"></style>
