import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Footer from '~/components/Footer';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(() => ({
      navigate: jest.fn(),
    })),
  };
});

describe('Footer Component', () => {
  test('deve renderizar corretamente o componente Footer', () => {
    const { getByText } = render(
      <NavigationContainer>
        <Footer />
      </NavigationContainer>
    );

    expect(getByText('Calculadora de Insulina')).toBeTruthy();
    expect(getByText('Receitas')).toBeTruthy();
    expect(getByText('Quiz')).toBeTruthy();
  });

  test('deve navegar para a tela Calculadora ao clicar no botão correspondente', () => {
    const navigateMock = jest.fn();
    jest
      .spyOn(require('@react-navigation/native'), 'useNavigation')
      .mockReturnValue({ navigate: navigateMock });

    const { getByText } = render(
      <NavigationContainer>
        <Footer />
      </NavigationContainer>
    );

    fireEvent.press(getByText('Calculadora de Insulina'));
    expect(navigateMock).toHaveBeenCalledWith('Calculadora');
  });

  test('deve navegar para a tela Receitas ao clicar no botão correspondente', () => {
    const navigateMock = jest.fn();
    jest
      .spyOn(require('@react-navigation/native'), 'useNavigation')
      .mockReturnValue({ navigate: navigateMock });

    const { getByText } = render(
      <NavigationContainer>
        <Footer />
      </NavigationContainer>
    );

    fireEvent.press(getByText('Receitas'));
    expect(navigateMock).toHaveBeenCalledWith('Receitas');
  });

  test('deve navegar para a tela Quiz ao clicar no botão correspondente', () => {
    const navigateMock = jest.fn();
    jest
      .spyOn(require('@react-navigation/native'), 'useNavigation')
      .mockReturnValue({ navigate: navigateMock });

    const { getByText } = render(
      <NavigationContainer>
        <Footer />
      </NavigationContainer>
    );

    fireEvent.press(getByText('Quiz'));
    expect(navigateMock).toHaveBeenCalledWith('Quiz');
  });
});
