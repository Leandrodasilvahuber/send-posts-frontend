<script>
import cookie from 'cookiejs'

export default {
  computed: {
    error() {
      return cookie('error') || null
    },
  },
}
</script>
<template>
  <div>
    <v-alert dense outlined type="error" v-if="error"> {{ error }}</v-alert>
  </div>
</template>

