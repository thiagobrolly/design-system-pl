import { Meta, Story } from '@storybook/react';
import { TextField, TextFieldProps } from '.';
import { IconUser } from '../Icons';

export default {
  title: 'Components/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    icon: <IconUser />,
    initialValue: '',
    placeholder: 'john.doe@email.com',
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

export const Error: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

Error.args = {
  error: 'Ops...something is wrong',
};
