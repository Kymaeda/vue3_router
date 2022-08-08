<template>
  <div v-if="article">
    <h3>{{ article.title }}</h3>
    <div>
      <router-link :to="{name: 'articles.comments', params: { id: article.id }}">See Comments</router-link> |
      <router-link :to="{name: 'articles.author'}">See Author</router-link>
      <RouterView />
    </div>
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
  watch: {
    id() {
      this.loadArticle()
    }
  },
  created() {
    this.loadArticle()
  },
  methods: {
    loadArticle() {
      if (articles[this.id] === undefined) {
        return this.$router.push({
          name: 'Not Found',
          params: {
            url: `${this.id}`
          },
        })
      }
      this.article = articles[this.id]
    }
  }
}
</script>