export interface IEnclosure {
  url: string;
  type: string;
}

export interface IItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  enclosure?: IEnclosure | IEnclosure[];
}

export interface IChannel {
  title: string;
  link: string;
  description: string;
  item: IItem[];
}

export interface IRssData {
  '?xml': {
    version: string;
    encoding: string;
  };
  rss: {
    channel: IChannel;
  };
}

export interface INewsItem extends Omit<IItem, 'enclosure' | 'pubDate'> {
  date: { date: string; isoDate: string };
  image: string | undefined;
  source: { title: string; link: string };
}

export type TSource = 'all' | 'mos' | 'vedomosti';
