import React from 'react';
import { useOutlet } from 'react-router';
import Layout from '../../lib/layout/Layout';
import ItemGrid from '../../lib/item-grid/ItemGrid';

import { useQueryItems } from '../../api/itemsApi';

const Browse = () => {
  const outlet = useOutlet();

  const items = useQueryItems(!outlet);

  return (
    <Layout isMaxWidth>
      {outlet}
      <div>{items.data && <ItemGrid items={items.data} />}</div>
    </Layout>
  );
};

export default Browse;
