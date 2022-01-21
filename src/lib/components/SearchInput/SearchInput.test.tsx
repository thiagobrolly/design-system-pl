import React from 'react';
import { render } from '@testing-library/react';

import { SearchInput } from '.';

describe('SearchInput', () => {
  test('renders the SearchInput component', () => {
    render(
      <SearchInput
        width="520px"
        label="Seu nome completo"
        searchInputType="outline"
        inputId="form_fullNameInput"
        inputArialabel="input-fullName"
        labelId="form_fullNameInput-label"
        labelArialabel="label-fullName"
        options={['A', 'B']}
      />,
    );
  });
});
