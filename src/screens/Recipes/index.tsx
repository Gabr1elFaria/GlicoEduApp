import React, { useEffect, useRef, useState } from 'react';
import { Keyboard, TextInput, TouchableWithoutFeedback, Text, View } from 'react-native';
import { Button } from '@rneui/themed';

import Footer from '~/components/Footer';
import { Header } from '~/components/Header';
import { HeaderFeature } from '~/components/HeaderFeature';
import { style, accordion } from './style';
import Accordion from '~/components/Accordion/accordion';
import AccordionContentGlicRate from '~/components/Accordion/accordionContentGlicRate';
import AccordionContentMeal from '~/components/Accordion/accordionContentMeal';
import { Recipe } from '~/components/Recipe';
import { useGlicRateHeight } from '~/providers/GlicRateHeightProvider';
import { useMealHeight } from '~/providers/MealHeightProvider';

export function Recipes() {
  const inputRef = useRef<TextInput | null>(null);
  const [enable, setEnable] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { setHeightGlicRate } = useGlicRateHeight();
  const { setHeightMeal } = useMealHeight();

  const handleTouchOutside = () => {
    Keyboard.dismiss();
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleInputChange = (text: React.SetStateAction<string>) => {
    setInputValue(text);
    setEnable(text !== '');
  };

  const handlePressAccordionGlicRate = (isOpen: boolean) => {
    if (setHeightGlicRate) {
      setHeightGlicRate(isOpen);
    } else {
      console.error('GlicRateHeightContext is not available.');
    }
  };

  const handlePressAccordionMeal = (isOpen: boolean) => {
    if (setHeightMeal) {
      setHeightMeal(isOpen);
    } else {
      console.error('MealHeightContext is not available.');
    }
  };

  const handlePressSearchButton = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleTouchOutside}>
      <View style={style.mainContainer}>
        <Header />
        <HeaderFeature backgroundColor="#42A6E2" text="RECEITAS" />
        <View style={style.containerOne}>
          <TextInput
            style={style.textInput}
            placeholder="Digite o que deseja pesquisar"
            placeholderTextColor="#888"
            selectionColor="#000"
            onChangeText={handleInputChange}
          />
          <Button
            icon={{
              name: 'search',
              type: 'font-awesome',
            }}
            iconContainerStyle={style.iconStyle}
            iconRight
            buttonStyle={enable ? style.button : style.buttonDisable}
            titleStyle={style.buttonText}
            title="PESQUISAR"
            disabled={!enable}
            onPress={handlePressSearchButton}
          />
        </View>
        <View style={accordion.container}>
          <Text style={accordion.text}>Filtrar por:</Text>
          <View style={accordion.accordion}>
            <Accordion title="Refeição" onToggle={handlePressAccordionMeal}>
              <AccordionContentMeal />
            </Accordion>
          </View>
          <View style={accordion.accordion}>
            <Accordion title="Índice Glicêmico" onToggle={handlePressAccordionGlicRate}>
              <AccordionContentGlicRate />
            </Accordion>
          </View>
        </View>
        <Recipe searchQuery={inputValue} />
        <Footer />
      </View>
    </TouchableWithoutFeedback>
  );
}
