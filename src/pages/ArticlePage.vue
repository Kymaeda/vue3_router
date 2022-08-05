<template>
  <div>
    Articles with id: {{ $route.params.id }}
  </div>
  <div v-if="article">
    {{ article.title }}
  </div>
</template>

<script>
import { articles } from '../data';

export default {
  props: ['id'],
  data() {
    return {
      article: null,
    }
  },
  created() {
    if (articles[this.id] === undefined) {
      return this.$router.push({
        name: 'Not Found',
        params: {
          url: `${this.id}`
        },
      })
    }
    this.article = articles[this.id]
  },
}
</script>