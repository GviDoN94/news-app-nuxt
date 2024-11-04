<template>
  <ul class="news">
    <NewsItem
      v-for="i in 4"
      :key="i"
    />
  </ul>
</template>

<style scoped lang="scss">
  .news {
    @include list-reset;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    &--list {
      grid-template-columns: auto;
    }
  }
</style>
