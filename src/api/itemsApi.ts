import { FrontItem, Tag } from '@vanih/cerebro-contracts';
import { API } from './api';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { queryClient } from '../App';

export const fetchItems = async (
  limit: number,
  page: number,
  tagIds: string, // 1,2,3
): Promise<FrontItem[]> => {
  const params: any = { limit, page, tagIds };
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

export const fetchItemCount = async (): Promise<number> => {
  const response = await API.get(`/items/count`);
  return response.data;
};

export const ITEM_KEY = 'item';
export const ITEMS_KEY = 'items';
export const ITEM_COUNT_KEY = 'itemCount';

export const useQueryItem = (id: string | number) =>
  useQuery<FrontItem, AxiosError>({
    queryKey: [ITEM_KEY, id],
    queryFn: () => fetchItem(id),
    retry: 0,
    initialData: () =>
      queryClient
        .getQueryData<FrontItem[]>([ITEMS_KEY])
        ?.find((item: FrontItem) => Number(item.id) === Number(id)),
  });

// TODO: Change to fetch with rest of query. Later on each wall will have different item count, which could update after each fetch
export const useQueryItemCount = () =>
  useQuery({
    queryKey: [ITEM_COUNT_KEY],
    queryFn: fetchItemCount,
    refetchInterval: 5 * 60 * 1000,
  });

export const getItemsArray = () =>
  queryClient.getQueryData<FrontItem[]>([ITEMS_KEY]);
