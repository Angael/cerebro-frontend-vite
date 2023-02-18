import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { FrontItem } from '@vanih/cerebro-contracts';
import { API } from '../../api/api';
import Layout from '../../lib/layout/Layout';

type Props = {};

const fetchItems = async () => {
  const response = await API.get('/items');
  return response.data as FrontItem[];
};

const Browse = (props: Props) => {
  const navigate = useNavigate();

  const items = useQuery({
    queryKey: ['items'],
    queryFn: fetchItems,
    refetchInterval: 5 * 60 * 1000,
  });

  const onSelectItem = (id: number) => {
    navigate(`/item/${id}`);
  };
  return (
    <Layout>
      <h1>Browse</h1>
    </Layout>
  );
};

export default Browse;
