import type { Meta, StoryObj } from '@storybook/react';

import { Btn } from '../styled/btn/Btn';
import { Stack } from '../styled/stack/Stack';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'My Styled/Btn',
  component: Btn,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'select', options: ['a', 'button'] },
  },
  args: {
    as: 'button',
    children: 'Button',
  },
} satisfies Meta<typeof Btn>;
export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const All: Story = {
  render: (args) => (
    <>
      <Stack style={{ margin: 16 }}>
        <Btn {...args} />
      </Stack>
      <Stack style={{ margin: 16 }}>
        <Btn {...args} disabled />
      </Stack>
    </>
  ),
};
