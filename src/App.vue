<script>
import ErrorAlert from './components/ErrorAlert'
import { getError } from './plugins/cookies/cookies'

export default {
  data: () => ({
    drawer: null,
    error: null,
  }),

  components: {
    ErrorAlert,
  },

  mounted() {
    this.$root.$on('reload-cookies', this.reloadCookies)
  },

  methods: {
    logout() {
      this.$store.commit('logout')
      this.$router.push('/login-user')
    },

    reloadCookies() {
      setTimeout(() => {
        this.error = getError()
      }, 4000)
    },
  },

  computed: {
    showTemplate() {
      this.reloadCookies()
      return this.$route.path === '/login-user' ||
        this.$route.path === '/create-user'
        ? false
        : true
    },
  },
}
</script>

<template>
  <v-app id="app">
    <div v-if="showTemplate">
      <v-navigation-drawer v-model="drawer" app>
        <v-row class="mt-1">
          <v-flex d-flex child-flex class="fill-height">
            <v-btn to="/about" class="d-flex justify-start ml-2">
              <v-icon left>mdi-account-tie</v-icon>
              About
            </v-btn>
          </v-flex>
        </v-row>
        <v-row class="mt-4">
          <v-flex d-flex child-flex class="fill-height">
            <v-btn to="/" class="d-flex justify-start ml-2">
              <v-icon left>mdi-text-search</v-icon>
              Posts
            </v-btn>
          </v-flex>
        </v-row>
        <v-row class="mt-4">
          <v-flex d-flex child-flex class="fill-height">
            <v-btn to="/create-post" class="d-flex justify-start ml-2">
              <v-icon left>mdi-plus</v-icon>
              Add Post
            </v-btn>
          </v-flex>
        </v-row>
        <v-row class="mt-4">
          <v-flex d-flex child-flex class="fill-height">
            <v-btn @click="logout" class="d-flex justify-start ml-2">
              <v-icon left>mdi-exit-to-app</v-icon>
              Log Out
            </v-btn>
          </v-flex>
        </v-row>
      </v-navigation-drawer>
      <v-app-bar app v-if="showTemplate">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Welcome to my humble app!</v-toolbar-title>
      </v-app-bar>
    </div>

    <v-main>
      <router-view></router-view>
    </v-main>

    <div class="fixed">
      <error-alert :error="error"></error-alert>
    </div>
  </v-app>
</template>

<style scoped>
.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
}
</style>