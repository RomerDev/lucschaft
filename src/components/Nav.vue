<template>
  <div id="nav" class="px-10 py-14 justify-between">
      <!-- <router-link :to="`/${$i18n.locale}`">Home</router-link> -->
      <LanguageSwitcher />
  </div>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

export default {
  name: 'Nav',
  components: {
    LanguageSwitcher,
  },
}
</script>

<style scoped lang="scss">
</style>
