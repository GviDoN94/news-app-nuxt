<template>
  <div class="filters">
    <ul class="source">
      <li>
        <button class="source__btn source__btn--active">Все</button>
      </li>
      <li>
        <button class="source__btn">Lenta.ru</button>
      </li>
      <li>
        <button class="source__btn">Mos.ru</button>
      </li>
    </ul>

    <ul class="view">
      <li>
        <button class="view__btn">
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
        <button class="view__btn view__btn--active">
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
