<template>
  <ul
    v-if="filterdNews.length"
    class="news"
    :class="{ 'news--list': viewMode === 'list' }"
  >
    <NewsItem
      v-for="(newsItem, i) in filterdNews"
      :key="i"
      :newsItem="newsItem"
      :viewMode="viewMode"
    />
  </ul>

  <div v-else>Новости не найдены</div>
</template>

<script setup lang="ts">
  const newsStore = useNewsStore();

  const { newsItems, viewMode, searchQuery } = storeToRefs(newsStore);

  const filterdNews = computed(() => {
    if (searchQuery.value) {
      return newsItems.value.filter((item) => {
        return item.title
          .toLowerCase()
          .includes(searchQuery.value!.toLowerCase());
      });
    }
    return newsItems.value;
  });
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

  @media (max-width: 767px) {
    .news {
      grid-template-columns: auto;
    }
  }
</style>
