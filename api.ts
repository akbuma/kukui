import { API_KEY } from '@env';

export const getAllSets = async () => {
  const response = await fetch('https://api.pokemontcg.io/v2/sets', {
    method: 'GET',
    headers: {
      'X-Api-Key': `${API_KEY}`,
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result.data;
};
