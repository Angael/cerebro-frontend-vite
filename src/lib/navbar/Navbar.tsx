import React from 'react';
import { Icon } from '@mdi/react';
import { mdiAccount, mdiCompass, mdiMenu, mdiPlus, mdiViewGrid } from '@mdi/js';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.scss';
import IconBtn from '../../styled/icon-btn/IconBtn';
import { useAuthStore } from '../../store/auth/authStore';

const Navbar = () => {
  const { state } = useAuthStore();
  const isLoggedIn = state === 'loggedIn';

  return (
    <header className={css.navbar}>
      <div className={css.navbarFlex}>
        <div style={{ flex: 1 }}>
          <h1 className='h5'>Cerebro</h1>
          {/*<IconBtn>*/}
          {/*  <Icon path={mdiMenu} />*/}
          {/*</IconBtn>*/}
        </div>

        {isLoggedIn && (
          <>
            <IconBtn component={NavLink} to='/import' title='Import media'>
              <Icon path={mdiPlus} />
            </IconBtn>

            <IconBtn component={NavLink} to='/explore' title='Explore media'>
              <Icon path={mdiCompass} />
            </IconBtn>
          </>
        )}

        <IconBtn component={NavLink} to='/browse' title='Browse media'>
          <Icon path={mdiViewGrid} />
        </IconBtn>

        <IconBtn component={NavLink} to='/login'>
          <Icon path={mdiAccount} size={1} />
        </IconBtn>
      </div>
    </header>
  );
};

export default Navbar;
