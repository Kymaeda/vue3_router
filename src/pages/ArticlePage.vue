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
  data() {
    return {
      article: null,
    }
  },
  watch: {
    '$route.params': {
      handler: function(newParams) {
        if (newParams.id != undefined && articles[newParams.id] === undefined) {
          return this.$router.push({
            name: 'Not Found',
            params: {
              url: `${newParams.id}`
            },
          })
        }
        this.article = articles[newParams.id]
      },
      immediate: true,
    },
  },
}
</script>