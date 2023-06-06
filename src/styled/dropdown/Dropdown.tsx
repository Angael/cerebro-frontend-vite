import React, { ComponentProps } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import css from './Dropdown.module.scss';
import clsx from 'clsx';
import { Icon } from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
import Btn from '../btn/Btn';

type Props = ComponentProps<'div'> & {};

const Dropdown = ({ className, children, ...props }: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className={clsx(css.dropdown, className)}>
        <Btn>{children}</Btn>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className='DropdownMenuContent' sideOffset={5}>
          <DropdownMenu.Item className='DropdownMenuItem'>
            New Tab <div className='RightSlot'>⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='DropdownMenuItem'>
            New Window <div className='RightSlot'>⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='DropdownMenuItem' disabled>
            New Private Window <div className='RightSlot'>⇧+⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className='DropdownMenuSubTrigger'>
              More Tools
              <div className='RightSlot'>
                <Icon path={mdiChevronRight} size={1} />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className='DropdownMenuSubContent'
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenu.Item className='DropdownMenuItem'>
                  Save Page As… <div className='RightSlot'>⌘+S</div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className='DropdownMenuItem'>
                  Create Shortcut…
                </DropdownMenu.Item>
                <DropdownMenu.Item className='DropdownMenuItem'>
                  Name Window…
                </DropdownMenu.Item>
                <DropdownMenu.Separator className='DropdownMenu.Separator' />
                <DropdownMenu.Item className='DropdownMenuItem'>
                  Developer Tools
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>{' '}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
