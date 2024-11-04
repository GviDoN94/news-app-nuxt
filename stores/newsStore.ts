import type { INewsItem, TSource } from '@/types';

export const useNewsStore = defineStore('newsStore', () => {
  const resources = reactive({
    mos: 'https://www.mos.ru/rss',
    vedomosti: 'https://www.vedomosti.ru/rss/news',
  });
  const newsItems = ref<INewsItem[]>([]);
  const activeSource = ref<TSource>('all');

  const setSource = async (source: TSource = 'all') => {
    activeSource.value = source;

    if (source === 'all') {
      const mosNewsPromise = getNewsItems(resources.mos);
      const vedomostiNewsPromise = getNewsItems(resources.vedomosti);

      const [mosNews, vedomostiNews] = await Promise.all([
        mosNewsPromise,
        vedomostiNewsPromise,
      ]);

      const data = [];

      if (mosNews) {
        data.push(...mosNews);
      }
      if (vedomostiNews) {
        data.push(...vedomostiNews);
      }

      data.sort((a, b) => {
        return (
          new Date(b.date.isoDate).getTime() -
          new Date(a.date.isoDate).getTime()
        );
      });

      newsItems.value = data;
    } else {
      const data = await getNewsItems(
        resources[source as keyof typeof resources],
      );

      if (data) {
        newsItems.value = data;
      }
    }
  };

  const getNewsItems = async (url: string) => {
    try {
      const response = await $fetch(`/api/fetchRss?url=${url}`);

      const sourceTitle = response.rss.channel.link.split('//')[1];

      return response.rss.channel.item.map((item) => {
        return {
          date: formatDate(item.pubDate),
          description: item.description,
          image: Array.isArray(item.enclosure)
            ? item.enclosure[0].url
            : item.enclosure?.url,
          link: item.link,
          source: { title: sourceTitle, link: response.rss.channel.link },
          title: item.title,
        };
      });
    } catch (e) {
      console.error(e);
    }
  };

  const viewMode = ref<'grid' | 'list'>('grid');

  const setViewMode = (mode: 'grid' | 'list') => {
    viewMode.value = mode;
  };

  const searchQuery = ref<string | undefined>();

  const setSearchQuery = (query: string | undefined) =>
    (searchQuery.value = query);

  return {
    newsItems,
    getNewsItems,
    activeSource,
    setSource,
    viewMode,
    setViewMode,
    searchQuery,
    setSearchQuery,
  };
});
