import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { style } from './style';
import { useGlicRateHeight } from '~/providers/GlicRateHeightProvider';
import { useMealHeight } from '~/providers/MealHeightProvider';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  onToggle: (isOpen: boolean) => void;
}

export default function Accordion({ title, children, onToggle }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const height = useRef(new Animated.Value(0)).current;
  const { heightGlicRate, setHeightGlicRate } = useGlicRateHeight();
  const { heightMeal, setHeightMeal } = useMealHeight();

  const toggleAccordion = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    let targetHeight = 0;

    if (isOpen) {
      if (heightGlicRate && !heightMeal) {
        targetHeight = 180;
      } else if (!heightGlicRate && heightMeal) {
        targetHeight = 260;
      } else if (heightGlicRate && heightMeal) {
        targetHeight = 260;
      } else {
        targetHeight = 0;
      }
    } else {
      targetHeight = 0;
    }

    Animated.timing(height, {
      toValue: targetHeight,
      duration: 50,
      useNativeDriver: false,
    }).start();

    onToggle(newState);
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
