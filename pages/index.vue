<template>
  <ul
    class="news"
    :class="{ 'news--list': viewMode === 'list' }"
  >
    <NewsItem
      v-for="(newsItem, i) in newsItems"
      :key="i"
      :newsItem="newsItem"
      :viewMode="viewMode"
    />
  </ul>
</template>

<script setup lang="ts">
  const newsStore = useNewsStore();

  const { newsItems, viewMode } = storeToRefs(newsStore);
</script>

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
