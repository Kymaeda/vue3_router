<template>
  <h3>Home</h3>
  <h4>All articles</h4>
  <article-list :articles="articles"></article-list>

  <h4>Browse by tags</h4>
  <div>
    <router-link :to="{name: 'tag', params: { tags: ['books', 'health'] }}">
      Health Books
    </router-link>
    <router-link :to="{name: 'tag', params: { tags: ['health'] }}">
      Health
    </router-link>
  </div>
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