<script>
import LoginUser from '../components/LoginUser'

export default {
  components: {
    LoginUser,
  },
}
</script>

<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <login-user></login-user>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

