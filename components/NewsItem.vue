<template>
  <li class="news-item">
    <h2 class="news-item__title">
      Первые земельные участки реализованы на специальных торгах для малого и
      среднего бизнеса
    </h2>
    <div class="news-item__description">
      На каждый участок претендовали в среднем шесть участников. Стоимость одной
      из сделок выросла в ходе аукциона в 26 раз.
    </div>
    <a
      class="news-item__details"
      href="#"
      >Подробнее</a
    >
    <div class="news-item__footer">
      <a
        class="news-item__source"
        href="#"
      >
        www.mos.ru
      </a>
      <time
        class="news-item__date"
        datetime="2020-01-12"
      >
        12.01.2020
      </time>
    </div>
  </li>
</template>

<style scoped lang="scss">
  .news-item {
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
