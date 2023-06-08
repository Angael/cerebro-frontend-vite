import { styled } from '../styled';
import css from './Dropdown.module.scss';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ComponentPropsWithRef } from 'react';

export const DropdownContent = styled(
  DropdownMenu.Content,
  css.DropdownMenuContent,
);

// <DropdownContent
