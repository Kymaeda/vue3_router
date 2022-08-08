<template>
  <div v-for="comment in comments" :key="comment.id">
    {{ comment.comment }}
  </div>
</template>

<script>
import { articles } from '../../data';

export default {
  props: { id: String },
  data() {
    return {
      comments: [],
    }
  },
  watch: {
    id() {
      this.loadComments();
    }
  },
  created() {
    this.loadComments();
  },
  methods: {
    loadComments() {
      this.comments = articles[this.id]?.comments ?? [];
    }
  }
}
</script>