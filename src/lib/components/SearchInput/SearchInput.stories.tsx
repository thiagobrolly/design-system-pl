import { Meta, Story } from '@storybook/react';
import { SearchInput, SearchInputProps } from '.';
import {
  fetchDataMock,
  childrenMock,
} from '../../../utils/mocks/fetchDataMock';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  args: {
    disabled: false,
    label: 'Buscar usuário',
  },
} as Meta;

export const Filled: Story<SearchInputProps> = (args) => (
  <div style={{ maxWidth: 500, padding: 15 }}>
    <SearchInput {...args}>{childrenMock}</SearchInput>
  </div>
);
export const Outline: Story<SearchInputProps> = (args) => (
  <div style={{ maxWidth: 500, padding: 15 }}>
    <SearchInput {...args}>{childrenMock}</SearchInput>
  </div>
);
export const FilledDisabled: Story<SearchInputProps> = (args) => (
  <div style={{ maxWidth: 500, padding: 15 }}>
    <SearchInput {...args}>{childrenMock}</SearchInput>
  </div>
);

export const OutlineDisabled: Story<SearchInputProps> = (args) => (
  <div style={{ maxWidth: 500, padding: 15 }}>
    <SearchInput {...args}>{childrenMock}</SearchInput>
  </div>
);

Filled.args = {
  outline: false,
  fetchData: fetchDataMock,
};

Outline.args = {
  outline: true,
  fetchData: fetchDataMock,
};

FilledDisabled.args = {
  disabled: true,
};

OutlineDisabled.args = {
  outline: true,
  disabled: true,
};
