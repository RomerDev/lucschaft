<template>
  <div id="nav">
      <router-link :to="`/${$i18n.locale}`">Home</router-link> |
      <router-link :to="`/${$i18n.locale}/about`">About</router-link>
  </div>
</template>

<script>
export default {
    name: 'Nav',
}
</script>

<style scoped lang="scss">
</style>
