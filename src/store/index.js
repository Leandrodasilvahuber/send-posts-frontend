import Vue from 'vue'
import Vuex from 'vuex'
import loginRequest from './LoginRequest'
import listPostsRequest from './ListPostsRequest'
import createUserRequest from './CreateUserRequest'
import createPostRequest from './CreatePostRequest'
import deletePostRequest from './DeletePostRequest'
import { setToken } from '../plugins/cookies/cookies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
  },

  getters: {
    posts(state) {
      return state.posts
    },
  },

  mutations: {
    async logout() {
      setToken(null)
    },

    async login(state, { email, password }) {
      const response = await loginRequest({ email, password })
      setToken(response.data.token)
    },

    async listPosts(state) {
      const response = await listPostsRequest()
      state.posts = response.data
    },

    async createPost(state, { title, message }) {
      await createPostRequest({ title, message })
    },

    async createUser(state, { name, email, password }) {
      await createUserRequest({ name, email, password })
    },

    async deletePost(state, id) {
      await deletePostRequest(id)

      const response = await listPostsRequest()
      state.posts = response.data
    },
  },
})
