<template>
  <div id="app">
    <div v-for="post in sss" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <div v-for="post in myPost" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <button v-on:click="showStore">bbb</button>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex";
export default {
  data: function() {
    return {
      postData: []
    };
  },
  methods: {
    ...mapActions(['fetchPosts']),
    showStore(){
      console.log(this.$store.getters);
    }
    
  },
  //   computed: {
  //     allPosts() {
  //       return this.$store.getters.allPosts;
  //     }
  //   },
    computed: {
      ...mapGetters(['sss','myPost', 'allPosts']),
      
    },
    
  mounted() {
    // this.$store.dispatch("fetchPosts")
    this.fetchPosts(6);
    console.log(app, "mounted");
  }
};
</script>

<style lang="scss"></style>
