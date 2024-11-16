import React from 'react';
import { View } from 'react-native';
import { style } from './style';

interface CheckBoxProps {
  isChecked: boolean;
  testID?: string;
}

export default function CheckBox({ isChecked, testID }: CheckBoxProps) {
  return (
    <View
      testID={testID}
      style={[style.container, { backgroundColor: isChecked ? 'black' : 'white' }]}></View>
  );
}
