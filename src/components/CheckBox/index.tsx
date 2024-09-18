import React from 'react';
import { View } from 'react-native';
import { style } from './style';

export default function CheckBox({ isChecked }: { isChecked: boolean }) {
  return (
    <View style={[style.container, { backgroundColor: isChecked ? 'black' : 'white' }]}></View>
  );
}
