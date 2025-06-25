<template>
  <header>
    <div class="container flex-container">
      <NuxtLink to="/" class="logo"><span class="accent-color">NA</span> Cinema</NuxtLink>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
header {
  padding: 20px 0;
  border-bottom: 1px solid #2a2a2a;
  margin-bottom: 70px;

  a {
    font-size: 1.2rem;
  }

  .flex-container {
    align-items: center;
  }

  .logo {
    font-size: 2rem;
    font-weight: 600;

    &:hover {
      color: var(--text-color);
    }
  }
}
</style>
