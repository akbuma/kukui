import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Sets from './Components/Sets';
import SeriesList from './Components/SeriesList';

export default function App() {
  return (
    <View style={styles.container}>
      <SeriesList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
