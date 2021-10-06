<template>
  <div id="app">
    <div v-for="post in allPosts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <button>bbb</button>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  data: function() {
    return {
      postData: []
    };
  },
  methods: {},
  //   computed: {
  //     allPosts() {
  //       return this.$store.getters.allPosts;
  //     }
  //   },
    computed: mapGetters(['allPosts']),
  async mounted() {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=15"
    );
    const posts = await res.json();
    this.postData = posts;
    console.log(posts, "mounted");
    console.log(app, "mounted");
  }
};
</script>

<style lang="scss"></style>
