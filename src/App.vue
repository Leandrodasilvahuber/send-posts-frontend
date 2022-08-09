<script>
import ErrorAlert from './components/ErrorAlert'

export default {
  data: () => ({
    drawer: null,
  }),

  components: {
    ErrorAlert,
  },

  methods: {
    logout() {
      this.$store.commit('logout')
      this.$router.push('/login-user')
      document.location.reload(true)
    },
  },

  computed: {
    showTemplate() {
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
              Institucional
            </v-btn>
          </v-flex>
        </v-row>
        <v-row class="mt-4">
          <v-flex d-flex child-flex class="fill-height">
            <v-btn to="/" class="d-flex justify-start ml-2">
              <v-icon left>mdi-text-search</v-icon>
              Listar Posts
            </v-btn>
          </v-flex>
        </v-row>
        <v-row class="mt-4">
          <v-flex d-flex child-flex class="fill-height">
            <v-btn to="/create-post" class="d-flex justify-start ml-2">
              <v-icon left>mdi-plus</v-icon>
              Adicionar Post
            </v-btn>
          </v-flex>
        </v-row>
        <v-row class="mt-4">
          <v-flex d-flex child-flex class="fill-height">
            <v-btn @click="logout" class="d-flex justify-start ml-2">
              <v-icon left>mdi-exit-to-app</v-icon>
              Sair
            </v-btn>
          </v-flex>
        </v-row>
      </v-navigation-drawer>
      <v-app-bar app v-if="showTemplate">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Seja bem vindo!</v-toolbar-title>
      </v-app-bar>
    </div>

    <v-main>
      <router-view></router-view>
    </v-main>

    <div class="fixed">
      <error-alert></error-alert>
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