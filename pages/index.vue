<template>
  <ul class="news">
    <NewsItem
      v-for="(newsItem, i) in newsItems"
      :key="i"
      :newsItem="newsItem"
    />
  </ul>
</template>

<script setup lang="ts">
  const newsStore = useNewsStore();

  const { setSource } = newsStore;
  const { newsItems } = storeToRefs(newsStore);

  await useAsyncData('getNewsItems', () => setSource().then(() => true));
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
