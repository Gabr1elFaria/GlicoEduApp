import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { styles } from './style';
import IconCalculator from 'react-native-vector-icons/FontAwesome5';

export function Feature({
  backgroundColor,
  borderColor,
  text,
}: {
  text: string;
  borderColor: string;
  backgroundColor: string;
}) {
  return (
    <View style={[styles.container, { backgroundColor, borderColor }]}>
      <Text style={styles.text}>{text}</Text>
      <View>
        <IconCalculator name="calculator" style={styles.icon} />
      </View>
    </View>
  );
}
