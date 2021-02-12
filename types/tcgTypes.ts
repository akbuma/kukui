// Sets
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
  empty: boolean;
}

export interface CardSetHash {
  [key: string]: CardSet[];
}

export interface CardSetData {
  title: string;
  data: CardSet[][];
}

// Cards
export interface Card {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesTo: string[];
  attacks: IAttack[];
  weaknesses: IWeakness[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: CardSet;
  images: {
    small: string;
    large: string;
  };
  tcgplayer: {
    url: string;
    updatedAt: string;
    prices: {
      [key: string]: CardPrice;
    };
  };
}

export interface IAttack {
  convertedEnergyCost: number;
  cost: string[];
  damage: string;
  name: string;
  text: string;
}

export interface IWeakness {
  type: string;
  value: string;
}

export interface CardPrice {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}
