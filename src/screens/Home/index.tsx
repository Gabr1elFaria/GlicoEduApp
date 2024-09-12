import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { Feature } from '~/components/Feature';
import { Header } from '~/components/Header';

export function Home() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Feature />
        <Feature />
        <Feature />
      </View>
    </>
  );
}
