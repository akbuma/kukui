import React from 'react';
import { Text, View } from 'react-native';
import { CardSet } from '../types/tcgTypes';

interface SetItemProps {
  Set: CardSet;
}

export const SetItem: React.FC<SetItemProps> = ({ Set }) => {
  return (
    <View>
      <Text>Text</Text>
    </View>
  );
};
