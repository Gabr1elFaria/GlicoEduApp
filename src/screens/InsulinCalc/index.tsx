import React from 'react';
import { Text, View } from 'react-native';
import { style } from './style';
import { Header } from '~/components/Header';
import Footer from '~/components/Footer';
import { HeaderFeature } from '~/components/HeaderFeature';

export function InsulinCalc() {
  return (
    <>
      <Header />
      <HeaderFeature backgroundColor="#E069E0" text="CALCULADORA DE INSULINA" />
      <View style={style.container}>
        <Text>tela insulina calculadora</Text>
      </View>
      <Footer />
    </>
  );
}
