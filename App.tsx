import React from 'react';
import CollectionNavigator from './components/Collection/CollectionNavigator';
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
        <Tab.Screen name="Collection" component={CollectionNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
