import React from 'react';
import { Text, View } from 'react-native';
import { style } from './style';
import { Header } from '~/components/Header';

export function InsulinCalc() {
  return (
    <>
      <Header />
      <View style={style.container}>
        <Text>tela insulina calculadora</Text>
      </View>
    </>
  );
}
