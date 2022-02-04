import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    disabled: false,
    icon: false,
    fullWidth: false,
  },
  argTypes: {
    as: { type: 'symbol' },
  },
} as Meta;

export const Primary: Story<ButtonProps> = (args) => <Button {...args} />;
Primary.args = {
  children: 'Primary',
  appearance: 'primary',
};

export const Secondary: Story<ButtonProps> = (args) => <Button {...args} />;
Secondary.args = {
  children: 'Secondary',
  appearance: 'secondary',
};

export const Outline: Story<ButtonProps> = (args) => <Button {...args} />;
Outline.args = {
  children: 'Outline',
  appearance: 'outline',
};

export const Approve: Story<ButtonProps> = (args) => <Button {...args} />;
Approve.args = {
  children: 'Approve',
  appearance: 'approve',
};

export const Cancel: Story<ButtonProps> = (args) => <Button {...args} />;
Cancel.args = {
  children: 'Cancel',
  appearance: 'cancel',
};

export const Icon: Story<ButtonProps> = (args) => <Button {...args} />;
Icon.args = {
  children: 'Click',
  appearance: 'secondary',
  icon: true,
};

export const asLink: Story = (args) => <Button {...args} />;
asLink.args = {
  children: 'Link',
  as: 'a',
  href: '#',
};

asLink.argTypes = {
  as: { type: 'string' },
};
