import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { style } from './styleContent';
import CheckBox from '../CheckBox';

export default function AccordionContent({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View>
        <View style={style.box}>
          <View style={style.icon}>{icon}</View>
          <View>
            <CheckBox isChecked={isChecked} />
          </View>
        </View>
        <View style={style.textBox}>
          <Text style={style.text}>{text}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
