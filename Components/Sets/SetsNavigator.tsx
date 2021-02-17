import React from 'react';
import SetsMain from './SetsMain';
import SeriesCardsList from './SeriesCardsList';
import { SetStackParamList } from './setsParamList';
import { createStackNavigator } from '@react-navigation/stack';

interface SetsNavigatorProps {}

const Stack = createStackNavigator<SetStackParamList>();

export const SetsNavigator: React.FC<SetsNavigatorProps> = ({}) => {
  return (
    <Stack.Navigator initialRouteName={'Sets'}>
      <Stack.Screen name="Sets" component={SetsMain} options={{ title: '' }} />
      <Stack.Screen name="CardsList" component={SeriesCardsList} />
    </Stack.Navigator>
  );
};

export default SetsNavigator;
