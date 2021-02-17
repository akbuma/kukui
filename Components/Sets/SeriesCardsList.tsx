import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { getAllCards } from '../../api';
import { Card } from '../../types/tcgTypes';
import { SetStackNavProps } from './setsParamList';
import styled from 'styled-components/native';

interface CardItemProps {
  item: Card;
}

const CardItem: React.FC<CardItemProps> = ({ item }) => {
  return <CardImage source={{ uri: item.images.small }} resizeMode="contain" />;
};

export const SeriesCardsList = ({
  navigation,
  route,
}: SetStackNavProps<'CardsList'>) => {
  const { setID, name } = route.params;
  const [cardsData, setCardsData] = useState<Card[] | null>(null);
  const [isLoaded, setLoadingState] = useState(true);

  useEffect(() => {
    const _getCards = async () => {
      const data = await getAllCards(setID);
      setCardsData(data);
      setLoadingState(false);
    };
    _getCards();
    navigation.setOptions({ title: name });
  }, [setID, name, navigation]);

  return isLoaded ? (
    <StyledSafeAreaView>
      <StyledActivityIncidator size="large" color="black" />
    </StyledSafeAreaView>
  ) : (
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
  margin: 5px 3px;
`;

const StyledSafeAreaView = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledActivityIncidator = styled.ActivityIndicator`
  align-items: center;
  justify-content: center;
`;

export default SeriesCardsList;
