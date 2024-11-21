import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AccordionContentMeal from '../accordionContentMeal';
import { RecipeMealFilterProvider } from '~/providers/RecipeMealFilterProvider';

describe('AccordionContentMeal Component', () => {
  const setup = () =>
    render(
      <RecipeMealFilterProvider>
        <AccordionContentMeal />
      </RecipeMealFilterProvider>
    );

  test('deve renderizar corretamente o componente', () => {
    const { getByText, getByTestId } = setup();

    expect(getByText('Café da Manhã')).toBeTruthy();
    expect(getByText('Almoço')).toBeTruthy();
    expect(getByText('Janta')).toBeTruthy();
    expect(getByText('Lanche')).toBeTruthy();
    expect(getByTestId('breakfest-checkbox')).toBeTruthy();
    expect(getByTestId('lunch-checkbox')).toBeTruthy();
    expect(getByTestId('dinner-checkbox')).toBeTruthy();
    expect(getByTestId('snack-checkbox')).toBeTruthy();
  });

  test('deve exibir os checkboxes no estado inicial correto e alterar o estado ao clicar', () => {
    const { getByTestId } = setup();
  
    const breakfestCheckbox = getByTestId('breakfest-checkbox');
    const lunchCheckbox = getByTestId('lunch-checkbox');
    const dinnerCheckbox = getByTestId('dinner-checkbox');
    const snackCheckbox = getByTestId('snack-checkbox');
  
    expect(breakfestCheckbox.props.style[1].backgroundColor).toBe('white');
    expect(lunchCheckbox.props.style[1].backgroundColor).toBe('white');
    expect(dinnerCheckbox.props.style[1].backgroundColor).toBe('white');
    expect(snackCheckbox.props.style[1].backgroundColor).toBe('white');
  
    fireEvent.press(breakfestCheckbox);
    expect(breakfestCheckbox.props.style[1].backgroundColor).toBe('black');
  
    fireEvent.press(lunchCheckbox);
    expect(lunchCheckbox.props.style[1].backgroundColor).toBe('black');
  
    fireEvent.press(dinnerCheckbox);
    expect(dinnerCheckbox.props.style[1].backgroundColor).toBe('black');
  
    fireEvent.press(snackCheckbox);
    expect(snackCheckbox.props.style[1].backgroundColor).toBe('black');
  });
});
