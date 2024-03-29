import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type SetStackParamList = {
  Sets: undefined;
  CardsList: {
    setID: string;
    name: string;
  };
  Card: undefined;
};

export type SetStackNavProps<T extends keyof SetStackParamList> = {
  navigation: StackNavigationProp<SetStackParamList, T>;
  route: RouteProp<SetStackParamList, T>;
};
