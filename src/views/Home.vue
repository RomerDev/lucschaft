<template>
  <div>

    <section class="text-center flex flex-col">
      <div>
        <img class="h-44" src="../assets/icons/icon_over.svg" alt="about"/>
      </div>
      <h1 class="text-primary logo">LUC SCHAFT</h1>
      <h1 class="-mt-4 logo__underline">ALLROUND DESIGNER</h1>
      <img class="h-36 -mt-14" src="../assets/icons/icon_sterretjes.svg" alt="stars"/>

      <a href="#projects" id="js-cancel">
        <img class="h-16 absolute inset-center bottom-16" src="../assets/icons/icon_pijltje.svg" alt="arrow"/>
      </a>
      

      <div class="absolute bottom-16 right-16 flex space-x-10">
        <img class="h-8" src="../assets/icons/icon_dribble.svg" alt="dribbble"/>
        <img class="h-8" src="../assets/icons/icon_linkedin.svg" alt="linkedin"/>
        <img class="h-8" src="../assets/icons/icon_instagram.svg" alt="instagram"/>
      </div>
    </section>

    <section class="text-center flex flex-col">
      <About />
    </section>
    


  </div>
</template>

<script>
import About from '@/components/About.vue'

export default {
  name: 'Home',
    components: {
    About,
  }
}
</script>

<style scoped lang="scss">
.logo {
  font-size: 3.5rem !important;
}

.logo__underline {
  font-size: 1.5rem !important;
}
</style>
