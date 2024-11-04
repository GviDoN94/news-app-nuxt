<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  const newsStore = useNewsStore();

  const { setSource, setViewMode } = newsStore;

  await useAsyncData('getNewsItems', () => setSource().then(() => true));

  onMounted(() => {
    const savedViewMode = window.localStorage.getItem('viewMode') as
      | 'grid'
      | 'list'
      | null;
    setViewMode(savedViewMode || 'grid');
  });
</script>
