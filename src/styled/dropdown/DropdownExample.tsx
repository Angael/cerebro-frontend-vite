import React, { ComponentProps } from 'react';

import css from './Dropdown.module.scss';
import {
  DropdownContent,
  DropdownItem,
  DropdownPortal,
  DropdownRoot,
  DropdownTrigger,
} from './Dropdown';

type Props = ComponentProps<'div'> & {};

const DropdownExample = ({ children }: Props) => {
  return (
    <DropdownRoot defaultOpen={true}>
      <DropdownTrigger asChild>{children}</DropdownTrigger>

      <DropdownPortal>
        <DropdownContent className={css.DropdownMenuContent} sideOffset={5}>
          <DropdownItem className={css.DropdownButton}>New Tab</DropdownItem>
          <DropdownItem className={css.DropdownButton}>New Window</DropdownItem>
          <DropdownItem className={css.DropdownButton} disabled>
            New Private Window
          </DropdownItem>
        </DropdownContent>
      </DropdownPortal>
    </DropdownRoot>
  );
};

export default DropdownExample;
