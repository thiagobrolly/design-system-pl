import { Meta, Story } from '@storybook/react';
import { SelectLanguage, SelectLanguageProps } from '.';

export default {
  title: 'Components/SelectLanguage',
  component: SelectLanguage,
  args: {
    // locale: 'pt-BR',
  },
} as Meta;

export const Default: Story<SelectLanguageProps> = (args) => (
  <div style={{ width: 'max-content' }}>
    <SelectLanguage {...args} />
  </div>
);
