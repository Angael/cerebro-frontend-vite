import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from '../styled/stack/Stack';
import Checkbox from '../styled/checkbox/Checkbox';

const meta = {
  title: 'My Styled/Checkbox',
  component: Checkbox,
  // tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Checkbox>;
export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const All: Story = {
  render: (args) => (
    <>
      <Stack style={{ margin: 16 }}>
        <Checkbox {...args} />
        <Checkbox {...args} checked />
        <Checkbox {...args} disabled />
        <Checkbox {...args} disabled checked />
      </Stack>
      <Stack style={{ margin: 16 }}>
        <input type='checkbox' {...args} />
        <input type='checkbox' {...args} checked />
        <input type='checkbox' {...args} disabled />
        <input type='checkbox' {...args} disabled checked />
      </Stack>
    </>
  ),
};
