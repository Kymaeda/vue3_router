<template>
  tags are "{{ separatedTags }}"
  <article-list :articles="articles">

  </article-list>
</template>

<script>
import ArticleList from '../components/ArticleList.vue';
import { articles } from '../data';

export default {
  components: { ArticleList },
  props: {
    tags: Array
  },
  computed: {
    articles() {
      return Object.values(articles).filter(
        (article) => article.tags.filter((tag) => this.tags.includes(tag)).length
      )
    },
    separatedTags() {
      return this.tags.join(', ')
    },
  },
}
</script>