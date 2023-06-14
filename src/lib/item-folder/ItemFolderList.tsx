import React from 'react';
import css from './ItemFolderList.module.scss';
import ItemFolder from './ItemFolder';

type Props = {};

const ItemFolderList = (props: Props) => {
  return (
    <div className={css.itemFolderList}>
      <ItemFolder name='...' />
      <ItemFolder name='Cyberpunk' />
      <ItemFolder name='Mass effect' />
      <ItemFolder name='Memes' />
      <ItemFolder name='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' />
    </div>
  );
};

export default ItemFolderList;
