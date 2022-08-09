<script>
import cookie from 'cookiejs'
import ListPosts from '../components/ListPosts'

export default {
  components: {
    ListPosts,
  },
  computed: {
    login() {
      return cookie('token') || null ? true : false
    },
  },
}
</script>

<template>
  <div>
    <list-posts v-if="login"></list-posts>
  </div>
</template>