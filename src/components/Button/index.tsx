import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { style } from './style';

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
  icon: React.ReactNode;
}

export function Button({ children, onPress, disabled, icon }: ButtonProps) {
  return (
    <Pressable disabled={disabled} onPress={onPress}>
      <View style={style.container}>
        <View>{icon}</View>
        <View>
          <Text style={style.text}>{children}</Text>
        </View>
      </View>
    </Pressable>
  );
}
