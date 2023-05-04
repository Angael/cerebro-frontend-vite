import type { Meta, StoryObj } from '@storybook/react';

import IconBtn from '../styled/icon-btn/IconBtn';
import { Icon } from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import { Stack } from '../styled/stack/Stack';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'My Styled/IconBtn',
  component: IconBtn,
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'select', options: ['a', 'button'] },
    filled: { control: 'boolean' },
  },
  args: {
    as: 'button',
    children: <Icon path={mdiDelete} size={1} />,
  },
} satisfies Meta<typeof IconBtn>;
export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: (args) => (
    <>
      <Stack style={{ margin: 16 }}>
        <IconBtn {...args} filled />
        <IconBtn {...args} />
      </Stack>
      <Stack style={{ margin: 16 }}>
        <IconBtn {...args} disabled filled />
        <IconBtn {...args} disabled />
      </Stack>
    </>
  ),
};
