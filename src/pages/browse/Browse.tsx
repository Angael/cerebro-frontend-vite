import React, { Suspense, useState } from 'react';
import { useOutlet } from 'react-router';
import Layout from '../../lib/layout/Layout';
import ItemGrid from '../../lib/item-grid/ItemGrid';

import { fetchItems, ITEMS_KEY } from '../../api/itemsApi';
import Pagination from './Pagination';
import { PAGINATION_LIMIT } from '../../utils/consts';
import CircleLoader from '../../styled/loaders/CircleLoader';
import IconWithText from '../../styled/icon-with-text/IconWithText';
import { useQuery } from '@tanstack/react-query';
import { Tag } from '@vanih/cerebro-contracts';

const SelectTag = React.lazy(() => import('./SelectTag'));

const Browse = () => {
  const outlet = useOutlet();

  const [page, setPage] = useState(0);

  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const selectedTagIds = selectedTags.map((tag) => tag.id).join();

  const changeTags = (tags: Tag[]) => {
    setSelectedTags(tags);
    setPage(0);
  };

  const itemsQuery = useQuery({
    queryKey: [ITEMS_KEY, page, selectedTagIds],
    queryFn: () => fetchItems(PAGINATION_LIMIT, page, selectedTagIds),
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
        setCursor={setPage}
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
        setCursor={setPage}
      />
    </Layout>
  );
};

export default Browse;
