import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import IconCalculator from 'react-native-vector-icons/FontAwesome5';

export function Feature() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculadora de Insulina</Text>
      <View>
        <IconCalculator name="calculator" style={styles.icon} />
      </View>
    </View>
  );
}
