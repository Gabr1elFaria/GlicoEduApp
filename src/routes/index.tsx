import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '~/screens/Home';
import { Header } from '~/components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { InsulinCalc } from '~/screens/InsulinCalc';
import { Quiz } from '~/screens/Quiz';
import { Recipes } from '~/screens/Recipes';
import Footer from '~/components/Footer';
import { SafeAreaView, View } from 'react-native';
import { styles } from '~/screens/Home/style';
import { FAQ } from '~/screens/FAQ';

export type RootStackParamList = {
  Home: undefined;
  Calculadora: undefined;
  Quiz: undefined;
  Receitas: undefined;
  Footer: undefined;
  FAQ: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Calculadora" component={InsulinCalc} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Receitas" component={Recipes} />
        <Stack.Screen name="Footer" component={Footer} />
        <Stack.Screen name="FAQ" component={FAQ} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
