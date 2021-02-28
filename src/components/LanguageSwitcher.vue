<template>
  <div id="language-switcher">
      <div class="flex">
          <h3>
              <a :class="{ active: $route.params.lang === 'nl' }" class="mr-2" href="#" @click.prevent="setLocale('nl')">NL</a>
          </h3>

          <h3>
              <a :class="{ active: $route.params.lang === 'en' }" href="#" @click.prevent="setLocale('en')">ENG</a>
          </h3>
      </div>
  </div>
</template>

<script>

export default {
    name: 'LanguageSwitcher',
    methods: {
        setLocale(locale) {
            this.$i18n.locale = locale
            this.$router.push({
                params: { lang: locale }
            })
        }
    }
}
</script>

<style scoped lang="scss">
.active {
    font-weight: bold !important;
    position: relative;
    padding-bottom: .6rem;
    border-bottom: 3px solid;
    @apply border-primary;
}
</style>
