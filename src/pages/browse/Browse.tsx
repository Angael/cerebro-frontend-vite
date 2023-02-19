import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { FrontItem } from '@vanih/cerebro-contracts';
import { API } from '../../api/api';
import Layout from '../../lib/layout/Layout';
import ItemGrid from '../../lib/item-grid/ItemGrid';

import css from './Browse.module.scss';

const fetchItems = async () => {
  const response = await API.get('/items');
  return response.data as FrontItem[];
};

const Browse = () => {
  const navigate = useNavigate();

  const items = useQuery({
    queryKey: ['items'],
    queryFn: fetchItems,
    refetchInterval: 5 * 60 * 1000,
  });

  const onSelectItem = (id: number) => {
    navigate(`/browse/item/${id}`);
  };

  return (
    <Layout>
      <div className={css.browsePage}>
        <h1 className='h1'>Browse</h1>
        <p className='body1'>
          The dark side clouds everything. Impossible to see the future is.
        </p>
        <p className='body2'>
          The abstruse fear of anger is to grasp with acceptance.
        </p>
        {items.data && (
          <ItemGrid items={items.data} onSelectItem={onSelectItem} />
        )}
      </div>
    </Layout>
  );
};

export default Browse;
