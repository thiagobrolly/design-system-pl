import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from '.';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox',
    labelFor: 'checkbox',
    labelColor: '#215aff',
    isChecked: true,
  },
} as Meta;

export const Default: Story<CheckboxProps> = (args) => (
  <Checkbox
    label="Checkbox"
    labelFor="checkbox"
    labelColor="#215aff"
    {...args}
  />
);
