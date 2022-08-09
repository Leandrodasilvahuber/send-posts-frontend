<script>
export default {
  data: () => ({
    rules: {
      title: [(value) => !!value || 'Required.'],
      message: [(value) => !!value || 'Required.'],
    },

    post: {
      title: null,
      message: null,
    },
  }),

  computed: {
    formIsValid() {
      return this.post.title && this.post.message
    },
  },

  methods: {
    save() {
      const { title, message } = this.post
      this.$store.commit('createPost', { title, message })
      this.$store.commit('listPosts')
      this.$router.push('/')
    },
  },
}
</script>

<template>
  <div>
    <v-form class="pa-15">
      <v-text-field
        v-model="post.title"
        name="title"
        label="Title"
        type="text"
        :rules="rules.title"
        required
      ></v-text-field>
      <v-text-field
        v-model="post.message"
        name="message"
        label="Message"
        type="text"
        :rules="rules.message"
        required
      ></v-text-field>

      <v-btn :disabled="!formIsValid" color="primary" @click="save()"
        >Save</v-btn
      >
    </v-form>
  </div>
</template>
