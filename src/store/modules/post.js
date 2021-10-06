export default {
  actions: {},
  mutations: {},
  state: {
    postsArr: [{title: 'fffffff'}]
  },
  getters: {
    allPosts(state) {
        return state.postsArr
    }
  }
};
