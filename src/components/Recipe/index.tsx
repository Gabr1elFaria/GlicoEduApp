import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { style } from './style';

import IconMug from 'react-native-vector-icons/FontAwesome5';
import IconSun from 'react-native-vector-icons/Feather';
import IconMoon from 'react-native-vector-icons/Feather';
import IconApple from 'react-native-vector-icons/FontAwesome';
import IconSuperSmile from 'react-native-vector-icons/Fontisto';
import IconSmile from 'react-native-vector-icons/Fontisto';

import { useRecipeGlicFilter } from '~/providers/RecipeGlicFilterProvider';
import { useRecipeMealFilter } from '~/providers/RecipeMealFilterProvider';

interface Receita {
  key: number;
  title: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  category: {
    meal: string;
    glicRate: string;
  };
}

export function Recipe() {
  const [receitas, setReceitas] = useState<Receita[]>([]);
  const { lowGlic, mediumGlic } = useRecipeGlicFilter();
  const { breakfest, lunch, dinner, snack } = useRecipeMealFilter();

  useEffect(() => {
    const data = require('../../assets/recipes.json');
    setReceitas(data);
  }, []);

  const filteredReceitas = receitas.filter((receita) => {
    const glicRateMatch =
      (lowGlic && receita.category.glicRate === 'baixo') ||
      (mediumGlic && receita.category.glicRate === 'medio');

    const mealMatch =
      (breakfest && receita.category.meal === 'cafe') ||
      (lunch && receita.category.meal === 'almoco') ||
      (dinner && receita.category.meal === 'janta') ||
      (snack && receita.category.meal === 'lanche');

    return (
      (glicRateMatch || (!lowGlic && !mediumGlic)) &&
      (mealMatch || (!breakfest && !lunch && !dinner && !snack))
    );
  });
  return (
    <>
      {filteredReceitas.map((receita) => (
        <View key={receita.title} style={style.container}>
          <View style={style.containerText}>
            <Text style={style.text}>
              {receita.title ? receita.title : 'Título não encontrado'}
            </Text>
          </View>
          <View style={style.icon}>
            {receita.category.meal === 'almoco' && <IconSun name="sun" size={30} />}
            {receita.category.meal === 'janta' && <IconMoon name="moon" size={30} />}
            {receita.category.meal === 'lanche' && <IconApple name="apple" size={30} />}
            {receita.category.meal === 'cafe' && <IconMug name="mug-hot" size={30} />}

            {receita.category.glicRate === 'baixo' && <IconSmile name="slightly-smile" size={30} />}
            {receita.category.glicRate === 'medio' && <IconSuperSmile name="smiley" size={30} />}
          </View>
        </View>
      ))}
    </>
  );
}
