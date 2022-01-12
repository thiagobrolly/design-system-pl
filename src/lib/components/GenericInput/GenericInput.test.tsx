import React from 'react';
import { render } from '@testing-library/react';

import { GenericInput } from '.';

describe('GenericInput', () => {
  test('renders the GenericInput component', () => {
    render(
      <GenericInput
        inputType="text"
        width="520px"
        label="Seu nome completo"
        genericInputType="outlined"
        inputId="form_fullNameInput"
        inputArialabel="input-fullName"
        labelId="form_fullNameInput-label"
        labelArialabel="label-fullName"
      />,
    );
  });
});
