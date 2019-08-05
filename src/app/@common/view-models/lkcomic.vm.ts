import { ResultVM } from './result.vm';

export interface LKComicItem {
  id: string;
  title: string;
  originUrl: string;
  datePost: Date;
}


export interface LKComicImageResultVM extends ResultVM {
  item: {
    title: string;
  };
  items: Array<{
    id: string;
    src: string;
  }>;
}
