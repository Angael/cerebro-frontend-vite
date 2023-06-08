import React, { ComponentProps } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import css from './Dropdown.module.scss';

type Props = ComponentProps<'div'> & {};

const DropdownExample = ({ children }: Props) => {
  return (
    <DropdownMenu.Root defaultOpen={true}>
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
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownExample;
