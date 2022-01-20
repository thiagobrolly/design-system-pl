import { Meta, Story } from '@storybook/react';
import { IconPaylivre } from '.';
import { IconPaylivreProps } from './types';

export default {
  title: 'Components/IconPaylivre',
  component: IconPaylivre,
  args: {
    size: 100,
  },
} as Meta;

export const GenericIcon: Story<IconPaylivreProps> = (args) => (
  <IconPaylivre {...args} />
);
export const IconList: Story<IconPaylivreProps> = () => {
  return (
    <>
      <div
        style={{
          border: '1px solid red',
          width: 'max-content',
          fontSize: '10px',
        }}
      >
        <IconPaylivre iconType="alertTriangleIcon" />
        <p>iconType:</p>
        <p>alertTriangleIcon</p>
      </div>
      <div
        style={{
          border: '1px solid red',
          width: 'max-content',
          fontSize: '10px',
        }}
      >
        <IconPaylivre iconType="arrowIcon" />
        <p>iconType:</p>
        <p>arrowIcon</p>
      </div>
      <div
        style={{
          border: '1px solid red',
          width: 'max-content',
          fontSize: '10px',
        }}
      >
        <IconPaylivre iconType="userIcon" />
        <p>iconType:</p>
        <p>userIcon</p>
      </div>
    </>
  );
};

// export const Outlined: Story<IconProps> = (args) => (
//   <Icon {...args} />
// );

// Generic.args = {
//   inputType: 'text',
//   genericInputType: 'filled',
//   label: 'Label aqui',
//   width: '500px',
//   leftIcon: true,
//   leftIconType: 'userIcon',
//   inputId: 'genericInput-filled',
// };

// Outlined.args = {
//   inputType: 'number',
//   genericInputType: 'outlined',
//   label: 'Label aqui',
//   width: '320px',
//   leftIcon: true,
//   leftIconType: 'searchIcon',
//   rightIcon: true,
//   inputId: 'genericInput-outlined',
// };
