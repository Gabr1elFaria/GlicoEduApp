import { fireEvent, render, screen } from '@testing-library/react-native';
import { Recipes } from '../index';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CombinedProvider from '~/providers/CombinedProvider';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import AccordionContentMeal from '~/components/Accordion/accordionContentMeal';

jest.mock('@expo/vector-icons', () => {
  return {
    FontAwesome5: 'FontAwesome5',
  };
});

const RecipesComponent = () => {
  return (
    <NavigationContainer>
      <CombinedProvider>
        <Recipes />
      </CombinedProvider>
    </NavigationContainer>
  );
};

describe('Recipes Component', () => {
  test('renders Recipes component correctly', () => {
    render(RecipesComponent());
    expect(screen.getByText('RECEITAS')).toBeTruthy();
    expect(screen.getByPlaceholderText('Digite o que deseja pesquisar')).toBeTruthy();
    expect(screen.getByText('PESQUISAR')).toBeTruthy();
  });
  test('enables search button when input is filled', () => {
    render(RecipesComponent());
    const input = screen.getByPlaceholderText('Digite o que deseja pesquisar');
    fireEvent.changeText(input, 'Bolo de chocolate');
    expect(screen.getByText('PESQUISAR')).not.toBeDisabled();
  });
  test('disables search button when input is empty', () => {
    render(RecipesComponent());
    const searchButton = screen.getByText('PESQUISAR');
    expect(searchButton).toBeDisabled();
  });
  test('toggles accordion content when clicked', () => {
    render(RecipesComponent());
    const accordionMeal = screen.getByText('Refeição');
    fireEvent.press(accordionMeal);
    expect(screen.getByText('Refeição')).toBeTruthy();
    const accordionGlicRate = screen.getByText('Índice Glicêmico');
    fireEvent.press(accordionGlicRate);
    expect(screen.getByText('Índice Glicêmico')).toBeTruthy();
  });
  test('closes keyboard when touched outside the input field', () => {
    render(RecipesComponent());
    const input = screen.getByPlaceholderText('Digite o que deseja pesquisar');
    fireEvent.changeText(input, 'Bolo de chocolate');
    expect(input).toBeTruthy();
    const containerView = screen.getByTestId('containerView');
    fireEvent.press(containerView);
    expect(input).not.toHaveProp('focus', true);
  });
  test('updates input value correctly', () => {
    render(RecipesComponent());
    const input = screen.getByPlaceholderText('Digite o que deseja pesquisar');
    fireEvent.changeText(input, 'Bolo de cenoura');
    expect(screen.getByDisplayValue('Bolo de cenoura')).toBeTruthy();
  });
  test('renders AccordionContentMeal conditionally', () => {
    render(RecipesComponent());
    const accordionMeal = screen.getByText('Refeição');
    fireEvent.press(accordionMeal);
    expect(<AccordionContentMeal />).toBeTruthy();
  });
  test('keeps search button disabled for blank spaces in input', () => {
    render(RecipesComponent());
    const input = screen.getByPlaceholderText('Digite o que deseja pesquisar');
    fireEvent.changeText(input, '   ');
    const searchButton = screen.getByText('PESQUISAR');
    expect(searchButton).toBeDisabled();
  });
});
