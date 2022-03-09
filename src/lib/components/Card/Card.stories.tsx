import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from '.';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    title: 'Title',
    subTitle: 'Sub Title',
    size: 'medium',
    margin: '',
    marginTop: '',
    marginBottom: '',
    marginLeft: '',
    marginRight: '',
  },
} as Meta;

export const Default: Story<CardProps> = (args) => <Card {...args} />;
