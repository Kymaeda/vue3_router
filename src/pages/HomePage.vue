<template>
  <h3>Home</h3>
  <article-list :articles="articles"></article-list>
</template>

<script>
import ArticleList from '../components/ArticleList.vue';
import { articles } from '../data';

export default {
  components: {
    ArticleList,
  },
  computed: {
    articles() {
      return articles;
    }
  }
}
</script>