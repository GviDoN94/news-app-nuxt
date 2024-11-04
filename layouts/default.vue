<template>
  <HeaderComponent />

  <main>
    <div class="container">
      <div class="separator"></div>
      <FiltersBar />
      <slot />
      <Pagination v-if="showPagination" />
    </div>
  </main>
</template>

<script setup lang="ts">
  const newsStore = useNewsStore();
  const { newsPerPage, filteredNewsItems } = storeToRefs(newsStore);

  const showPagination = computed(
    () => filteredNewsItems.value.length > newsPerPage.value,
  );
</script>

<style scoped lang="scss">
  .separator {
    width: 100%;
    height: 1px;
    background-color: #e5e5e5;
  }
</style>
