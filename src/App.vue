<template>
  <div id="app" class="">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
}

h1 {
  font-size: 2rem !important;
}

h2 {
  font-size: 1.6rem !important;
}
h3 {
  font-size: 1.2rem !important;
}
</style>
