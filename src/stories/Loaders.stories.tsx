import type { Meta, StoryObj } from '@storybook/react';
import CircleLoader from '../styled/loaders/CircleLoader';
import Card from '../styled/card/Card';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'My Styled/Loaders',
  component: CircleLoader,
  tags: ['autodocs'],
  argTypes: {
    isOverlay: { control: 'boolean' },
  },
  args: {},
} satisfies Meta<typeof CircleLoader>;
export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: (args) => (
    <>
      <Card style={{ margin: 16, position: 'relative' }}>
        <h1 className='h1'>Title</h1>
        <p className='body1'>Tabess messis in fidelis mare!</p>
        <CircleLoader {...args} isOverlay />
        <p className='body1'>Tabess messis in fidelis mare!</p>

        <p className='body1'>Tabess messis in fidelis mare!</p>
      </Card>

      <CircleLoader {...args} />
    </>
  ),
};
