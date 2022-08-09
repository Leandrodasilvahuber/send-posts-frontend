<script>
export default {
  mounted() {
    this.$store.commit('listPosts')
  },
  computed: {
    posts() {
      return this.$store.getters.posts
    },
  },
  methods: {
    deletePost(postId) {
      this.$store.commit('deletePost', postId)
    },
  },
}
</script>

<template>
  <div>
    <v-row v-for="post in posts" :key="post.id">
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h5" style="text-transform: uppercase">
            <b>{{ post.title }}</b>
          </v-card-title>
          <v-card-subtitle>
            <h2>{{ post.message }}</h2>
          </v-card-subtitle>
          <v-card-actions>
            <v-flex class="text-right">
              <v-btn icon color="black" @click="deletePost(post.id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>