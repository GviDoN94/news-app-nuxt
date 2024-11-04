import { XMLParser } from 'fast-xml-parser';
import type { IRssData } from '@/types';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const rssUrl = query.url as string;

  if (!rssUrl) {
    throw createError({ statusCode: 400, message: 'RSS URL is required' });
  }

  try {
    const response = await $fetch(rssUrl);

    if (typeof response === 'string') {
      const xmlData = response;

      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '',
      });
      const parsedData: IRssData = parser.parse(xmlData);

      return parsedData;
    } else {
      throw new Error('Fetched data is not a string');
    }
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    throw createError({ statusCode: 500, message: 'Failed to fetch RSS feed' });
  }
});
