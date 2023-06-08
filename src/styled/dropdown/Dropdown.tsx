import React, { ComponentProps } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import css from './Dropdown.module.scss';

type Props = ComponentProps<'div'> & {};

const Dropdown = ({ children }: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={css.DropdownMenuContent}
          sideOffset={5}
        >
          <DropdownMenu.Item className={css.DropdownButton}>
            New Tab
          </DropdownMenu.Item>
          <DropdownMenu.Item className={css.DropdownButton}>
            New Window
          </DropdownMenu.Item>
          <DropdownMenu.Item className={css.DropdownButton} disabled>
            New Private Window
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className={css.DropdownButton}>
              More Tools
            </DropdownMenu.SubTrigger>
          </DropdownMenu.Sub>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
