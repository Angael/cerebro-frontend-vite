import React from 'react';
import { Icon } from '@mdi/react';
import { mdiAccount, mdiCompass, mdiMenu, mdiPlus, mdiViewGrid } from '@mdi/js';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.scss';
import IconBtn from '../icon-btn/IconBtn';
import { useAuthStore } from '../../store/auth/authStore';

const Navbar = () => {
  const { state } = useAuthStore();
  const isLoggedIn = state === 'loggedIn';

  return (
    <div className={css.navbar}>
      <div className={css.navbarFlex}>
        <div style={{ flex: 1 }}>
          <IconBtn>
            <Icon path={mdiMenu} />
          </IconBtn>
        </div>

        {isLoggedIn && (
          <>
            <IconBtn component={NavLink} to='/import'>
              <Icon path={mdiPlus} />
            </IconBtn>

            {/*<IconBtn component={NavLink} to='/favs' disabled tabIndex={-1}>*/}
            {/*  <Icon path={mdiStar} />*/}
            {/*</IconBtn>*/}
            {/*<IconBtn component={NavLink} to='/library' disabled tabIndex={-1}>*/}
            {/*  <Icon path={mdiBookmarkMultiple} />*/}
            {/*</IconBtn>*/}
            {/*<IconBtn component={NavLink} to='/account' disabled tabIndex={-1}>*/}
            {/*  <Icon path={mdiAccount} />*/}
            {/*</IconBtn>*/}

            <IconBtn component={NavLink} to='/explore'>
              <Icon path={mdiCompass} />
            </IconBtn>
            <IconBtn component={NavLink} to='/browse'>
              <Icon path={mdiViewGrid} />
            </IconBtn>
          </>
        )}

        <IconBtn component={NavLink} to='/login' tabIndex={-1}>
          <Icon path={mdiAccount} size={1} />
        </IconBtn>
      </div>
    </div>
  );
};

export default Navbar;
