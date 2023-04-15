import { FrontItem, Tag } from '@vanih/cerebro-contracts';
import { API } from '../api';
import { useQuery } from '@tanstack/react-query';

export const fetchItemTags = async (id: FrontItem['id']): Promise<Tag[]> => {
  const response = await API.get(`/items/item/${id}/tags`);
  return response.data;
};

export function useTagsQuery(itemId: FrontItem['id']) {
  return useQuery({
    queryKey: ['itemTags', itemId],
    queryFn: () => fetchItemTags(itemId),
  });
}
