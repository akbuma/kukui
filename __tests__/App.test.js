import 'react-native';
import React from 'react';
import App from '../App.tsx';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock(
  'react-native-vector-icons/MaterialCommunityIcons',
  () => 'MaterialCommunityIcons',
);
jest.useFakeTimers();

it('renders correctly', async () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
