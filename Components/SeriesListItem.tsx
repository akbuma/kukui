import React from 'react';
import { View } from 'react-native';
import { CardSet } from '../types/tcgTypes';
import { globalFont } from '../constants/globalStyles';
import styled from 'styled-components/native';

interface SeriesListItemProps {
  set: CardSet;
}

const SeriesListItem: React.FC<SeriesListItemProps> = ({ set }) => {
  return set.empty ? (
    <View />
  ) : (
    <PressableSet onPress={() => console.log('pressed')}>
      <SetImage source={{ uri: set.images.logo }} resizeMode="contain" />
      <SetTitleText>{set.name}</SetTitleText>
      <SetReleaseText>{set.releaseDate}</SetReleaseText>
    </PressableSet>
  );
};

const PressableSet = styled.Pressable`
  width: 175px;
  height: 175px;
  border-width: 1px;
  margin: 5px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const SetImage = styled.Image`
  width: 85px;
  height: 85px;
`;

const SetTitleText = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  align-items: center;
  text-align: center;
  font-family: ${globalFont};
  line-height: 20px;
  font-size: 20px;
`;

const SetReleaseText = styled.Text`
  margin-top: 5px;
  align-items: center;
  text-align: center;
  font-family: ${globalFont};
  font-size: 10px;
`;

export default SeriesListItem;
