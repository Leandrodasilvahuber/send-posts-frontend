<script>
import { getError } from '../plugins/cookies/cookies'

export default {
  data: () => ({
    user: {
      password: null,
      email: null,
    },

    rules: {
      password: [
        (value) => !!value || 'Required.',
        (value) => (value && value.length >= 8) || 'Min 8 characters',
      ],
      email: [
        (value) => !!value || 'Required.',
        (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],
    },
  }),

  computed: {
    formIsValid() {
      return this.user.password && this.user.email
    },
  },

  methods: {
    async logar() {
      const { email, password } = this.user
      this.$store.commit('login', { email, password })

      setTimeout(() => {
        this.$root.$emit('reload-cookies')
        if (getError() === null) {
          this.$router.push('/')
        } else {
          this.$router.push('/login-user')
        }
      }, 4000)
    },

    createUser() {
      this.$router.push('/create-user')
    },
  },
}
</script>

<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>Login - Aluminium API</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="user.email"
          name="email"
          label="Email"
          type="text"
          :rules="rules.email"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.password"
          id="password"
          name="password"
          label="Password"
          type="password"
          :rules="rules.password"
          required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn :disabled="!formIsValid" color="primary" @click="logar()"
        >Login</v-btn
      >
      <v-spacer></v-spacer>
      <v-btn @click="createUser()">Sigin in</v-btn>
    </v-card-actions>
  </v-card>
</template>
