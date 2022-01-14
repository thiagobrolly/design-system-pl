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
  'Mateus Junges2',
  'Matheus Morais2',
  'Mateus Junges3',
  'Matheus Morais3',
  'Mateus Junges4',
  'Matheus Morais4',
  'Mateus Junges5',
  'Matheus Morais5',
  'Mateus Junges6',
  'Matheus Morais6',
  'Mateus Junges xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxx',
  'Matheus Morais7',
  'Mateus Junges7',
  'Matheus Morais8',
  'Mateus Junges9',
  'Matheus Morais9',
  'Mateus Junges10',
  'Matheus Morais10',
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
  defaultErrorMessage: 'Registro não encontrado',
  options: userList,
};

Outlined.args = {
  searchInputType: 'outlined',
  label: 'Buscar usuário',
  width: '320px',
  inputId: 'searchInput-outlined',
  defaultErrorMessage: 'Registro não encontrado',
  options: userList,
};
