import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import Footer from '~/components/Footer';
import { Header } from '~/components/Header';
import { HeaderFeature } from '~/components/HeaderFeature';
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

type RecipesInstructionRouteProp = RouteProp<RootStackParamList, 'ReceitasItSelf'>;

export function RecipesInstruction() {
  const route = useRoute<RecipesInstructionRouteProp>();
  const { recipeId } = route.params;
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const data = require('../../../assets/recipes.json');
    setRecipes(data);
  }, []);

  const recipe = recipes.find((r) => r.id === recipeId);

  return (
    <>
      <Header />
      <HeaderFeature backgroundColor="#42A6E2" text="RECEITAS" />
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{recipe?.title}</Text>

        <Text>Porções: {recipe?.portionsQuantity}</Text>
        <Text>Tempo de preparo: {recipe?.cookingTimeInMin} minutos</Text>

        <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Ingredientes:</Text>
        <FlatList
          data={Object.entries(recipe?.ingredients || {})}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <Text>{item[1]}</Text>}
        />

        <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Instruções:</Text>
        <FlatList
          data={recipe?.instructions ? Object.values(recipe?.instructions) : []}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
      <Footer />
    </>
  );
}
