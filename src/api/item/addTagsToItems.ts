import { API } from '../api';
import { FrontItem } from '@vanih/cerebro-contracts';
import { queryClient } from '../queryClient';

export const addTagsToItems = async (
  itemIds: FrontItem['id'][],
  tags: string[],
) => {
  const reponse = await API.post(`/items/item/many/tags`, {
    itemIds,
    tags,
  });

  for (const itemId of itemIds) {
    queryClient.invalidateQueries({
      queryKey: ['itemTags', itemId],
      exact: true,
    });
  }

  return reponse;
};
