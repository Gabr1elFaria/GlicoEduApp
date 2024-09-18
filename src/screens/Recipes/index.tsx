import React, { useEffect, useRef, useState } from 'react';
import { Keyboard, TextInput, TouchableWithoutFeedback, Text, View } from 'react-native';
import { Button } from '@rneui/themed';

import Footer from '~/components/Footer';
import { Header } from '~/components/Header';
import { HeaderFeature } from '~/components/HeaderFeature';
import { style, accordion } from './style';
import Accordion from '~/components/Accordion/accordion';
import AccordionContent from '~/components/Accordion/accordionContent';

import IconMug from 'react-native-vector-icons/FontAwesome5';
import IconSun from 'react-native-vector-icons/Feather';
import IconMoon from 'react-native-vector-icons/Feather';
import IconApple from 'react-native-vector-icons/FontAwesome';
import IconSuperSmile from 'react-native-vector-icons/Fontisto';
import IconSmile from 'react-native-vector-icons/Fontisto';

export function Recipes() {
  const inputRef = useRef<TextInput | null>(null);
  const [enable, setEnable] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleTouchOutside = () => {
    Keyboard.dismiss();
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleInputChange = (text: React.SetStateAction<string>) => {
    setInputValue(text);
    setEnable(text !== '');
  };

  useEffect(() => {
    if (inputValue !== '') {
      console.log(inputValue);
    }
  }, [inputValue]);

  return (
    <TouchableWithoutFeedback onPress={handleTouchOutside}>
      <View style={style.mainContainer}>
        <Header />
        <HeaderFeature backgroundColor="#42A6E2" text="RECEITAS" />
        <View style={style.containerOne}>
          <TextInput
            style={style.textInput}
            placeholder="Digite o que deseja pesquisar"
            placeholderTextColor="#888"
            selectionColor="#000"
            onChangeText={handleInputChange}
          />
          <Button
            icon={{
              name: 'search',
              type: 'font-awesome',
            }}
            iconContainerStyle={style.iconStyle}
            iconRight
            buttonStyle={enable ? style.button : style.buttonDisable}
            titleStyle={style.buttonText}
            title="PESQUISAR"
            disabled={!enable}
          />
        </View>
        <View style={accordion.container}>
          <Text style={accordion.text}>Filtrar por:</Text>
          <View style={accordion.accordion}>
            <Accordion title="Refeição">
              <AccordionContent
                icon={
                  <View style={{ marginLeft: 4 }}>
                    <IconMug name="mug-hot" size={30} />
                  </View>
                }
                text="Café da Manhã"
              />
              <AccordionContent
                icon={
                  <View style={{ marginTop: 3 }}>
                    <IconSun name="sun" size={30} />
                  </View>
                }
                text="Almoço"
              />
              <AccordionContent
                icon={
                  <View style={{ marginTop: 3, marginLeft: 4 }}>
                    <IconMoon name="moon" size={30} />
                  </View>
                }
                text="Janta"
              />
              <AccordionContent
                icon={
                  <View style={{ marginTop: 3, marginLeft: 8 }}>
                    <IconApple name="apple" size={30} />
                  </View>
                }
                text="Lanche"
              />
            </Accordion>
          </View>
          <View style={accordion.accordion}>
            <Accordion title="Refeição">
              <AccordionContent
                icon={
                  <View style={{ marginLeft: 4, marginTop: 3 }}>
                    <IconSuperSmile name="smiley" size={30} />
                  </View>
                }
                text={
                  <View>
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: '500',
                        textAlign: 'center',
                        width: 100,
                        marginTop: 5,
                        marginBottom: 0,
                      }}>
                      Baixo Índice Glicêmico
                    </Text>
                  </View>
                }
              />
              <AccordionContent
                icon={
                  <View style={{ marginLeft: 4, marginTop: 3 }}>
                    <IconSmile name="slightly-smile" size={30} />
                  </View>
                }
                text={
                  <View>
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: '500',
                        textAlign: 'center',
                        width: 105,
                        marginTop: 3,
                      }}>
                      Médio Índice Glicêmico
                    </Text>
                  </View>
                }
              />
            </Accordion>
          </View>
        </View>
        <Footer />
      </View>
    </TouchableWithoutFeedback>
  );
}
