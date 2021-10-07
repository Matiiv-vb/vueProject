<template>
  <div id="app">
    <div v-for="post in myPost" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <button>bbb</button>
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
    // ...mapActions(['fetchPosts'])
    
  },
  //   computed: {
  //     allPosts() {
  //       return this.$store.getters.allPosts;
  //     }
  //   },
    computed: {
      ...mapGetters(['myPost', 'allPosts']),
      
    },
    
  async mounted() {
    this.$store.dispatch("fetchPosts")
    console.log(app, "mounted");
  }
};
</script>

<style lang="scss"></style>
