import React, { useState, useContext } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { style } from './styleContent';
import CheckBox from '../CheckBox';

import IconMug from 'react-native-vector-icons/FontAwesome5';
import IconSun from 'react-native-vector-icons/Feather';
import IconMoon from 'react-native-vector-icons/Feather';
import IconApple from 'react-native-vector-icons/FontAwesome';
import { useRecipeMealFilter } from '~/providers/RecipeMealFilterProvider';

export default function AccordionContentMeal() {
  const { breakfest, setBreakfest, lunch, setLunch, dinner, setDinner, snack, setSnack } =
    useRecipeMealFilter();

  const toggleCheckboxBreakfest = () => {
    setBreakfest(!breakfest);
  };

  const toggleCheckboxLunch = () => {
    setLunch(!lunch);
  };

  const toggleCheckboxDinner = () => {
    setDinner(!dinner);
  };

  const toggleCheckboxSnack = () => {
    setSnack(!snack);
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={toggleCheckboxBreakfest}>
        <View>
          <View style={style.box}>
            <View style={[style.icon, { marginLeft: 10 }]}>
              <IconMug name="mug-hot" size={30} />
            </View>
            <View>
              <CheckBox isChecked={breakfest} />
            </View>
          </View>
          <View style={style.textBox}>
            <Text style={style.text}>Café da Manhã</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleCheckboxLunch}>
        <View>
          <View style={style.box}>
            <View style={style.icon}>
              <IconSun name="sun" size={30} />
            </View>
            <View>
              <CheckBox isChecked={lunch} />
            </View>
          </View>
          <View style={style.textBox}>
            <Text style={style.text}>Almoço</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleCheckboxDinner}>
        <View>
          <View style={style.box}>
            <View style={style.icon}>
              <IconMoon name="moon" size={30} />
            </View>
            <View>
              <CheckBox isChecked={dinner} />
            </View>
          </View>
          <View style={style.textBox}>
            <Text style={style.text}>Janta</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleCheckboxSnack}>
        <View>
          <View style={style.box}>
            <View style={[style.icon, { marginRight: -10, marginTop: 6 }]}>
              <IconApple name="apple" size={30} />
            </View>
            <View>
              <CheckBox isChecked={snack} />
            </View>
          </View>
          <View style={style.textBox}>
            <Text style={style.text}>Lanche</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
