import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { Feature } from '~/components/Feature';
import { Header } from '~/components/Header';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '~/routes';
import { TouchableOpacity } from 'react-native';

export function Home() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <>
      <Header />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Calculadora')}>
          <Feature
            backgroundColor="rgba(195, 0, 195, 0.15)"
            borderColor="#C300C3"
            text="Calculadora de Insulina"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Receitas')}>
          <Feature
            backgroundColor="rgba(0, 121, 193, 0.15)"
            borderColor="#0079C1"
            text="Receitas"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
          <Feature backgroundColor="rgba(0, 190, 173, 0.15)" borderColor="#00BEAD" text="Quiz" />
        </TouchableOpacity>
      </View>
    </>
  );
}
