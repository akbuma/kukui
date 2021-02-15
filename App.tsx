import React from 'react';
import SeriesCardsList from './components/Sets/SeriesCardsList';
import SetsNavigator from './components/Sets/SetsNavigator';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={'Sets'}>
        <Tab.Screen name="Sets" component={SetsNavigator} />
        <Tab.Screen name="Collection" component={SeriesCardsList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
