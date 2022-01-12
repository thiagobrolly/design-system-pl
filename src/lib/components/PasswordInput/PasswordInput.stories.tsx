import { Meta, Story } from '@storybook/react';
import { PasswordInput } from '.';
import { PasswordInputProps } from './types';

export default {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  args: {
    disabled: false,
  },
} as Meta;

export const Filled: Story<PasswordInputProps> = (args) => (
  <PasswordInput {...args} />
);
export const Outlined: Story<PasswordInputProps> = (args) => (
  <PasswordInput {...args} />
);

Filled.args = {
  passwordInputType: 'filled',
  label: 'Label aqui',
  width: '500px',
  inputId: 'passwordInput-filled',
};

Outlined.args = {
  passwordInputType: 'outlined',
  label: 'Label aqui',
  width: '320px',
  inputId: 'passwordInput-outlined',
};
