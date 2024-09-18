import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { style } from './style';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const height = useRef(new Animated.Value(0)).current;

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    Animated.timing(height, {
      toValue: isOpen ? 0 : 250,
      duration: 50,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View>
      <TouchableOpacity style={style.container} onPress={toggleAccordion}>
        <View style={style.accordion}>
          <Text style={style.textTitle}>{title}</Text>
          <View>
            <FontAwesome5
              style={style.mainIcon}
              name={isOpen ? 'chevron-up' : 'chevron-down'}
              size={24}
              color="black"
            />
          </View>
        </View>
      </TouchableOpacity>
      <Animated.View style={[style.animatedView, { overflow: 'hidden', height }]}>
        {children}
      </Animated.View>
    </View>
  );
}
