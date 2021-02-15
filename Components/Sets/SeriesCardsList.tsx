import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { getAllCards } from '../../api';
import { Card } from '../../types/tcgTypes';
import styled from 'styled-components/native';

interface SeriesCardsListProps {}

interface CardItemProps {
  item: Card;
}

const CardItem: React.FC<CardItemProps> = ({ item }) => {
  return <CardImage source={{ uri: item.images.small }} resizeMode="contain" />;
};

export const SeriesCardsList: React.FC<SeriesCardsListProps> = ({}) => {
  const [cardsData, setCardsData] = useState<Card[] | null>(null);

  useEffect(() => {
    _getCards();
  }, []);

  const _getCards = async () => {
    const data = await getAllCards('sm1');
    setCardsData(data);
  };

  return (
    <StyledSafeAreaView>
      <FlatList
        data={cardsData}
        renderItem={CardItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </StyledSafeAreaView>
  );
};

const CardImage = styled.Image`
  height: 160px;
  width: 120px;
  margin: 5px;
`;

const StyledSafeAreaView = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
`;

export default SeriesCardsList;
