<template>
  <header class="header">
    <div class="container">
      <h1 class="header__title">Список новостей</h1>
      <button class="refresh-news">
        <svg
          width="20.000000"
          height="16.000000"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs />
          <path
            id="refresh-news"
            d="M9.29 0.05C10.35 -0.08 11.38 0.03 12.32 0.31C15.46 1.26 17.77 4.23 17.81 7.75L19.86 7.75C19.97 7.75 20.04 7.9 19.97 7.99L16.86 12.34C16.81 12.41 16.7 12.41 16.66 12.34L13.55 8C13.48 7.9 13.55 7.76 13.66 7.76L15.71 7.76C15.67 5.44 14.28 3.46 12.32 2.61C11.58 2.29 10.76 2.13 9.9 2.17C8.72 2.23 7.63 2.69 6.75 3.41C6.29 3.8 5.6 3.7 5.25 3.21C4.91 2.73 5 2.07 5.45 1.71C6.53 0.81 7.85 0.22 9.29 0.05ZM13.24 12.59C12.36 13.31 11.27 13.77 10.09 13.83C9.23 13.88 8.41 13.71 7.67 13.39C5.71 12.54 4.32 10.56 4.28 8.25L6.33 8.25C6.44 8.25 6.51 8.1 6.44 8L3.33 3.66C3.28 3.59 3.18 3.59 3.13 3.66L0.02 8C-0.04 8.1 0.02 8.24 0.13 8.24L2.18 8.24C2.22 11.76 4.53 14.74 7.67 15.68C8.61 15.97 9.64 16.07 10.7 15.94C12.14 15.78 13.46 15.18 14.54 14.29C14.99 13.92 15.08 13.26 14.74 12.79C14.39 12.3 13.7 12.2 13.24 12.59Z"
            fill="#0029FF"
            fill-opacity="1.000000"
            fill-rule="evenodd"
          />
        </svg>
      </button>
      <input
        class="search"
        type="text"
      />
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    padding: 36px 0;

    .container {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    &__title {
      margin: 0;
      margin-right: 30px;
      color: $black;
      font-size: 36px;
      font-weight: 700;
      line-height: 41px;
      letter-spacing: 0;
    }

    .refresh-news {
      @include btn-reset;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: auto;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: $white;
      box-shadow:
        0px 1px 4px 0px $box-shadow,
        0px 2px 4px 0px $box-shadow;
    }

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
  }

  @media (max-width: 767px) {
    .header {
      .container {
        justify-content: space-between;
      }

      &__title {
        font-size: 24px;
        line-height: 28px;
      }

      .refresh-news {
        margin: 0;
      }

      .search {
        margin-top: 20px;
        max-width: 100%;
      }
    }
  }
</style>
