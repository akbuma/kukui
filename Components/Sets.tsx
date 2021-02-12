import React, { useState, useEffect } from 'react';
import { SectionList } from 'react-native';
import { getAllSets } from '../api';
import { CardSetData } from '../types/tcgTypes';
import { globalFont } from '../constants/globalStyles';
import SeriesList from './SeriesList';
import styled from 'styled-components/native';

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
          <StyledSectionHeader>{title.toUpperCase()}</StyledSectionHeader>
        )}
      />
    </SafeAreaView>
  );
};

const SafeAreaView = styled.SafeAreaView`
  align-items: center;
  background-color: papayawhip;
`;

const StyledSectionHeader = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: ${globalFont};
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: papayawhip;
`;

export default Sets;
