import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Dialog } from 'react-dialog-element';
import { Icon } from '@mdi/react';
import { mdiClose, mdiDownload, mdiFullscreen } from '@mdi/js';

import css from './ItemPage.module.scss';
import ItemView from '../../../lib/items/ItemView';
import { useQueryItem } from '../../../api/itemsApi';
import { useWsadNav } from './useWsadNav';
import IconBtn from '../../../styled/icon-btn/IconBtn';
import ItemDetails from '../../../lib/items/item-details/ItemDetails';
import ItemTags from '../../../lib/items/item-details/ItemTags';
import Card from '../../../styled/card/Card';
import { deleteItemApi } from '../../../api/item/deleteItemApi';
import { Btn } from '../../../styled/btn/Btn';

const ItemPage = () => {
  const navigate = useNavigate();
  const { itemId = '' } = useParams();
  const item = useQueryItem(itemId);

  useWsadNav(itemId);

  const closeItem = () => navigate('/browse');
  const deleteItem = async () => {
    if (item.data && confirm('Do you want to delete this item?')) {
      deleteItemApi(item.data.id);

      closeItem();
    }
  };

  const is404 = item.error?.response?.status === 404;

  return (
    <Dialog isOpen={!!itemId} setOpen={closeItem} className={css.dialog}>
      <div className={css.itemView}>
        {is404 && <h1 className={css.is404}>Item not found</h1>}
        {item.data && <ItemView item={item.data} />}
      </div>
      <div className={css.itemDetailsColumn}>
        <Card className={css.itemActions}>
          <IconBtn title='Download' className={css.icon} onClick={console.log}>
            <Icon path={mdiDownload} />
          </IconBtn>

          <IconBtn title='Maximize' className={css.icon} onClick={console.log}>
            <Icon path={mdiFullscreen} />
          </IconBtn>

          <IconBtn title='Close modal' className={css.icon} onClick={closeItem}>
            <Icon path={mdiClose} />
          </IconBtn>
        </Card>

        {item.data?.isMine && (
          <Card>
            <Btn className={css.deleteItemBtn} onClick={deleteItem}>
              Delete item
            </Btn>
          </Card>
        )}

        <Card className={css.details}>
          {item.data && (
            <>
              <ItemDetails item={item.data} />
              <ItemTags item={item.data} />
            </>
          )}
        </Card>
      </div>
    </Dialog>
  );
};

export default ItemPage;
