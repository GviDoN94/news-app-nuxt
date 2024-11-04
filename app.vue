<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import type { TSource } from '@/types';

  const newsStore = useNewsStore();

  const { setSource, setViewMode, setSearchQuery } = newsStore;

  const route = useRoute();

  const initialSource = (route.query.source as TSource) || 'all';
  await useAsyncData('getNewsItems', () =>
    setSource(initialSource).then(() => true),
  );

  const initialSearchQuery = route.query.search as string | undefined;
  setSearchQuery(initialSearchQuery);

  onMounted(() => {
    const savedViewMode = window.localStorage.getItem('viewMode') as
      | 'grid'
      | 'list'
      | null;
    setViewMode(savedViewMode || 'grid');
  });
</script>
