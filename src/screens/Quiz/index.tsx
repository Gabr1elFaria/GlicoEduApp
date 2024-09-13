import React from 'react';
import { Text } from 'react-native';
import Footer from '~/components/Footer';
import { Header } from '~/components/Header';
import { HeaderFeature } from '~/components/HeaderFeature';

export function Quiz() {
  return (
    <>
      <Header />
      <HeaderFeature backgroundColor="#39BAAF" text="QUIZ" />
      <Text>tela Quiz</Text>
      <Footer />
    </>
  );
}
