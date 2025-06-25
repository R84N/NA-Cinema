<template>
  <section class="banner flex-container">
    <div class="container">
      <h1 class="banner-title">No mor ads in your cinema !</h1>
      <p class="banner-subtitle">Free content that you can watch just now</p>
    </div>
  </section>
</template>

<style lang="scss">
.banner {
  &.flex-container {
    justify-content: center;
    align-items: center;
    height: calc(100vh - 150px);
  }

  .banner-title {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .banner-subtitle {
    text-align: center;
    font-size: 2.5rem;
  }
}
</style>
