import { Meta, Story } from '@storybook/react';
import { TextField, TextFieldProps } from '.';
import { IconLock } from '../Icons';

export default {
  title: 'Components/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    iconDefault: false,
    initialValue: '',
    disabled: false,
    outline: false,
    error: '',
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: 'symbol' },
  },
} as Meta;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const Outline: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);
Outline.args = {
  outline: true,
};

export const Email: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);
Email.args = {
  inputType: 'email',
  label: 'E-mail',
  name: 'email',
  iconDefault: true,
  initialValue: 'email@email.com',
};

export const Password: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);
Password.args = {
  inputType: 'password',
  label: 'Password',
  name: 'password',
  initialValue: 'password',
  iconDefault: true,
  iconPosition: 'right',
};

export const ExternalIcon: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);
ExternalIcon.args = {
  icon: <IconLock />,
};

export const Error: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);
Error.args = {
  error: 'Ops...something is wrong',
};
