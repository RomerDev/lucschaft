<template>
  <div id="nav" class="py-7 flex justify-between" style="height: 110px;">
      <img class="h-16" src="../assets/icons/icon_kruisje.svg" alt="Menu"/>
      <img class="h-20 inset-center" src="../assets/logos/wit.svg" alt="Menu"/>
      <LanguageSwitcher class="my-auto" />
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
