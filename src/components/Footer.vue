<template>
  <section class="footer pt-4">
    <div class="icon-container d-flex justify-content-around mr-auto ml-auto">
      <a href="https://twitter.com/Jide_Omotola" target="_blank"><i
          class="fab fa-twitter text-magenta icon-placeholder"></i></a>
      <a href="https://medium.com/@jbold1999" target="_blank"><i
          class="fab fa-medium text-magenta icon-placeholder"></i></a>
      <a href="https://github.com/jydoskey/" target="_blank"><i
          class="fab fa-github text-magenta icon-placeholder"></i></a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .icon-placeholder {
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
    padding: 1rem;
    background-color: white;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    -o-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  }

  .icon-container {
    max-width: 30rem;
  }
</style>