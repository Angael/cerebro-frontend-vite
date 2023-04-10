import React, { useState } from 'react';
import { useOutlet } from 'react-router';
import Layout from '../../lib/layout/Layout';
import ItemGrid from '../../lib/item-grid/ItemGrid';

import { useQueryItems } from '../../api/itemsApi';
import Pagination from './Pagination';
import { PAGINATION_LIMIT } from '../../utils/consts';

const Browse = () => {
  const outlet = useOutlet();

  const [page, setPage] = useState<number>(0);
  const items = useQueryItems(!outlet, PAGINATION_LIMIT, page);

  return (
    <Layout isMaxWidth>
      {outlet}
      <Pagination items={items.data ?? []} page={page} setCursor={setPage} />
      <div>{items.data && <ItemGrid items={items.data} />}</div>
      <Pagination items={items.data ?? []} page={page} setCursor={setPage} />
    </Layout>
  );
};

export default Browse;
