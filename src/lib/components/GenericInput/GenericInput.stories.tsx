import { Meta, Story } from '@storybook/react';
import { GenericInput } from '.';
import { GenericInputProps } from './types';

export default {
  title: 'Form/GenericInput',
  component: GenericInput,
  args: {
    disabled: false,
  },
} as Meta;

export const Filled: Story<GenericInputProps> = (args) => (
  <GenericInput {...args} />
);
export const Outline: Story<GenericInputProps> = (args) => (
  <GenericInput {...args} />
);

Filled.args = {
  inputType: 'text',
  genericInputType: 'filled',
  label: 'Label aqui',
  width: '500px',
  leftIcon: true,
  leftIconType: 'userIcon',
  inputId: 'genericInput-filled',
};

Outline.args = {
  inputType: 'number',
  genericInputType: 'outline',
  label: 'Label aqui',
  width: '320px',
  leftIcon: true,
  leftIconType: 'searchIcon',
  rightIcon: true,
  inputId: 'genericInput-outline',
};
