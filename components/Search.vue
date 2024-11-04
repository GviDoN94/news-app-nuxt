<template>
  <input
    v-model="searchValue"
    @input="updateSearchQuery"
    class="search"
    type="text"
  />
</template>

<script setup lang="ts">
  const route = useRoute();
  const router = useRouter();

  const newsStore = useNewsStore();
  const { searchQuery } = storeToRefs(newsStore);
  const { setSearchQuery } = newsStore;

  const searchValue = ref<string | undefined>(searchQuery.value);

  const timer = ref<ReturnType<typeof setTimeout> | undefined>();

  const updateSearchQuery = (event: Event) => {
    if (timer.value) {
      clearTimeout(timer.value);
    }

    timer.value = setTimeout(() => {
      const value = (event.target as HTMLInputElement).value;

      router.push({ query: { ...route.query, search: value || undefined } });
      setSearchQuery(value);
    }, 300);
  };

  watch(
    () => route.query.search,
    (newSearchQuery) => {
      searchValue.value = newSearchQuery as string;
    },
  );
</script>

<style scoped lang="scss">
  .search {
    border: none;
    border-radius: 3px;
    padding: 10px 13px;
    padding-right: 40px;
    max-width: 321px;
    width: 100%;
    height: 40px;
    background-color: $white;
    box-shadow:
      0px 1px 4px 0px $box-shadow,
      0px 2px 4px 0px $box-shadow;
    outline: none;
    background-image: url('/search.svg');
    background-repeat: no-repeat;
    background-position: calc(100% - 13px) center;
    background-size: 20px 20px;
  }

  @media (max-width: 767px) {
    .search {
      margin-top: 20px;
      max-width: 100%;
    }
  }
</style>
