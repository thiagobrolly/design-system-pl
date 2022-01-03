import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Template: Story<Props> = (args) => <Button {...args} />;

Template.args = {
  children: 'Click',
};
