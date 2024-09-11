import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from 'screens/Home';
import { InsulinCalc } from 'screens/InsulinCalc';
import { Quiz } from 'screens/Quiz';
import { Recipes } from 'screens/Recipes';
import { Header } from 'components/Header';

const Tab = createBottomTabNavigator();

export default function Navitagor() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ header: () => <Header /> }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Calculadora de Insulina" component={InsulinCalc} />
        <Tab.Screen name="Quiz" component={Quiz} />
        <Tab.Screen name="Receitas" component={Recipes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
