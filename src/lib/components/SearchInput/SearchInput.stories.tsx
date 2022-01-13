import { Meta, Story } from '@storybook/react';
import { SearchInput } from '.';
import { SearchInputProps } from './types';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  args: {
    disabled: false,
  },
} as Meta;

const userList = [
  'Manoel Pereira',
  'Diego Arend',
  'Hugo Gitz',
  'Derickson Loss',
  'Thiago Sousa',
  'Tatiani da Silva',
  'Mateus Junges',
  'Matheus Morais',
  'Mateus Junges',
  'Matheus Morais',
  'Mateus Junges',
  'Matheus Morais',
  'Mateus Junges',
  'Matheus Morais',
  'Mateus Junges',
  'Matheus Morais',
  'Mateus Junges',
  'Matheus Morais',
  'Mateus Junges xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxx',
  'Matheus Morais',
  'Mateus Junges',
  'Matheus Morais',
  'Mateus Junges',
  'Matheus Morais',
  'Mateus Junges',
  'Matheus Morais',
];

export const Filled: Story<SearchInputProps> = (args) => (
  <SearchInput {...args} />
);
export const Outlined: Story<SearchInputProps> = (args) => (
  <SearchInput {...args} />
);

Filled.args = {
  searchInputType: 'filled',
  label: 'Buscar usuário',
  width: '500px',
  inputId: 'searchInput-filled',
  options: userList,
};

Outlined.args = {
  searchInputType: 'outlined',
  label: 'Buscar usuário',
  width: '320px',
  inputId: 'searchInput-outlined',
  options: userList,
};
