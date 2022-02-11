import { Meta, Story } from '@storybook/react';
import { SearchInput } from '.';
import { SearchInputProps } from './types';
import { searchUserDataMock } from './searchUserDataMock';

export default {
  title: 'Form/SearchInput',
  component: SearchInput,
  args: {
    disabled: false,
  },
} as Meta;

export const Filled: Story<SearchInputProps> = (args) => (
  <div style={{ maxWidth: 500, padding: 15 }}>
    <SearchInput {...args} />
  </div>
);
export const Outline: Story<SearchInputProps> = (args) => (
  <div style={{ maxWidth: 500, padding: 15 }}>
    <SearchInput {...args} />
  </div>
);

Filled.args = {
  searchInputType: 'filled',
  label: 'Buscar usuário',
  inputId: 'searchInput-filled',
  defaultErrorMessage: 'Registro não encontrado',
  options: searchUserDataMock,
};

Outline.args = {
  searchInputType: 'outline',
  label: 'Buscar usuário',
  inputId: 'searchInput-outline',
  defaultErrorMessage: 'Registro não encontrado',
  options: searchUserDataMock,
};
