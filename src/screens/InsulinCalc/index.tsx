import React, { useEffect, useRef, useState } from 'react';
import { Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from '@rneui/themed';
import { style } from './style';
import { Header } from '~/components/Header';
import Footer from '~/components/Footer';
import { HeaderFeature } from '~/components/HeaderFeature';

export function InsulinCalc() {
  const inputRef = useRef<TextInput | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [enable, setEnable] = useState(false);
  const [showInsulinResult, setShowInsulinResult] = useState(false);
  const [textPart1, setTextPart1] = useState('');
  const [textPart2, setTextPart2] = useState('');
  let insulin = 0;

  const handleTouchOutside = () => {
    Keyboard.dismiss();
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleButtonClick = () => {
    insulin = Number(inputValue) + 10;
    handleValueInsulin(insulin);
    setShowInsulinResult(true);
    setEnable(false);
    handleTouchOutside();
  };

  const handleValueInsulin = (insulin: any) => {
    if (insulin <= 12) {
      setTextPart1('Uma ( 1 )');
      setTextPart2(' Unidade');
    } else if (insulin > 12 && insulin < 17) {
      setTextPart1('Duas ( 2 )');
      setTextPart2(' Unidades');
    } else {
      setTextPart1('Três ( 3 )');
      setTextPart2(' Unidades');
    }
  };

  const handleInputChange = (text: React.SetStateAction<string>) => {
    setInputValue(text);
    setEnable(text !== '');
  };

  useEffect(() => {
    if (inputValue === '') {
      setShowInsulinResult(false);
    }
  }, [inputValue]);

  return (
    <TouchableWithoutFeedback onPress={handleTouchOutside}>
      <View style={{ flex: 1 }}>
        <Header />
        <HeaderFeature backgroundColor="#E069E0" text="CALCULADORA DE INSULINA" />
        <View style={style.mainContainer}>
          <View style={style.container}>
            <Text style={style.text}>Insira a quantidade de carboidrato em gramas:</Text>
            <TextInput
              ref={inputRef}
              style={style.textInput}
              placeholder="Ex: 30"
              placeholderTextColor="#888"
              maxLength={4}
              selectionColor="#000"
              keyboardType="numeric"
              autoFocus
              onChangeText={handleInputChange}
            />
            <Button
              buttonStyle={enable ? style.button : style.buttonDisable}
              titleStyle={style.buttonText}
              title="CALCULAR"
              onPress={handleButtonClick}
              disabled={!enable}
            />
          </View>
          {showInsulinResult && (
            <View style={style.container}>
              <Text style={[style.text, style.textInsulin]}>
                A dose necessária de insulina para {inputValue} gramas de carboidrato é:
              </Text>
              <Text style={style.textResult}>
                {textPart1}
                {textPart2}
              </Text>
            </View>
          )}
        </View>
        <Footer />
      </View>
    </TouchableWithoutFeedback>
  );
}
