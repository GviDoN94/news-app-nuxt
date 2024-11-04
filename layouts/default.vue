<template>
  <HeaderComponent />

  <main>
    <div class="container">
      <div class="separator"></div>
      <FiltersBar />
      <slot />
      <Pagination />
    </div>
  </main>
</template>

<style scoped lang="scss">
  .separator {
    width: 100%;
    height: 1px;
    background-color: #e5e5e5;
  }
</style>
