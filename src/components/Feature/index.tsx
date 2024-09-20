import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { styles } from './style';

export function Feature({
  backgroundColor,
  borderColor,
  text,
  icon,
}: {
  text: string;
  borderColor: string;
  backgroundColor: string;
  icon: React.ReactElement;
}) {
  return (
    <View style={[styles.container, { backgroundColor, borderColor }]}>
      <Text style={styles.text}>{text}</Text>
      <View>{icon}</View>
    </View>
  );
}
