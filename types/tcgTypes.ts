export interface CardSet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: {
    [key: string]: any;
  };
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: {
    symbol: string;
    logo: string;
  };
}

export interface CardSetHash {
  [key: string]: CardSet[];
}

export interface CardSetData {
  title: string;
  data: CardSet[];
}
