import { Meta, Story } from '@storybook/react';
import { Button, Props } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    disabled: false,
    iconPlus: false,
  },
} as Meta;

export const Primary: Story<Props> = (args) => <Button {...args} />;
export const Secondary: Story<Props> = (args) => <Button {...args} />;
export const Outline: Story<Props> = (args) => <Button {...args} />;

Primary.args = {
  children: 'Primary',
  btnType: 'primary',
};

Secondary.args = {
  children: 'Secondary',
  btnType: 'secondary',
};

Outline.args = {
  children: 'Outline',
  btnType: 'outline',
};
