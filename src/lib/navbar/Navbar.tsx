import React from 'react';
import { Icon } from '@mdi/react';
import {
  mdiAccount,
  mdiCompass,
  mdiFolder,
  mdiPlus,
  mdiViewGrid,
  mdiLightbulbOn,
  mdiLightbulbOutline,
} from '@mdi/js';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.scss';
import IconBtn from '../../styled/icon-btn/IconBtn';
import { useAuthStore } from '../../store/auth/authStore';
import { useDarkTheme } from '../../utils/useDarkTheme';
import { isProd } from '../../env';
import { useSelectItems$ } from '../../store/browse/selectItemsStore';
import SelectItemBar from './select-item-bar/SelectItemBar';

const Navbar = () => {
  const { state } = useAuthStore();
  const isLoggedIn = state === 'loggedIn';
  const [darkTheme, setDarkTheme] = useDarkTheme();

  const showSelectedItemsBar = useSelectItems$((s) => s.turnedOn);

  return (
    <header className={css.navbar}>
      <div className={css.navbarBg}>
        <div className={css.navbarFlex}>
          <div style={{ flex: 1 }}>
            <h1 className='h5'>Cerebro</h1>
            {/*<IconBtn>*/}
            {/*  <Icon path={mdiMenu} />*/}
            {/*</IconBtn>*/}
          </div>

          {isLoggedIn && (
            <>
              <IconBtn as={NavLink} to='/import' title='Import media'>
                <Icon path={mdiPlus} />
              </IconBtn>

              {!isProd && (
                <IconBtn as={NavLink} to='/local' title='Local'>
                  <Icon path={mdiFolder} />
                </IconBtn>
              )}

              <IconBtn as={NavLink} to='/explore' title='Explore media'>
                <Icon path={mdiCompass} />
              </IconBtn>
            </>
          )}

          <IconBtn as={NavLink} to='/browse' title='Browse media'>
            <Icon path={mdiViewGrid} />
          </IconBtn>

          <IconBtn onClick={() => setDarkTheme(!darkTheme)}>
            <Icon
              path={darkTheme ? mdiLightbulbOutline : mdiLightbulbOn}
              size={1}
            />
          </IconBtn>

          <IconBtn as={NavLink} to='/login'>
            <Icon path={mdiAccount} size={1} />
          </IconBtn>
        </div>
      </div>
      {showSelectedItemsBar && <SelectItemBar />}
    </header>
  );
};

export default Navbar;
