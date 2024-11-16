import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Header } from '~/components/Header';
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

describe('Header Component', () => {
  test('deve renderizar corretamente o Header', () => {
    const { getByText } = render(
      <NavigationContainer>
        <Header />
      </NavigationContainer>
    );

    expect(getByText('GlicoEdu')).toBeTruthy();
  });

  test('deve navegar para a tela Home ao clicar no ícone de Home', () => {
    const navigateMock = jest.fn();
    jest
      .spyOn(require('@react-navigation/native'), 'useNavigation')
      .mockReturnValue({ navigate: navigateMock });

    const { getByTestId } = render(
      <NavigationContainer>
        <Header />
      </NavigationContainer>
    );

    fireEvent.press(getByTestId('home-icon'));
    expect(navigateMock).toHaveBeenCalledWith('Home');
  });

  test('deve navegar para a tela FAQ ao clicar no ícone de FAQ', () => {
    const navigateMock = jest.fn();
    jest
      .spyOn(require('@react-navigation/native'), 'useNavigation')
      .mockReturnValue({ navigate: navigateMock });

    const { getByTestId } = render(
      <NavigationContainer>
        <Header />
      </NavigationContainer>
    );

    fireEvent.press(getByTestId('faq-icon'));
    expect(navigateMock).toHaveBeenCalledWith('FAQ');
  });

  test('deve exibir o texto "GlicoEdu"', () => {
    const { getByText } = render(
      <NavigationContainer>
        <Header />
      </NavigationContainer>
    );

    expect(getByText('GlicoEdu')).toBeTruthy();
  });

  test('deve renderizar os ícones de Home e FAQ corretamente', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <Header />
      </NavigationContainer>
    );

    expect(getByTestId('home-icon')).toBeTruthy();
    expect(getByTestId('faq-icon')).toBeTruthy();
  });
});
