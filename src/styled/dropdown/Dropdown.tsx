import { styled } from '../styled';
import css from './Dropdown.module.scss';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const DropdownRoot = DropdownMenu.Root;
export const DropdownTrigger = DropdownMenu.Trigger;
export const DropdownPortal = DropdownMenu.Portal;

export const DropdownContent = styled(
  DropdownMenu.Content,
  css.DropdownMenuContent,
);

export const DropdownItem = styled(DropdownMenu.Item, css.DropdownButton);
