<template>
  <div>
    <div><router-link :to="{name: 'home'}">Home Page</router-link></div>
    <div><router-link :to="{name: 'about'}">About Page</router-link></div>
  </div>
  <RouterView />
</template>

<script>
export default {
  name: 'App',
}
</script>
