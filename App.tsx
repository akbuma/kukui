import React from 'react';
import SetsMain from './components/Sets/SetsMain';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={'Sets'}>
        <Tab.Screen name="Sets" component={SetsMain} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
