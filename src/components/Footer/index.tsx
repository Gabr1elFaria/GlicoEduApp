import React from 'react';
import { Text, Touchable, View } from 'react-native';
import { style, featureBox, featureIcon, featureText } from './style';
import { Header } from '~/components/Header';
import IconCutlery from 'react-native-vector-icons/FontAwesome';
import IconCalculator from 'react-native-vector-icons/FontAwesome5';
import IconQuiz from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '~/routes';

export default function Footer() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <>
      <View style={style.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Calculadora')}>
          <View style={featureBox.boxCalculator}>
            <Text style={featureText.textCalculator}>Calculadora de Insulina</Text>
            <IconCalculator style={featureIcon.Calc} name="calculator" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Receitas')}>
          <View style={featureBox.boxRecipe}>
            <Text style={featureText.text}>Receitas</Text>
            <IconCutlery name="cutlery" style={featureIcon.Receipes} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
          <View style={featureBox.boxQuiz}>
            <Text style={featureText.text}>Quiz</Text>
            <IconQuiz name="chat" style={featureIcon.Quiz} />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
