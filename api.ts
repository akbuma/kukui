import { API_KEY } from '@env';
import { CardSet, CardSetHash } from './types/tcgTypes';

/*
 * retrieve set data and parse into type
 * @return { title: string, data: any[] }[]
 */
export const getAllSets = async () => {
  const response = await fetch('https://api.pokemontcg.io/v2/sets', {
    method: 'GET',
    headers: {
      'X-Api-Key': `${API_KEY}`,
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  let data = await result.data;
  let sectionListData: CardSetHash = await data.reduce(
    (obj: CardSetHash, set: CardSet) => {
      return {
        ...obj,
        [set.series]: [...(obj[set.series] || []), set],
      };
    },
    {},
  );
  return Object.keys(sectionListData).map((series) => ({
    title: series,
    data: [sectionListData[series]],
  }));
};

/*
 * retrieve card data from a given set
 * @return Card[]
 */
export const getAllCards = async (setID: string) => {
  const response = await fetch(
    `https://api.pokemontcg.io/v2/cards?q=set.id:${setID}`,
    {
      method: 'GET',
      headers: {
        'X-Api-Key': `${API_KEY}`,
        'Content-Type': 'application/json',
      },
    },
  );
  const result = await response.json();
  let data = await result.data; // Card[]
  return data;
};
