<template>
  <div class="pagination">
    <button
      v-for="page in paginationPages"
      :key="page"
      class="pagination__btn"
      :class="{ 'pagination__btn--active': page === currentPage }"
      @click="changePage(page)"
    >
      {{ page }}
    </button>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();
  const router = useRouter();

  const newsStore = useNewsStore();
  const { newsItems, newsPerPage, filteredNewsItems } = storeToRefs(newsStore);

  const currentPage = ref(parseInt(route.params.page as string) || 1);

  const totalPages = computed(() =>
    Math.ceil(
      (filteredNewsItems.value.length || newsItems.value.length) /
        newsPerPage.value,
    ),
  );

  const paginationPages = computed(() => {
    const pages = [];
    if (totalPages.value <= 5) {
      for (let i = 1; i <= totalPages.value; i++) pages.push(i);
    } else {
      if (currentPage.value <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages.value);
      } else if (currentPage.value > totalPages.value - 3) {
        pages.push(
          1,
          '...',
          totalPages.value - 3,
          totalPages.value - 2,
          totalPages.value - 1,
          totalPages.value,
        );
      } else {
        pages.push(
          1,
          '...',
          currentPage.value - 1,
          currentPage.value,
          currentPage.value + 1,
          '...',
          totalPages.value,
        );
      }
    }
    return pages;
  });

  const changePage = (page: string | number) => {
    if (typeof page === 'number' && page !== currentPage.value) {
      currentPage.value = page;
      router.push({ name: 'page', params: { page } });
    }
  };

  watch(
    () => route.params.page,
    (newPage) => {
      currentPage.value = parseInt(newPage as string) || 1;
    },
  );
</script>

<style scoped lang="scss">
  .pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 50px 0;

    &__btn {
      @include btn-reset;
      color: $black;
      font-size: 18px;
      font-weight: 700;
      line-height: 21px;
      letter-spacing: 0%;
      transition: color 0.3s ease-in-out;

      &--active {
        color: $main-color;
      }
    }
  }
</style>
