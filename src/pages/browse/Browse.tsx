import React from 'react';
import { useOutlet } from 'react-router';
import Layout from '../../lib/layout/Layout';
import ItemGrid from '../../lib/item-grid/ItemGrid';

import css from './Browse.module.scss';
import { useQueryItems } from '../../api/itemsApi';

const Browse = () => {
  const outlet = useOutlet();

  const items = useQueryItems(!outlet);

  return (
    <Layout className={css.browsePage}>
      {outlet}

      <h1 className='h1'>Browse</h1>
      <p className='body1'>
        The dark side clouds everything. Impossible to see the future is.
      </p>
      <p className='body2'>
        The abstruse fear of anger is to grasp with acceptance.
      </p>
      <div>{items.data && <ItemGrid items={items.data} />}</div>
    </Layout>
  );
};

export default Browse;
