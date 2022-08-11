<script>
import { LOCAL_URI } from '../../env'

export default {
  computed: {
    urlPDF() {
      return `${LOCAL_URI}curriculo.pdf`
    },
  },
}
</script>

<template>
  <div class="about">
    <v-row class="pa-10">
      <v-card class="pa-5">
        <p>This is just an application example.</p>
        <p>
          We have the API in Node and the frontend in Vue. You can create and
          delete posts and see how it's done in the repository.
        </p>

        <p>
          <v-btn
            class="mr-5"
            href="https://github.com/Leandrodasilvahuber/vue-api"
            target="_blank"
          >
            Github Vue
          </v-btn>

          <v-btn
            href="https://github.com/Leandrodasilvahuber/js-api"
            target="_blank"
          >
            Github Api
          </v-btn>
        </p>
      </v-card>
    </v-row>

    <v-row>
      <v-col class="ml-7">
        <v-btn :href="urlPDF" target="_blank"> Download Curriculum </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

 