<script>
import CreateUser from '@/components/CreateUser'

export default {
  components: {
    CreateUser,
  },
}
</script>

<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <create-user class="mt-15"></create-user>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>