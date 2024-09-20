import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { RootStackParamList } from '~/routes';

import { Button } from '~/components/Button';
import Footer from '~/components/Footer';
import { Header } from '~/components/Header';
import { HeaderFeature } from '~/components/HeaderFeature';
import { style } from './style';

import ArrowLeftIcon from 'react-native-vector-icons/Entypo';

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
    const data = require('../../assets/recipes.json');
    setRecipes(data);
  }, []);

  const recipe = recipes.find((r) => r.id === recipeId);

  const handleButtonClick = () => {
    console.log('Botão pressionado!');
  };

  const NumberedItem = ({ item, index }: { item: string; index: any }) => {
    return (
      <View style={style.listItem}>
        <Text style={style.listItemNumber}>{index + 1}.</Text>
        <Text style={style.item}>{item}</Text>
      </View>
    );
  };

  return (
    <>
      <Header />
      <HeaderFeature backgroundColor="#42A6E2" text="RECEITAS" />
      <View>
        <Button
          onPress={handleButtonClick}
          disabled={false}
          icon={<ArrowLeftIcon name="arrow-with-circle-left" size={30} />}>
          Voltar
        </Button>
        <View style={style.container}>
          <View>
            <Text style={style.mainTitle}>{recipe?.title}</Text>
            <Text style={style.otherTitle}>Ingredientes ({recipe?.portionsQuantity} porções)</Text>
          </View>

          <View>
            <FlatList
              data={Object.entries(recipe?.ingredients || {})}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item, index }) => <NumberedItem item={item[1]} index={index} />}
            />
          </View>

          <View>
            <Text style={style.otherTitle}>Modo de Preparo</Text>
            <Text style={[style.otherTitle, { fontWeight: 400, fontSize: 24 }]}>
              Tempo de preparo: {recipe?.cookingTimeInMin} minutos
            </Text>
          </View>

          <View>
            <FlatList
              data={recipe?.instructions ? Object.values(recipe?.instructions) : []}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item, index }) => <NumberedItem item={item} index={index} />}
            />
          </View>
        </View>
      </View>
      <Footer />
    </>
  );
}
