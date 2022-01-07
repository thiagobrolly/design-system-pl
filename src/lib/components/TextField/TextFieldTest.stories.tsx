import { Meta, Story } from '@storybook/react';
import { TextField, TextFieldProps } from '.';

export default {
  title: 'Components/TextField',
  component: TextField,
  args: {
    disabled: false,
    leftIcon: false,
  },
} as Meta;

export const Filled: Story<TextFieldProps> = (args) => <TextField {...args} />;
export const Outlined: Story<TextFieldProps> = (args) => (
  <TextField {...args} />
);

Filled.args = {
  textFieldType: 'filled',
  label: 'Label aqui',
  // errorMessage: 'Error aqui',
  // placeholder: 'Input text here',
};

Outlined.args = {
  textFieldType: 'outlined',
  label: 'Label aqui',
  errorMessage: 'Error aqui',
  // placeholder: 'Input text here',
};
