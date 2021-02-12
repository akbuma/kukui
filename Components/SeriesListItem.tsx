import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CardSet } from '../types/tcgTypes';

interface SeriesListItemProps {
  set: CardSet;
}

const SeriesListItem: React.FC<SeriesListItemProps> = ({ set }) => {
  return set.empty ? (
    <View />
  ) : (
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
    width: 200,
    height: 200,
    borderWidth: 1,
  },
  setImage: {
    width: 40,
    height: 40,
  },
  invisible: {
    backgroundColor: 'transparent',
  },
});

export default SeriesListItem;
