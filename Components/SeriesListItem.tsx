import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CardSet } from '../types/tcgTypes';

interface SeriesListItemProps {
  set: CardSet;
}

const SeriesListItem: React.FC<SeriesListItemProps> = ({ set }) => {
  return (
    <View style={styles.set}>
      <Image
        style={styles.setImage}
        source={{ uri: set.images.logo }}
        resizeMode="contain"
      />
      <Text>{set.name}</Text>
      <Text>{set.releaseDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  set: {
    backgroundColor: 'red',
    borderWidth: 1,
  },
  setImage: {
    width: 100,
    height: 100,
  },
});

export default SeriesListItem;
