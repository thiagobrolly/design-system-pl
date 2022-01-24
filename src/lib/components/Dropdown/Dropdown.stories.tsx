import { Story, Meta } from '@storybook/react/types-6-0';
import { Dropdown } from '.';
import { DropdownProps } from './types';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

export const Default: Story<DropdownProps> = (args) => <Dropdown {...args} />;

Default.args = {
  title: 'Click here',
  children: 'content',
  position: 'left',
};
