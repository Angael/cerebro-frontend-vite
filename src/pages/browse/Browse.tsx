import React, { useState } from 'react';
import { useOutlet } from 'react-router';
import Layout from '../../lib/layout/Layout';
import ItemGrid from '../../lib/item-grid/ItemGrid';

import { useQueryItems } from '../../api/itemsApi';
import Pagination from './Pagination';
import { PAGINATION_LIMIT } from '../../utils/consts';
import CircleLoader from '../../lib/loaders/CircleLoader';
import IconWithText from '../../lib/icon-with-text/IconWithText';
import WallSelectInput from './WallSelectInput';

const Browse = () => {
  const outlet = useOutlet();

  const [page, setPage] = useState(0);
  // TODO: Change to tags
  const [wall, setWall] = useState<string>('');
  const items = useQueryItems(!outlet, PAGINATION_LIMIT, page);

  return (
    <Layout isMaxWidth>
      {outlet}
      <WallSelectInput wall={wall} setWall={setWall} />
      <Pagination items={items.data} page={page} setCursor={setPage} />
      <div>{items.data && <ItemGrid items={items.data} />}</div>
      {items.isError && items.data.length === 0 && (
        <IconWithText text='Failed to load items' />
      )}
      {items.isFetching && items.data.length === 0 && <CircleLoader />}
      <Pagination items={items.data} page={page} setCursor={setPage} />
    </Layout>
  );
};

export default Browse;
