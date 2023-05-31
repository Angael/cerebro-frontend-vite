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
import { PAGINATION_LIMIT } from '../../utils/consts';

const SelectTag = React.lazy(() => import('./SelectTag'));

const Browse = () => {
  const outlet = useOutlet();

  const { page, limit, selectedTags, set } = useBrowseStore();
  const selectedTagIds = selectedTags.map((tag) => tag.id).join();

  const changeTags = (tags: Tag[]) => {
    set({ selectedTags: tags, page: 0 });
  };

  const setPage = (_page: number) => {
    set({ page: _page - 1 });
  };

  const itemsQuery = useQuery({
    queryKey: FETCH_ITEMS_KEY(limit, page, selectedTagIds),
    queryFn: () => fetchItems(limit, page, selectedTagIds),
    refetchInterval: 5 * 60 * 1000,
    enabled: !outlet,
    keepPreviousData: true,
  });

  const pageNr = page + 1;
  const pageCount = Math.ceil((itemsQuery.data?.count ?? 1) / PAGINATION_LIMIT);

  return (
    <Layout isMaxWidth>
      {outlet}
      <Suspense fallback={null}>
        <SelectTag selectedTags={selectedTags} setSelectedTags={changeTags} />
      </Suspense>
      <Pagination pageCount={pageCount} page={pageNr} setPage={setPage} />
      {itemsQuery.data && <ItemGrid items={itemsQuery.data.items} />}
      {itemsQuery.isError && itemsQuery.data?.items.length === 0 && (
        <IconWithText text='Failed to load items' />
      )}
      {itemsQuery.isFetching && itemsQuery.data?.items.length === 0 && (
        <CircleLoader />
      )}
      <Pagination pageCount={pageCount} page={pageNr} setPage={setPage} />
    </Layout>
  );
};

export default Browse;
