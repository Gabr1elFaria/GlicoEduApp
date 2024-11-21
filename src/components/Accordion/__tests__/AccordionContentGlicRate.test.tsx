import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AccordionContentGlicRate from '../accordionContentGlicRate';
import { RecipeGlicFilterProvider } from '~/providers/RecipeGlicFilterProvider';

describe('AccordionContentGlicRate Component', () => {
  const setup = () =>
    render(
      <RecipeGlicFilterProvider>
        <AccordionContentGlicRate />
      </RecipeGlicFilterProvider>
    );

  test('deve renderizar corretamente o componente', () => {
    const { getByText, getByTestId } = setup();

    expect(getByText('Baixo Índice Glicêmico')).toBeTruthy();
    expect(getByText('Médio Índice Glicêmico')).toBeTruthy();
    expect(getByTestId('low-glic-checkbox')).toBeTruthy();
    expect(getByTestId('medium-glic-checkbox')).toBeTruthy();
  });

  test('deve exibir os checkboxes no estado inicial correto e alterar o estado ao clicar', () => {
    const { getByTestId } = setup();

    const lowGlicCheckbox = getByTestId('low-glic-checkbox');
    const mediumGlicCheckbox = getByTestId('medium-glic-checkbox');

    expect(lowGlicCheckbox.props.style[1].backgroundColor).toBe('white');
    expect(mediumGlicCheckbox.props.style[1].backgroundColor).toBe('white');

    fireEvent.press(lowGlicCheckbox);
    expect(lowGlicCheckbox.props.style[1].backgroundColor).toBe('black');

    fireEvent.press(mediumGlicCheckbox);
    expect(mediumGlicCheckbox.props.style[1].backgroundColor).toBe('black');
  });
});
