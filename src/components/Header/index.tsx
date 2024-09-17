import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import IconHome from 'react-native-vector-icons/FontAwesome';
import IconQuestion from 'react-native-vector-icons/AntDesign';

import { style } from './style';
import { NavigationProp, useNavigation, useNavigationState } from '@react-navigation/native';
import { Home } from '~/screens/Home';
import { RootStackParamList } from '~/routes';

export function Header() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView>
      <View style={style.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <IconHome name="home" size={30} />
        </TouchableOpacity>
        <Text style={{ fontSize: 26 }}>GlicoEdu</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('FAQ');
          }}>
          <IconQuestion name="questioncircleo" size={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
