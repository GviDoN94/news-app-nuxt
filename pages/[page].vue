<template>
  <ul
    v-if="newsList.length"
    class="news"
    :class="{ 'news--list': viewMode === 'list' }"
  >
    <NewsItem
      v-for="(newsItem, i) in newsList"
      :key="i"
      :newsItem="newsItem"
      :viewMode="viewMode"
    />
  </ul>

  <div v-else>Новости не найдены</div>
</template>

<script setup lang="ts">
  const route = useRoute();

  const newsStore = useNewsStore();

  const { viewMode, filteredNewsItems, newsPerPage } = storeToRefs(newsStore);

  const newsList = computed(() => {
    const currentPage = parseInt(route.params.page as string) || 1;
    const startIndex = (currentPage - 1) * newsPerPage.value;
    const endIndex = startIndex + newsPerPage.value;

    return filteredNewsItems.value.slice(startIndex, endIndex);
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
