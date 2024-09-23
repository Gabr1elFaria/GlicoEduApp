import React from 'react';
import { Pressable, View, Text, StyleProp, ViewStyle } from 'react-native';
import { style } from './style';

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  propsStyle?: StyleProp<ViewStyle>;
}

export function ButtonCustom({ children, onPress, disabled, icon, propsStyle }: ButtonProps) {
  return (
    <Pressable disabled={disabled} onPress={onPress}>
      <View style={[style.container, propsStyle]}>
        <View>{icon}</View>
        <View>
          <Text style={style?.text}>{children}</Text>
        </View>
      </View>
    </Pressable>
  );
}
