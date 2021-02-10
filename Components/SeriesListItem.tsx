import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CardSet } from '../types/tcgTypes';

interface SeriesListItemProps {
  set: CardSet;
}

const SeriesListItem: React.FC<SeriesListItemProps> = ({ set }) => {
  return set.empty ? (
    <View style={(styles.set, styles.invisible)} />
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
    width: 150,
    height: 150,
    borderWidth: 1,
  },
  setImage: {
    width: 40,
    height: 40,
  },
  invisible: {
    backgroundColor: 'blue',
  },
});

export default SeriesListItem;
