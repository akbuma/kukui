import React from 'react';
import { FlatList } from 'react-native';
import { CardSet } from '../types/tcgTypes';
import SeriesListItem from './SeriesListItem';

interface SeriesListProps {
  // seriesSets: CardSet[];
}

const data: CardSet[] = [
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
    empty: false,
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
    empty: false,
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
    empty: false,
  },
];

const SeriesList: React.FC<SeriesListProps> = ({}) => {
  const _formatData = (arr: CardSet[], numColumns: number) => {
    const totalRows = Math.floor(arr.length / numColumns);
    let totalLastRow = arr.length - totalRows * numColumns;
    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      data.push({
        id: '-',
        name: '-',
        series: '-',
        printedTotal: 0,
        total: 0,
        legalities: {},
        ptcgoCode: '-',
        releaseDate: '-',
        updatedAt: '-',
        images: {
          symbol: '',
          logo: '',
        },
        empty: true,
      });
      totalLastRow++;
    }
    return arr;
  };

  return (
    <FlatList
      data={_formatData(data, 2)}
      renderItem={({ item }) => <SeriesListItem set={item} />}
      keyExtractor={(item, id) => item.name + id}
      numColumns={2}
    />
  );
};

export default SeriesList;
