import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from '../styled/dropdown/Dropdown';
import { Stack } from '../styled/stack/Stack';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'My Styled/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;
export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const All: Story = {
//   render: (args) => (
//     <>
//       <Stack style={{ margin: 16 }}>
//         <Dropdown {...args} />
//       </Stack>
//       <Stack style={{ margin: 16 }}>
//         <Dropdown {...args} disabled />
//       </Stack>
//     </>
//   ),
// };

export const normal: Story = {
  render: () => <Dropdown>To jest dropdown</Dropdown>,
};
