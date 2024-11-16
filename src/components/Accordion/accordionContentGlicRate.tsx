import React, { useState, useContext } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { style } from './styleContent';
import CheckBox from '../CheckBox';

import IconSuperSmile from 'react-native-vector-icons/Fontisto';
import IconSmile from 'react-native-vector-icons/Fontisto';
import { useRecipeGlicFilter } from '~/providers/RecipeGlicFilterProvider';

export default function AccordionContentGlicRate() {
  const { lowGlic, setLowGlic, mediumGlic, setMediumGlic } = useRecipeGlicFilter();

  const toggleCheckboxLowGlic = () => {
    setLowGlic(!lowGlic);
  };

  const toggleCheckboxMediumGlic = () => {
    setMediumGlic(!mediumGlic);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={toggleCheckboxLowGlic}>
        <View>
          <View style={style.box}>
            <View style={style.icon}>
              <IconSmile name="slightly-smile" size={30} />
            </View>
            <View>
              <CheckBox isChecked={lowGlic} testID="low-glic-checkbox" />
            </View>
          </View>
          <View style={style.textBox}>
            <Text style={style.text}>Baixo Índice Glicêmico</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleCheckboxMediumGlic}>
        <View>
          <View style={style.box}>
            <View style={style.icon}>
              <IconSuperSmile name="smiley" size={30} />
            </View>
            <View>
              <CheckBox isChecked={mediumGlic} testID="medium-glic-checkbox" />
            </View>
          </View>
          <View style={style.textBox}>
            <Text style={style.text}>Médio Índice Glicêmico</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
