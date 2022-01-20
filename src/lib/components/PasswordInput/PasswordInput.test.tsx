import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { theme } from '../../styles/theme';

import { PasswordInput } from '.';

describe('PasswordInput', () => {
  test('renders the PasswordInput: default component', () => {
    render(
      <PasswordInput
        label="Sua senha"
        inputId="form_passwordInput"
        inputArialabel="input-password"
        labelId="form_passwordInput-label"
        labelArialabel="label-password"
      />,
    );
    expect(screen.getByLabelText(/sua senha/i));
  });

  test('renders the PasswordInput: outline correct styles', () => {
    render(
      <PasswordInput
        width="520px"
        label="Sua senha"
        passwordInputType="outline"
        inputId="form_passwordInput"
        inputArialabel="input-password"
        labelId="form_passwordInput-label"
        labelArialabel="label-password"
      />,
    );
    const inputElement = screen.getByLabelText(/sua senha/i);
    expect(inputElement).toHaveStyle('background-color: transparent');
    expect(inputElement).toHaveStyle('color: rgba(0,0,0,0.74)');
  });

  test('renders the PasswordInput: filled correct styles', () => {
    render(
      <PasswordInput
        width="520px"
        label="Sua senha"
        passwordInputType="filled"
        inputId="form_passwordInput"
        inputArialabel="input-password"
        labelId="form_passwordInput-label"
        labelArialabel="label-password"
      />,
    );
    const inputElement = screen.getByLabelText(/sua senha/i);
    expect(inputElement).toHaveStyle(`background-color:${theme.color.white}`);
    expect(inputElement).toHaveStyle('color: rgba(0,0,0,0.87)');
  });

  test('Correct label starting style', () => {
    render(
      <PasswordInput
        label="Sua senha"
        inputId="form_passwordInput"
        inputArialabel="input-password"
        labelId="form_passwordInput-label"
        labelArialabel="label-password"
      />,
    );
    const labelText = screen.getByText(/sua senha/i);
    expect(labelText).toHaveStyle('font-size: 16px');
  });

  test('Correct handleBlur behavior', () => {
    render(
      <PasswordInput
        label="Sua senha"
        inputId="form_passwordInput"
        inputArialabel="input-password"
        labelId="form_passwordInput-label"
        labelArialabel="label-password"
      />,
    );
    const inputElement = screen.getByLabelText(/sua senha/i);

    fireEvent.focus(inputElement);
    fireEvent.blur(inputElement);
    expect(inputElement).not.toHaveClass('hasContent');

    fireEvent.change(inputElement, { target: { value: 'digitando...' } });
    fireEvent.blur(inputElement);
    expect(inputElement).toHaveClass('hasContent');
  });

  test('Correct toggle Password behavior', () => {
    render(
      <PasswordInput
        label="Sua senha"
        inputId="form_passwordInput"
        inputArialabel="input-password"
        labelId="form_passwordInput-label"
        labelArialabel="label-password"
      />,
    );

    const inputElement = screen.getByLabelText(/sua senha/i);
    const togglePasswordIcon = screen.getByLabelText('togglePasswordBtn');
    expect(inputElement).toHaveAttribute('type', 'password'); // evaluating password visibility off-on-off
    screen.getByLabelText('showPasswordIcon'); // evaluating togglePasswordIcon changing

    userEvent.click(togglePasswordIcon);
    expect(inputElement).toHaveAttribute('type', 'text');
    screen.getByLabelText('hidePasswordIcon');

    userEvent.click(togglePasswordIcon);
    expect(inputElement).toHaveAttribute('type', 'password');
    screen.getByLabelText('showPasswordIcon');
  });

  test('Correct rendering of errorMessage', () => {
    render(
      <PasswordInput
        label="Sua senha"
        inputId="form_passwordInput"
        inputArialabel="input-password"
        labelId="form_passwordInput-label"
        labelArialabel="label-password"
        errorMessage="Aconteceu error X."
      />,
    );
    const errorMsg = screen.getByText(/Aconteceu error X/i);
    expect(errorMsg).toHaveStyle(`color:${theme.color.error}`);
  });
});
