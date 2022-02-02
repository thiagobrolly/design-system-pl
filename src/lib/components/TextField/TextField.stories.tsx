import { Meta, Story } from '@storybook/react';
import { TextField, TextFieldProps } from '.';

export default {
  title: 'Components/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.doe@email.com',
  },
  argTypes: {
    onInput: { action: 'changed' },
  },
} as Meta;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);
