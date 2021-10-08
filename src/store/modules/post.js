export default {
  actions: {
    async fetchPosts(ctx, limit = 3) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
      );
      const posts = await res.json();
      console.log(posts, 'ppppp');
      console.log(ctx, 'ccttxxx');
      ctx.commit('updatePosts', posts)
    }
  },
  mutations: {
    updatePosts(state, posts) {
      console.log(posts, 'POSTS');
      state.posts = posts 
      console.log(state, 'SSSSSPOSTS');
    }
  },
  state: {  
    arr: [{title: 'ffff'}]
  },
  getters: {
    myPost(state){
      return state.posts
    },
    allPosts(state) {
        return state.arr
    },
    sss(state){
      return state.posts
    }
  }
};
