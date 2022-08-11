<script>
import ListPosts from '../components/ListPosts'
import { getToken } from '../plugins/cookies/cookies'

export default {
  components: {
    ListPosts,
  },
  computed: {
    login() {
      return getToken() ? true : false
    },
  },
}
</script>

<template>
  <div>
    <list-posts v-if="login"></list-posts>
  </div>
</template>