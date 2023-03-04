import React from 'react';
import { useNavigate, useParams } from 'react-router';
import Item from '../../../lib/items/Item';
import ItemDialog from './ItemDialog';
import { useQueryItem } from '../../../api/itemsApi';
import { useWsadNav } from './useWsadNav';

const ItemPage = () => {
  const navigate = useNavigate();
  const { id = '' } = useParams();
  const item = useQueryItem(id);

  useWsadNav(id);

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
