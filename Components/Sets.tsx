import React, { useState, useEffect } from 'react';
import { SafeAreaView, SectionList, Text } from 'react-native';
import { getAllSets } from './../api';
import { CardSetData } from '../types/tcgTypes';
import SeriesList from './SeriesList';

interface SetsProps {}

const Sets: React.FC<SetsProps> = ({}) => {
  const [cardSets, setCardSets] = useState<CardSetData[] | null>(null);

  useEffect(() => {
    _getCardSets();
  }, []);

  const _getCardSets = async () => {
    const data: CardSetData[] = await getAllSets();
    setCardSets(data);
  };

  return (
    <SafeAreaView>
      <SectionList
        sections={cardSets!}
        keyExtractor={(item, index) => item[0].id + index}
        renderItem={({ item }) => <SeriesList seriesSets={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text>***{title}***</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default Sets;
