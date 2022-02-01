import { Story, Meta } from '@storybook/react/types-6-0';
import { Tooltip } from '.';
import { TooltipProps } from './types';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

export const Default: Story<TooltipProps> = (args) => <Tooltip {...args} />;

Default.args = {
  title: 'Click here',
  children: 'content',
  position: 'left',
};
