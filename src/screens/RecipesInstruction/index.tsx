import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { RootStackParamList } from '~/routes';

import { ButtonCustom } from '~/components/Button';
import Footer from '~/components/Footer';
import { Header } from '~/components/Header';
import { HeaderFeature } from '~/components/HeaderFeature';
import { style } from './style';

import ArrowLeftIcon from 'react-native-vector-icons/Entypo';
import CircleIcon from 'react-native-vector-icons/FontAwesome';

interface Recipe {
  id: number;
  title: string;
  image?: string;
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

  const imageMap: { [key: string]: any } = {
    bolo_banana: require('../../images/bolo_banana.jpg'),
    macarrao_brocolis_frango: require('../../images/macarrao_brocolis_frango.jpg'),
    macarrao_molho_branco: require('../../images/macarrao_molho_branco.jpg'),
    omelete_espinafre: require('../../images/omelete_espinafre.jpg'),
    omelete_legumes: require('../../images/omelete_legumes.jpg'),
    panquecas_banana: require('../../images/panquecas_banana.jpg'),
    salada_caprese: require('../../images/salada_caprese.jpg'),
    salmao_legumes: require('../../images/salmao_legumes.jpg'),
    sanduiche_frango: require('../../images/sanduiche_frango.jpg'),
  };

  const imageSource =
    recipe?.image && imageMap[recipe?.image]
      ? imageMap[recipe.image]
      : require('../../images/default.jpg');

  return (
    <>
      <Header />
      <HeaderFeature backgroundColor="#42A6E2" text="RECEITAS" />
      <ScrollView style={style.scrollView}>
        <View style={{ marginLeft: 20 }}>
          <ButtonCustom
            onPress={() => navigation.navigate('Receitas')}
            disabled={false}
            propsStyle={{ flexDirection: 'row' }}
            icon={<ArrowLeftIcon name="arrow-with-circle-left" size={30} />}>
            Voltar
          </ButtonCustom>
        </View>
        <View style={style.container}>
          <View style={style.recipeImageBox}>
            <Image source={imageSource} style={style.recipeImage} />
          </View>
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
