import React from 'react';
import { render } from '@testing-library/react';

import { PasswordInput } from '.';

describe('PasswordInput', () => {
  test('renders the PasswordInput component', () => {
    render(
      <PasswordInput
        width="520px"
        label="Sua senha"
        passwordInputType="outlined"
        inputId="form_passwordInput"
        inputArialabel="input-password"
        labelId="form_passwordInput-label"
        labelArialabel="label-password"
      />,
    );
  });
});
