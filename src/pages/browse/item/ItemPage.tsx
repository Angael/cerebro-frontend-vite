import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../../../App';
import { FrontItem } from '@vanih/cerebro-contracts';
import { AxiosError } from 'axios';
import { API } from '../../../api/api';
import Item from '../../../lib/items/Item';
import ItemDialog from './ItemDialog';

const fetchItem = async (id: string): Promise<FrontItem> => {
  const response = await API.get(`/items/item/${id}`);
  return response.data;
};

const ItemPage = () => {
  const navigate = useNavigate();
  const { id = '' } = useParams();
  const item = useQuery<FrontItem, AxiosError>({
    queryKey: [`item`, id],
    queryFn: () => fetchItem(id),
    retry: 0,
    initialData: () =>
      queryClient
        .getQueryData<FrontItem[]>(['items'])
        ?.find((item: FrontItem) => Number(item.id) === Number(id)),
  });

  const is404 = item.error?.response?.status === 404;

  if (is404) {
    return <h1 className='h1'>Item not found</h1>;
  }

  return (
    <ItemDialog open={!!id} onClose={() => navigate('/browse')}>
      {item.data && <Item item={item.data} />}
    </ItemDialog>
  );
};

export default ItemPage;
