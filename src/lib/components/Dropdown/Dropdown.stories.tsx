import { Meta, Story } from '@storybook/react';
import { Dropdown } from '.';
import { dropdownChildrenMock } from '../../../utils/mocks/dropdownChildrenMock';

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
