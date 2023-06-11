import type { Meta, StoryObj } from '@storybook/react';

import DropdownExample from '../styled/dropdown/DropdownExample';
import { Btn } from '../styled/btn/Btn';

const meta = {
  title: 'My Styled/Dropdown',
  component: DropdownExample,
} satisfies Meta<typeof DropdownExample>;
export default meta;

type Story = StoryObj<typeof meta>;

export const normal: Story = {
  render: () => (
    <div style={{ width: 300, margin: 'auto' }}>
      <DropdownExample>
        <Btn>To jest dropdown</Btn>
      </DropdownExample>
    </div>
  ),
};
