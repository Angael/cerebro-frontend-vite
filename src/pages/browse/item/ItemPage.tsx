import React from 'react';
import { useNavigate, useParams } from 'react-router';
import ItemView from '../../../lib/items/ItemView';
import ItemDialog from '../../../lib/items/ItemDialog';
import { useQueryItem } from '../../../api/itemsApi';
import { useWsadNav } from './useWsadNav';
import ItemMenu from '../../../lib/items/item-menu/ItemMenu';
import css from './ItemPage.module.scss';
import IconBtn from '../../../lib/icon-btn/IconBtn';
import { Icon } from '@mdi/react';
import { mdiClose } from '@mdi/js';

const ItemPage = () => {
  const navigate = useNavigate();
  const { id = '' } = useParams();
  const item = useQueryItem(id);

  useWsadNav(id);

  const closeItem = () => navigate('/browse');

  const is404 = item.error?.response?.status === 404;

  if (is404) {
    return <h1 className='h1'>Item not found</h1>;
  }

  return (
    <ItemDialog open={!!id} onClose={closeItem}>
      <IconBtn className={css.CloseItemBtn} onClick={closeItem}>
        <Icon path={mdiClose} />
      </IconBtn>
      <main className={css.ItemPageGrid}>
        <div className={css.ItemContent}>
          {item.data && <ItemView item={item.data} />}
        </div>
        <div className={css.ItemMenu}>
          {item.data && <ItemMenu item={item.data} />}
        </div>
      </main>
    </ItemDialog>
  );
};

export default ItemPage;
