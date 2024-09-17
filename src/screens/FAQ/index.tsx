import React from 'react';
import { Text } from 'react-native';
import { Header } from '~/components/Header';
import { HeaderFeature } from '~/components/HeaderFeature';

export function FAQ() {
  return (
    <>
      <Header />
      <HeaderFeature backgroundColor="#1E1E1E" text="PERGUNTAS FREQUENTES" textColor="#FFFFFF" />
      <Text>tela FAQ</Text>
    </>
  );
}
