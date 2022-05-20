import { Meta, Story } from '@storybook/react';
import { Select } from '.';
import { selectOptionsMock } from '../../../utils/mocks/selectOptionsMock';

export default {
  title: 'Components/Select',
  component: Select,
  args: {
    label: 'Quantity of itens',
    placeholder: 'Select quantity',
  },
} as Meta;

export const Default: Story = (args) => (
  <Select {...args} options={selectOptionsMock} />
);
