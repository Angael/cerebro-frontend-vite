import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../../../App';
import { FrontItem } from '@vanih/cerebro-contracts';
import { AxiosError } from 'axios';
import { API } from '../../../api/api';

type Props = {};

const fetchItem = async (id: string): Promise<FrontItem> => {
  const response = await API.get(`/items/item/${id}`);
  return response.data;
};

// const components = {
//   IMAGE: ViewImage,
//   VIDEO: ViewVideo,
// } as const;

const ItemPage = (props: Props) => {
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

  // let Component;
  // if (item.data) {
  //   const type = item.data.type;
  //   if (type && components[type]) {
  //     Component = components[type];
  //   }
  // }

  return <div>Test {JSON.stringify(item.data)}</div>;
};

export default ItemPage;
