<script>
export default {
  data: () => ({
    rules: {
      name: [(value) => !!value || 'Required.'],
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

    user: {
      name: null,
      password: null,
      email: null,
    },
  }),

  computed: {
    formIsValid() {
      return this.user.name && this.user.password && this.user.email
    },
  },

  methods: {
    save() {
      const { name, email, password } = this.user
      this.$store.commit('createUser', { name, email, password })
      this.$router.push('/login-user')
    },
  },
}
</script>

<template>
  <div>
    <v-form>
      <v-text-field
        v-model="user.name"
        name="name"
        label="Name"
        type="text"
        :rules="rules.name"
        required
      ></v-text-field>
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

    <v-btn :disabled="!formIsValid" color="primary" @click="save()">Save</v-btn>
  </div>
</template>
