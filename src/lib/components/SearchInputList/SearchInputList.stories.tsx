import { Meta, Story } from '@storybook/react';
import { SearchInputList, SearchInputListProps } from '.';
import {
  fetchDataMock,
  childrenMock,
} from '../../../utils/mocks/fetchDataMock';

export default {
  title: 'Components/SearchInputList',
  component: SearchInputList,
  args: {
    disabled: false,
    label: 'Buscar usuário',
  },
} as Meta;

export const Filled: Story<SearchInputListProps> = (args) => (
  <div style={{ maxWidth: 500, padding: 15 }}>
    <SearchInputList {...args}>{childrenMock}</SearchInputList>
  </div>
);
export const Outline: Story<SearchInputListProps> = (args) => (
  <div style={{ maxWidth: 500, padding: 15 }}>
    <SearchInputList {...args}>{childrenMock}</SearchInputList>
  </div>
);
export const FilledDisabled: Story<SearchInputListProps> = (args) => (
  <div style={{ maxWidth: 500, padding: 15 }}>
    <SearchInputList {...args}>{childrenMock}</SearchInputList>
  </div>
);

export const OutlineDisabled: Story<SearchInputListProps> = (args) => (
  <div style={{ maxWidth: 500, padding: 15 }}>
    <SearchInputList {...args}>{childrenMock}</SearchInputList>
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
