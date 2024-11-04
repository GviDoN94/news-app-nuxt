<template>
  <div class="filters">
    <ul class="source">
      <li
        v-for="source in sources"
        :key="source.value"
      >
        <button
          class="source__btn"
          :class="{ 'source__btn--active': activeSource === source.value }"
          @click="updateSource(source.value)"
          :disabled="activeSource === source.value"
        >
          {{ source.label }}
        </button>
      </li>
    </ul>

    <ul class="view">
      <li>
        <button
          class="view__btn"
          :class="{ 'view__btn--active': viewMode === 'list' }"
          @click="updateViewMode('list')"
        >
          <svg
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs />
            <rect
              id="Rectangle 9"
              width="18.000000"
              height="8.000000"
              fill-opacity="1.000000"
            />
            <rect
              id="Rectangle 10"
              y="10.000000"
              width="18.000000"
              height="8.000000"
              fill-opacity="1.000000"
            />
          </svg>
        </button>
      </li>
      <li>
        <button
          class="view__btn"
          :class="{ 'view__btn--active': viewMode === 'grid' }"
          @click="updateViewMode('grid')"
        >
          <svg
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs />
            <rect
              id="Rectangle 5"
              width="8.000000"
              height="8.000000"
              fill-opacity="1.000000"
            />
            <rect
              id="Rectangle 7"
              y="10.000000"
              width="8.000000"
              height="8.000000"
              fill-opacity="1.000000"
            />
            <rect
              id="Rectangle 6"
              x="10.000000"
              width="8.000000"
              height="8.000000"
              fill-opacity="1.000000"
            />
            <rect
              id="Rectangle 8"
              x="10.000000"
              y="10.000000"
              width="8.000000"
              height="8.000000"
              fill-opacity="1.000000"
            />
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import type { TSource } from '@/types';

  const route = useRoute();
  const router = useRouter();

  const newsStore = useNewsStore();

  const { activeSource, viewMode } = storeToRefs(newsStore);
  const { setSource, setViewMode } = newsStore;

  const sources: { value: TSource; label: string }[] = [
    { value: 'all', label: 'Все' },
    { value: 'vedomosti', label: 'Ведомости' },
    { value: 'mos', label: 'Mos.ru' },
  ];

  const updateSource = (source: TSource) => {
    router.replace({ query: { ...route.query, source } });
    setSource(source);
  };

  const updateViewMode = (viewMode: 'grid' | 'list') => {
    localStorage.setItem('viewMode', viewMode);
    setViewMode(viewMode);
  };
</script>

<style scoped lang="scss">
  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;

    .source {
      @include list-reset;
      display: flex;
      align-items: center;
      gap: 17px;

      &__btn {
        @include btn-reset;
        color: $main-color;
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0;
        transition: color 0.3s ease-in-out;

        &--active {
          color: $black;
        }
      }
    }

    .view {
      @include list-reset;
      display: flex;
      align-items: center;
      gap: 10px;

      &__btn {
        @include btn-reset;
        width: 18px;
        height: 18px;
        transition: background-color 0.3s ease-in-out;

        svg rect {
          fill: $grey;
          transition: fill 0.3s ease-in-out;
        }

        &--active {
          svg rect {
            fill: $main-color;
          }
        }
      }
    }
  }
</style>
