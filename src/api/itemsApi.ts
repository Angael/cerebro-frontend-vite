import { QueryItems, FrontItem } from '@vanih/cerebro-contracts';
import { API } from './api';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { queryClient } from '../App';
import { useBrowseStore } from '../store/browse/browseStore';

export const FETCH_ITEMS_KEY = (
  limit: number,
  page: number,
  selectedTagIds: string,
) => [ITEMS_KEY, limit, page, selectedTagIds];

export const fetchItems = async (
  limit: number,
  page: number,
  tagIds: string, // "1,2,3"
): Promise<QueryItems> => {
  const params: any = { limit, page };
  if (tagIds) {
    params.tagIds = tagIds;
  }
  const response = await API.get('/items', { params });
  return response.data;
};

const fetchItem = async (id: string | number): Promise<FrontItem> => {
  const response = await API.get(`/items/item/${id}`);
  return response.data;
};

export const ITEM_KEY = 'item';
export const ITEMS_KEY = 'items';

export const useQueryItem = (id: string | number) =>
  useQuery<FrontItem, AxiosError>({
    queryKey: [ITEM_KEY, id],
    queryFn: () => fetchItem(id),
    retry: 0,
    initialData: () =>
      getItemsCache()?.items?.find(
        (item: FrontItem) => Number(item.id) === Number(id),
      ),
  });

export const getItemsCache = () => {
  const { page, limit, selectedTags } = useBrowseStore.getState();
  return queryClient.getQueryData<QueryItems>(
    FETCH_ITEMS_KEY(limit, page, selectedTags.map((tag) => tag.id).join()),
  );
};
