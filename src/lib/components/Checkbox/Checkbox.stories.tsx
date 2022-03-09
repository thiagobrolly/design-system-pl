import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from '.';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  // argTypes: {
  //   onclick: { action: 'checked' },
  // },
} as Meta;

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />;
Default.args = {
  // isChecked: false,
  label: '',
  labelFor: '',
};

export const Example: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Action"
        labelFor="action"
        // isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Adventure"
        labelFor="adventure"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Strategy"
        labelFor="strategy"
        {...args}
      />
    </div>
  </>
);
