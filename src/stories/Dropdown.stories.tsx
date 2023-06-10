import type { Meta, StoryObj } from '@storybook/react';

import DropdownExample from '../styled/dropdown/DropdownExample';
import { Btn } from '../styled/btn/Btn';

const meta = {
  title: 'My Styled/Dropdown',
  component: DropdownExample,
} satisfies Meta<typeof DropdownExample>;
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
  render: () => (
    <div style={{ width: 300, margin: 'auto' }}>
      <DropdownExample>
        <Btn>To jest dropdown</Btn>
      </DropdownExample>
    </div>
  ),
};
