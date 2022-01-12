import { Meta, Story } from '@storybook/react';
import { GenericInput } from '.';
import { GenericInputProps } from './types';

import { FaEnvelope } from 'react-icons/fa';

export default {
  title: 'Components/GenericInput',
  component: GenericInput,
  args: {
    disabled: false,
  },
} as Meta;

export const Filled: Story<GenericInputProps> = (args) => (
  <GenericInput {...args} />
);
export const Outlined: Story<GenericInputProps> = (args) => (
  <GenericInput {...args} />
);

Filled.args = {
  inputType: 'text',
  genericInputType: 'filled',
  label: 'Label aqui',
  width: '500px',
  leftIcon: <FaEnvelope />,
  inputId: 'genericInput-filled',
};

Outlined.args = {
  inputType: 'number',
  genericInputType: 'outlined',
  label: 'Label aqui',
  width: '320px',
  leftIcon: <FaEnvelope />,
  rightIcon: <FaEnvelope />,
  inputId: 'genericInput-outlined',
};
