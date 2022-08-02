<template>
  <div>
    Articles with id: {{ $route.params.id }}
  </div>
  <div v-if="article">
    {{ article.title }}
  </div>
</template>

<script>
const articles = {
  1: { title: 'title1' },
  2: { title: 'title2' },
  3: { title: 'title3' },
}
export default {
  data() {
    return {
      article: null,
    }
  },
  watch: {
    '$route.params': {
      handler: function(newParams) {
        this.article = articles[newParams.id]
      },
      immediate: true,
    },
  },
}
</script>