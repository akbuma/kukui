import React from 'react';
import { FlatList } from 'react-native';
import { CardSet } from '../types/tcgTypes';
import SeriesListItem from './SeriesListItem';

interface SeriesListProps {
  // seriesSets: CardSet[];
}

const data = [
  {
    id: 'base1',
    name: 'Base',
    series: 'Base',
    printedTotal: 102,
    total: 102,
    legalities: {
      unlimited: 'Legal',
    },
    ptcgoCode: 'BS',
    releaseDate: '1999/01/09',
    updatedAt: '2020/08/14 09:35:00',
    images: {
      symbol: 'https://images.pokemontcg.io/base1/symbol.png',
      logo: 'https://images.pokemontcg.io/base1/logo.png',
    },
  },
  {
    id: 'base2',
    name: 'Jungle',
    series: 'Base',
    printedTotal: 64,
    total: 64,
    legalities: {
      unlimited: 'Legal',
    },
    ptcgoCode: 'JU',
    releaseDate: '1999/06/16',
    updatedAt: '2020/08/14 09:35:00',
    images: {
      symbol: 'https://images.pokemontcg.io/base2/symbol.png',
      logo: 'https://images.pokemontcg.io/base2/logo.png',
    },
  },
  {
    id: 'basep',
    name: 'Wizards Black Star Promos',
    series: 'Base',
    printedTotal: 53,
    total: 53,
    legalities: {
      unlimited: 'Legal',
    },
    ptcgoCode: 'PR',
    releaseDate: '1999/07/01',
    updatedAt: '2020/08/14 09:35:00',
    images: {
      symbol: 'https://images.pokemontcg.io/basep/symbol.png',
      logo: 'https://images.pokemontcg.io/basep/logo.png',
    },
  },
];

const SeriesList: React.FC<SeriesListProps> = ({}) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <SeriesListItem set={item} />}
      keyExtractor={(item, id) => item.name + id}
    />
  );
};

export default SeriesList;
