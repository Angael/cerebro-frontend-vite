import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '../pages/browse/Pagination';
import Textfield from '../styled/textfield/Textfield';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'My Styled/Textfield',
  component: Textfield,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'Label of input',
  },
} satisfies Meta<typeof Textfield>;
export default meta;

type Story = StoryObj<typeof meta>;

export const main: Story = {};

export const disabled: Story = {
  args: {
    input: {
      value: 'asd',
      disabled: true,
    },
  },
};
