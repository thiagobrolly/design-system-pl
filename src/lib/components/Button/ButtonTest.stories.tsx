import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    disabled: false,
    iconPlus: false,
    fullWidth: false,
  },
} as Meta;

export const Primary: Story<ButtonProps> = (args) => <Button {...args} />;
export const Secondary: Story<ButtonProps> = (args) => <Button {...args} />;
export const Outline: Story<ButtonProps> = (args) => <Button {...args} />;

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
