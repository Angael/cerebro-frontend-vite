import React from 'react';
import { useNavigate, useParams } from 'react-router';
import ItemView from '../../../lib/items/ItemView';
import ItemDialog from '../../../lib/items/ItemDialog';
import { useQueryItem } from '../../../api/itemsApi';
import { useWsadNav } from './useWsadNav';
import css from './ItemPage.module.scss';
import IconBtn from '../../../styled/icon-btn/IconBtn';
import { Icon } from '@mdi/react';
import { mdiClose, mdiInformationOutline } from '@mdi/js';

const ItemPage = () => {
  const navigate = useNavigate();
  const { itemId = '' } = useParams();
  const item = useQueryItem(itemId);

  useWsadNav(itemId);

  const closeItem = () => navigate('/browse');

  const is404 = item.error?.response?.status === 404;

  if (is404) {
    return <h1 className='h1'>Item not found</h1>;
  }

  return (
    <ItemDialog open={!!itemId} onClose={closeItem}>
      <IconBtn className={css.InfoItemBtn} onClick={closeItem}>
        <Icon path={mdiInformationOutline} />
      </IconBtn>
      <IconBtn className={css.CloseItemBtn} onClick={closeItem}>
        <Icon path={mdiClose} />
      </IconBtn>
      <main>
        <div className={css.ItemContent}>
          {item.data && <ItemView item={item.data} />}
        </div>
        {/*Menu button*/}
        <div>
          <button className={css.MenuBtn}>Menu</button>
        </div>
        {/*<div className={css.ItemMenu}>*/}
        {/*  {item.data && (*/}
        {/*    <>*/}
        {/*      <ItemDetails item={item.data} />*/}
        {/*      <ItemTags item={item.data} />*/}
        {/*    </>*/}
        {/*  )}*/}
        {/*</div>*/}
      </main>
    </ItemDialog>
  );
};

export default ItemPage;
