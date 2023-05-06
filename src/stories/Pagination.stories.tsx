import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '../pages/browse/Pagination';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'My Styled/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'number' },
  },
  args: {
    page: 1,
    count: 100,
  },
} satisfies Meta<typeof Pagination>;
export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const main: Story = {
  render: ({ count, page: _page }) => {
    const [page, setPage] = useState(_page);
    return <Pagination count={count} page={page} setCursor={setPage} />;
  },
  parameters: {
    controls: { include: ['count'] },
  },
};

export const many: Story = {
  render: ({ count, page: _page }) => {
    const [page, setPage] = useState(_page);
    return <Pagination count={count} page={page} setCursor={setPage} />;
  },
  parameters: {
    controls: { include: ['count'] },
  },
  args: {
    count: 10000,
  },
};
