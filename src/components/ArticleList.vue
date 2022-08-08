<template>
  <div v-for="article in articles" :key="article.id">
    <router-link :to="{ name: 'articles.comments', params: { id: article.id } }">
      {{ article.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    articles: Object
  }
}
</script>