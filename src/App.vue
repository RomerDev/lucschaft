<template>
  <div id="app" class="px-16 relative min-h-screen">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'app',
  components: {
    Nav,
  }
}
</script>

<style lang="scss">
* {
  font-family: termina, sans-serif;
  font-weight: 400 !important;
  font-style: normal;
  font-size: .9rem !important
}

h1, h2 {
  font-family: termina, sans-serif;
  font-weight: 700 !important;
  font-style: normal;
  letter-spacing: .4rem;
}

h1 {
  font-size: 2rem !important;
}

h2 {
  font-size: 1.6rem !important;
}

h3 {
  font-size: 1.2rem !important;
  letter-spacing: .3rem;
}

a {
  font-size: inherit !important;
}

.inset-center {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
</style>
