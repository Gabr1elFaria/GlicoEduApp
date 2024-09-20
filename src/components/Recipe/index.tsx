import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { style } from './style';

import IconMug from 'react-native-vector-icons/FontAwesome5';
import IconSun from 'react-native-vector-icons/Feather';
import IconMoon from 'react-native-vector-icons/Feather';
import IconApple from 'react-native-vector-icons/FontAwesome';
import IconSuperSmile from 'react-native-vector-icons/Fontisto';
import IconSmile from 'react-native-vector-icons/Fontisto';

import { useRecipeGlicFilter } from '~/providers/RecipeGlicFilterProvider';
import { useRecipeMealFilter } from '~/providers/RecipeMealFilterProvider';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '~/routes';

interface Recipe {
  id: number;
  title: string;
  image: string;
  ingredients: { [key: string]: string };
  portionsQuantity: number;
  cookingTimeInMin: number;
  instructions: { [key: string]: string };
  category: {
    meal: string;
    glicRate: string;
  };
}

export function Recipe() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const { lowGlic, mediumGlic } = useRecipeGlicFilter();
  const { breakfest, lunch, dinner, snack } = useRecipeMealFilter();

  useEffect(() => {
    const data = require('../../assets/recipes.json');
    setRecipes(data);
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    const glicRateMatch =
      (lowGlic && recipe.category.glicRate === 'baixo') ||
      (mediumGlic && recipe.category.glicRate === 'medio');

    const mealMatch =
      (breakfest && recipe.category.meal === 'cafe') ||
      (lunch && recipe.category.meal === 'almoco') ||
      (dinner && recipe.category.meal === 'jantar') ||
      (snack && recipe.category.meal === 'lanche');

    return (
      (glicRateMatch || (!lowGlic && !mediumGlic)) &&
      (mealMatch || (!breakfest && !lunch && !dinner && !snack))
    );
  });

  const handlePress = (recipe: Recipe) => {
    navigation.navigate('ReceitasItSelf', { recipeId: recipe.id });
  };

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <>
      {filteredRecipes.map((recipe) => (
        <Pressable onPress={() => handlePress(recipe)} key={recipe.id}>
          <View style={style.container}>
            <View style={style.containerText}>
              <Text style={style.text}>
                {recipe.title ? recipe.title : 'Título não encontrado'}
              </Text>
            </View>
            <View style={style.icon}>
              {recipe.category.meal === 'almoco' && <IconSun name="sun" size={30} />}
              {recipe.category.meal === 'jantar' && <IconMoon name="moon" size={30} />}
              {recipe.category.meal === 'lanche' && <IconApple name="apple" size={30} />}
              {recipe.category.meal === 'cafe' && <IconMug name="mug-hot" size={30} />}

              {recipe.category.glicRate === 'baixo' && (
                <IconSmile name="slightly-smile" size={30} />
              )}
              {recipe.category.glicRate === 'medio' && <IconSuperSmile name="smiley" size={30} />}
            </View>
          </View>
        </Pressable>
      ))}
    </>
  );
}
