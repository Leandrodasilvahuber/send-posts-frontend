<script>
export default {
  props: {
    error: null,
  },
}
</script>

<template>
  <div>
    <v-alert dense outlined type="error" v-if="error"> {{ error }}</v-alert>
  </div>
</template>

