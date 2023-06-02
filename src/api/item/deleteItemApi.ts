import { API } from '../api';
import { FrontItem } from '@vanih/cerebro-contracts';
import { queryClient } from '../queryClient';

export const deleteItemApi = async (id: FrontItem['id']) => {
  const reponse = await API.delete(`/items/item/${id}`);
  await queryClient.invalidateQueries({ queryKey: ['items'] });
  await queryClient.invalidateQueries({ queryKey: ['item', id], exact: true });
  return reponse;
};
