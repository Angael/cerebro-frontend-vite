import React from 'react';
import Icon from '@mdi/react';
import {
  mdiAccount,
  mdiBookmarkMultiple,
  mdiCompass,
  mdiMenu,
  // mdiMenu,
  mdiPlus,
  mdiStar,
  mdiViewGrid,
} from '@mdi/js';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.scss';
import IconBtn from '../icon-btn/IconBtn';

const Navbar = () => {
  return (
    <div className={css.navbar}>
      <div style={{ flex: 1 }}>
        <IconBtn>
          <Icon path={mdiMenu} size={1} />
        </IconBtn>
      </div>

      <IconBtn component={NavLink} to='/import'>
        <Icon path={mdiPlus} size={1} />
      </IconBtn>
      <IconBtn component={NavLink} to='/explore'>
        <Icon path={mdiCompass} size={1} />
      </IconBtn>
      <IconBtn component={NavLink} to='/browse'>
        <Icon path={mdiViewGrid} size={1} />
      </IconBtn>
      <IconBtn component={NavLink} to='/favs' disabled>
        <Icon path={mdiStar} size={1} />
      </IconBtn>
      <IconBtn component={NavLink} to='/library' disabled>
        <Icon path={mdiBookmarkMultiple} size={1} />
      </IconBtn>
      <IconBtn component={NavLink} to='/account' disabled>
        <Icon path={mdiAccount} size={1} />
      </IconBtn>
    </div>
  );
};

export default Navbar;
