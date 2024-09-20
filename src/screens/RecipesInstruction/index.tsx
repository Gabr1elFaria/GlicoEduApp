import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { RootStackParamList } from '~/routes';

import { Button } from '~/components/Button';
import Footer from '~/components/Footer';
import { Header } from '~/components/Header';
import { HeaderFeature } from '~/components/HeaderFeature';
import { style } from './style';

import ArrowLeftIcon from 'react-native-vector-icons/Entypo';
import CircleIcon from 'react-native-vector-icons/FontAwesome';

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
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const data = require('../../data/recipes.json');
    setRecipes(data);
  }, []);

  const recipe = recipes.find((r) => r.id === recipeId);

  const NumberedItem = ({ item, index }: { item: string; index: any }) => {
    return (
      <View style={style.listItem}>
        <Text style={style.listItemNumber}>{index + 1}. </Text>
        <Text style={style.item}>{item}</Text>
      </View>
    );
  };

  return (
    <>
      <Header />
      <HeaderFeature backgroundColor="#42A6E2" text="RECEITAS" />
      <ScrollView style={style.scrollView}>
        <View style={{ marginLeft: 20 }}>
          <Button
            onPress={() => navigation.navigate('Receitas')}
            disabled={false}
            icon={<ArrowLeftIcon name="arrow-with-circle-left" size={30} />}>
            Voltar
          </Button>
        </View>
        <View style={style.container}>
          <View style={{ marginRight: -10 }}>
            <Text style={style.mainTitle}>{recipe?.title}</Text>
            <Text style={style.otherTitle}>Ingredientes ({recipe?.portionsQuantity} porções)</Text>
          </View>
          <View style={{ gap: 10 }}>
            {Object.entries(recipe?.ingredients || {}).map(([, value], index) => (
              <View style={style.ingredientsBox} key={index.toString()}>
                <CircleIcon name="circle" size={8} style={{ marginTop: 5 }} />
                <Text style={[style.item, { marginLeft: 8 }]}>{value}</Text>
              </View>
            ))}
          </View>
          <View style={{ marginRight: -10 }}>
            <Text style={style.otherTitle}>Modo de Preparo</Text>
            <Text style={[style.otherTitle, { fontWeight: 400, fontSize: 24 }]}>
              Tempo de preparo: {recipe?.cookingTimeInMin} minutos
            </Text>
          </View>
          <View>
            {recipe?.instructions &&
              Object.values(recipe?.instructions).map((instruction, index) => (
                <NumberedItem key={index.toString()} item={instruction} index={index} />
              ))}
          </View>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
