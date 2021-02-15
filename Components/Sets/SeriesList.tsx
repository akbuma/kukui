import React from 'react';
import { FlatList } from 'react-native';
import { CardSet } from '../../types/tcgTypes';
import SeriesListItem from './SeriesListItem';

interface SeriesListProps {
  seriesSets: CardSet[];
}

const SeriesList: React.FC<SeriesListProps> = ({ seriesSets }) => {
  const _formatData = (arr: CardSet[], numColumns: number) => {
    const totalRows = Math.floor(arr.length / numColumns);
    let totalLastRow = arr.length - totalRows * numColumns;
    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      arr.push({
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
      data={_formatData(seriesSets, 2)}
      renderItem={({ item }) => <SeriesListItem set={item} />}
      keyExtractor={(item, id) => item.name + id}
      numColumns={2}
    />
  );
};

export default SeriesList;
