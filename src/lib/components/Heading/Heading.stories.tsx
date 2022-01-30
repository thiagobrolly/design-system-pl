import { Meta, Story } from '@storybook/react';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Title Black',
    uppercase: false,
    bold: false,
    color: 'gray',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

export const Light: Story<HeadingProps> = (args) => <Heading {...args} />;
export const Dark: Story<HeadingProps> = (args) => <Heading {...args} />;

Dark.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

Dark.args = {
  children: 'Title White',
  color: 'white',
};
