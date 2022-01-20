import { Meta, Story } from '@storybook/react';
import { PasswordInput } from '.';
import { PasswordInputProps } from './types';

export default {
  title: 'Form/PasswordInput',
  component: PasswordInput,
  args: {
    disabled: false,
  },
} as Meta;

export const Filled: Story<PasswordInputProps> = (args) => (
  <PasswordInput {...args} />
);
export const Outline: Story<PasswordInputProps> = (args) => (
  <PasswordInput {...args} />
);

Filled.args = {
  passwordInputType: 'filled',
  label: 'Label aqui',
  width: '500px',
  inputId: 'passwordInput-filled',
};

Outline.args = {
  passwordInputType: 'outline',
  label: 'Label aqui',
  width: '320px',
  inputId: 'passwordInput-outline',
};
