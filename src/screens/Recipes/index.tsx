import React from 'react';
import { Text } from 'react-native';
import Footer from '~/components/Footer';
import { Header } from '~/components/Header';
import { HeaderFeature } from '~/components/HeaderFeature';

export function Recipes() {
  return (
    <>
      <Header />
      <HeaderFeature backgroundColor="#42A6E2" text="RECEITAS" />
      <Text>tela de Recipes</Text>
      <Footer />
    </>
  );
}
