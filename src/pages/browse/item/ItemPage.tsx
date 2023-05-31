import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import ItemView from '../../../lib/items/ItemView';
import ItemDialog from '../../../lib/items/ItemDialog';
import { useQueryItem } from '../../../api/itemsApi';
import { useWsadNav } from './useWsadNav';
import css from './ItemPage.module.scss';
import IconBtn from '../../../styled/icon-btn/IconBtn';
import { Icon } from '@mdi/react';
import { mdiClose, mdiInformationOutline } from '@mdi/js';
import ItemDetails from '../../../lib/items/item-details/ItemDetails';
import ItemTags from '../../../lib/items/item-details/ItemTags';
import Card from '../../../styled/card/Card';

const ItemPage = () => {
  const navigate = useNavigate();
  const { itemId = '' } = useParams();
  const item = useQueryItem(itemId);

  useWsadNav(itemId);

  const [infoOpen, setInfoOpen] = useState(false);
  const closeItem = () => navigate('/browse');

  const is404 = item.error?.response?.status === 404;

  if (is404) {
    return <h1 className='h1'>Item not found</h1>;
  }

  return (
    <ItemDialog open={!!itemId} onClose={closeItem}>
      <div className={css.iconBar}>
        <IconBtn
          title='Open media info'
          className={css.InfoItemBtn}
          onClick={() => setInfoOpen(!infoOpen)}
        >
          <Icon path={mdiInformationOutline} />
        </IconBtn>
        <IconBtn
          title='Close modal'
          className={css.CloseItemBtn}
          onClick={closeItem}
        >
          <Icon path={mdiClose} />
        </IconBtn>
      </div>
      <div className={css.itemContent}>
        {item.data && <ItemView item={item.data} />}
        {infoOpen && (
          <Card className={css.ItemMenu}>
            {item.data && (
              <>
                <ItemDetails item={item.data} />
                <ItemTags item={item.data} />
              </>
            )}
          </Card>
        )}
      </div>
    </ItemDialog>
  );
};

export default ItemPage;
