import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { InsulinCalc } from '..';
import { NavigationContainer } from '@react-navigation/native';

const InsulinCalculatorComponent = () => {
  return (
    <NavigationContainer>
      <InsulinCalc />
    </NavigationContainer>
  );
};

describe('InsulinCalc Component', () => {
  test('renders input, button, and initial text correctly', () => {
    const { getByPlaceholderText, getByText } = render(InsulinCalculatorComponent());

    expect(getByPlaceholderText('Ex: 30')).toBeTruthy();
    expect(getByText('Insira a quantidade de carboidrato em gramas:')).toBeTruthy();
    expect(getByText('CALCULAR')).toBeTruthy();
  });

  test('button is initially disabled', () => {
    const { getByRole } = render(
      <NavigationContainer>
        <InsulinCalc />
      </NavigationContainer>
    );
    const button = getByRole('button', { name: 'CALCULAR' });

    expect(button).toBeDisabled();
  });

  test('enables button when input has a valid number', async () => {
    const { getByPlaceholderText, getByRole } = render(InsulinCalculatorComponent());
    const input = getByPlaceholderText('Ex: 30');
    const button = getByRole('button', { name: 'CALCULAR' });

    fireEvent.changeText(input, '20');

    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });
  });

  test('disables button when input is cleared', () => {
    const { getByPlaceholderText, getByRole } = render(InsulinCalculatorComponent());
    const input = getByPlaceholderText('Ex: 30');
    const button = getByRole('button', { name: 'CALCULAR' });

    fireEvent.changeText(input, '20');
    fireEvent.changeText(input, '');
    expect(button).toBeDisabled();
  });

  test('calculates correct insulin dose for input 15', async () => {
    const { getByPlaceholderText, getByRole, findByText } = render(InsulinCalculatorComponent());
    const input = getByPlaceholderText('Ex: 30');

    fireEvent.changeText(input, '15');
    fireEvent.press(getByRole('button', { name: 'CALCULAR' }));

    expect(
      await findByText('A dose necessária de insulina para 15 gramas de carboidrato é:')
    ).toBeTruthy();
    expect(await findByText('Uma ( 1 ) Unidade')).toBeTruthy();
  });

  test('calculates correct insulin dose for input 30', async () => {
    const { getByPlaceholderText, getByRole, findByText } = render(InsulinCalculatorComponent());
    const input = getByPlaceholderText('Ex: 30');

    fireEvent.changeText(input, '30');
    fireEvent.press(getByRole('button', { name: 'CALCULAR' }));

    expect(
      await findByText('A dose necessária de insulina para 30 gramas de carboidrato é:')
    ).toBeTruthy();
    expect(await findByText('Duas ( 2 ) Unidades')).toBeTruthy();
  });

  test('calculates "Não foi possível calcular" for values above 75', async () => {
    const { getByPlaceholderText, getByRole, findByText } = render(InsulinCalculatorComponent());
    const input = getByPlaceholderText('Ex: 30');

    fireEvent.changeText(input, '80');
    fireEvent.press(getByRole('button', { name: 'CALCULAR' }));

    expect(await findByText('Não foi possível calcular')).toBeTruthy();
  });

  test('resets insulin result display when input is cleared', async () => {
    const { getByPlaceholderText, getByRole, getByText, queryByText } = render(
      InsulinCalculatorComponent()
    );
    const input = getByPlaceholderText('Ex: 30');

    fireEvent.changeText(input, '15');
    fireEvent.press(getByRole('button', { name: 'CALCULAR' }));

    await waitFor(() =>
      expect(
        getByText('A dose necessária de insulina para 15 gramas de carboidrato é:')
      ).toBeTruthy()
    );

    fireEvent.changeText(input, '');
    await waitFor(() => expect(queryByText('A dose necessária de insulina para')).toBeNull());
  });

  test('calls handleTouchOutside when pressing outside the input', () => {
    const { getByPlaceholderText, getByRole, getByText, getByDisplayValue } = render(
      InsulinCalculatorComponent()
    );
    const input = getByPlaceholderText('Ex: 30');

    fireEvent.changeText(input, '20');
    fireEvent.press(getByRole('button', { name: 'CALCULAR' }));
    fireEvent.press(getByText('Insira a quantidade de carboidrato em gramas:'));

    expect(getByDisplayValue('20')).toBeTruthy();
  });
});
