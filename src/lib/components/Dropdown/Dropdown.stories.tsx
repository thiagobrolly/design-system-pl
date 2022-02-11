import { Meta, Story } from '@storybook/react';
import { Dropdown, dropdownChildrenMock } from '.';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    title: 'Usuários selecionados',
  },
} as Meta;

export const Default: Story = (args) => (
  <Dropdown {...args}>{dropdownChildrenMock}</Dropdown>
);
