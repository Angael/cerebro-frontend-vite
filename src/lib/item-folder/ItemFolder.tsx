import React from 'react';
import css from './ItemFolder.module.scss';
import { Icon } from '@mdi/react';
import { mdiFolder } from '@mdi/js';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

type Props = {
  name: string;
  href: string;
};

const ItemFolder = (props: Props) => {
  const { name } = props;

  const to = '/#';
  const navigate = useNavigate();

  return (
    <div className={css.itemFolder} onClick={() => navigate(to)}>
      <Icon path={mdiFolder} size={2} className={css.folderIcon} />
      <Link to='/#' className={css.folderName}>
        {name}
      </Link>
    </div>
  );
};

export default ItemFolder;
