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

export const All: Story = {
  render: (args) => (
    <>
      <Stack style={{ margin: 16 }}>
        <Btn {...args} />
        <Btn {...args} className='active' />
      </Stack>
      <Stack style={{ margin: 16 }}>
        <Btn {...args} disabled />
        <Btn {...args} disabled className='active' />
      </Stack>
    </>
  ),
};
