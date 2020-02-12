import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { BUTTON_NAME, INPUT_PLACEHOLDER } from './constantes/app.const';

const setup = () => {
  const { getByText, getByPlaceholderText, getByTestId } = render(<App />);
  const input = getByPlaceholderText(INPUT_PLACEHOLDER);
  const button = getByText(BUTTON_NAME);
  const result = getByTestId('result');
  return {
    input,
    button,
    result
  };
};

function executeTest(inputValue: string, final: string) {
  const { input, button, result } = setup();
  fireEvent.change(input, { target: { value: inputValue } });

  expect(input.value).toBe(inputValue);

  fireEvent.click(button);

  expect(result.textContent).toBe(final);
}

describe('renders react', () => {
  it('when input is [8, 5, 10] it must return 5', () => {
    const value = '[8, 5, 10]';
    executeTest(value, '5');
  });
  it('when input is [5, 4, -9, 6, -10, -1, 8] it must return -1', () => {
    const value = '[5, 4, -9, 6, -10, -1, 8]';
    executeTest(value, '-1');
  });
  it('when input is [] it must return 0', () => {
    const value = '[]';
    executeTest(value, '0');
  });
  it('when input is other it must return 0', () => {
    const value = 'bonjour';
    executeTest(value, '0');
  });
  it('when input is [8, 2, 3, "bonjour"] it must return 2', () => {
    const value = '[8, 2, 3, "bonjour"]';
    executeTest(value, '2');
  });
  it('when input is [5, 1, -1, 1] it must return 1', () => {
    const value = '[5, -1, 1, -1]';
    executeTest(value, '1');
  });
});
