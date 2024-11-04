<template>
  <li class="news-item">
    <h2 class="news-item__title">{{ newsItem.title }}</h2>
    <div class="news-item__description">{{ newsItem.description }}</div>
    <a
      class="news-item__details"
      :href="newsItem.link"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      Подробнее
    </a>
    <div class="news-item__footer">
      <a
        class="news-item__source"
        :href="newsItem.source.link"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        {{ newsItem.source.title }}
      </a>
      <time
        class="news-item__date"
        :datetime="newsItem.date.isoDate"
      >
        {{ newsItem.date.date }}
      </time>
    </div>
  </li>
</template>

<script setup lang="ts">
  import type { INewsItem } from '@/types';

  defineProps<{ newsItem: INewsItem }>();
</script>

<style scoped lang="scss">
  .news-item {
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    padding: 30px;
    padding-bottom: 16px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    background: $white;
    box-shadow:
      0px 1px 4px 0px $box-shadow,
      0px 2px 4px 0px $box-shadow;

    &__title {
      color: $main-color;
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
    }

    &__description {
      margin-top: 25px;
      color: $black;
    }

    &__details {
      @include link-reset;
      display: block;
      margin-top: 20px;
      margin-bottom: auto;
      color: $main-color;
      text-decoration-line: underline;
    }

    &__footer {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: $grey-text;
    }

    &__source {
      @include link-reset;
      text-decoration-line: underline;
    }
  }
</style>
