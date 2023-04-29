import React, { Suspense, useState } from 'react';
import { useOutlet } from 'react-router';
import Layout from '../../lib/layout/Layout';
import ItemGrid from '../../lib/item-grid/ItemGrid';

import { FETCH_ITEMS_KEY, fetchItems } from '../../api/itemsApi';
import Pagination from './Pagination';
import CircleLoader from '../../styled/loaders/CircleLoader';
import IconWithText from '../../styled/icon-with-text/IconWithText';
import { useQuery } from '@tanstack/react-query';
import { Tag } from '@vanih/cerebro-contracts';
import { useBrowseStore } from '../../store/browse/browseStore';

const SelectTag = React.lazy(() => import('./SelectTag'));

const Browse = () => {
  const outlet = useOutlet();

  const { page, limit, selectedTags, set } = useBrowseStore();
  const selectedTagIds = selectedTags.map((tag) => tag.id).join();

  const changeTags = (tags: Tag[]) => {
    set({ selectedTags: tags, page: 0 });
  };

  const setPage = (page: number) => {
    set({ page });
  };

  const itemsQuery = useQuery({
    queryKey: FETCH_ITEMS_KEY(limit, page, selectedTagIds),
    queryFn: () => fetchItems(limit, page, selectedTagIds),
    refetchInterval: 5 * 60 * 1000,
    enabled: !outlet,
    keepPreviousData: true,
    initialData: { items: [], count: 0 },
  });

  return (
    <Layout isMaxWidth>
      {outlet}
      <Suspense fallback={null}>
        <SelectTag selectedTags={selectedTags} setSelectedTags={changeTags} />
      </Suspense>
      <Pagination
        count={itemsQuery.data?.count}
        page={page}
        setPage={setPage}
      />
      <div>{itemsQuery.data && <ItemGrid items={itemsQuery.data.items} />}</div>
      {itemsQuery.isError && itemsQuery.data.items.length === 0 && (
        <IconWithText text='Failed to load items' />
      )}
      {itemsQuery.isFetching && itemsQuery.data.items.length === 0 && (
        <CircleLoader />
      )}
      <Pagination
        count={itemsQuery.data?.count}
        page={page}
        setPage={setPage}
      />
    </Layout>
  );
};

export default Browse;
