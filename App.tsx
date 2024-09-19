import 'react-native-gesture-handler';

import React from 'react';

import Routes from '~/routes';
import CombinedProvider from '~/providers/RecipeFilterProvider';

export default function App() {
  return (
    <CombinedProvider>
      <Routes />
    </CombinedProvider>
  );
}
