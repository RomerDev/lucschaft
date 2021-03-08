<template>
  <div id="projects">
    <h1 class="uppercase">{{ $t('projects.title') }}</h1>
    <h3 class="uppercase text-primary mb-14">{{ $t('projects.undertitle') }}</h3>

    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-20">
      <div class="bg-primary project-card">
        <div class="w-full h-full flex flex-col justify-center text-center text-black p-5 project-card__text">
            <h1 class="uppercase">Huisstijl</h1>
            <h3 class="uppercase">Studio Spark</h3>
        </div>
        <img class="" src="../assets/covers/spark.jpg" alt="spark"/>
      </div>
      <div class="bg-primary project-card">
        <div class="w-full h-full flex flex-col justify-center text-center text-black p-5 project-card__text">
            <h1 class="uppercase">{{ $t('projects.title') }}</h1>
            <h3 class="uppercase">{{ $t('projects.undertitle') }}</h3>
        </div>
        <img class="" src="../assets/covers/spark.jpg" alt="spark"/>
      </div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped lang="scss">
.project-card {
  &__text {
    display: none;
  }

  &:hover {
    img {
      display: none;
    }

    .project-card__text {
      display: flex;
    }
  }
}
</style>
