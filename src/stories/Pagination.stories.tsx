import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '../pages/browse/Pagination';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'My Styled/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    pageCount: { control: 'number' },
  },
  args: {
    page: 1,
    pageCount: 100,
  },
} satisfies Meta<typeof Pagination>;
export default meta;

type Story = StoryObj<typeof meta>;

export const main: Story = {
  render: ({ pageCount, page: _page }) => {
    const [page, setPage] = useState(_page);
    return <Pagination pageCount={pageCount} page={page} setPage={setPage} />;
  },
  parameters: {
    controls: { include: ['pageCount'] },
  },
};

export const many: Story = {
  render: ({ pageCount, page: _page }) => {
    const [page, setPage] = useState(_page);
    return <Pagination pageCount={pageCount} page={page} setPage={setPage} />;
  },
  parameters: {
    controls: { include: ['pageCount'] },
  },
  args: {
    pageCount: 10000,
  },
};
