import React from 'react';
import { Text, View } from 'react-native';
import Footer from '~/components/Footer';
import { Header } from '~/components/Header';
import { styles } from './style';

export function HeaderFeature({
  backgroundColor,
  text,
}: {
  text: string;
  backgroundColor: string;
}) {
  return (
    <>
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </>
  );
}
