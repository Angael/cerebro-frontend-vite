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
        <DropdownContent sideOffset={5}>
          <DropdownItem>New Tab</DropdownItem>
          <DropdownItem>New Window</DropdownItem>
          <DropdownItem disabled>New Private Window</DropdownItem>
        </DropdownContent>
      </DropdownPortal>
    </DropdownRoot>
  );
};

export default DropdownExample;
