import React from 'react';
import { FrontItem } from '@vanih/cerebro-contracts';
import {
  DropdownContent,
  DropdownItem,
  DropdownRoot,
  DropdownTrigger,
} from '../../../styled/dropdown/Dropdown';
import { Btn } from '../../../styled/btn/Btn';

type Props = {
  item: FrontItem;
};

const QualityDropdown = (props: Props) => {
  const { item } = props;
  return (
    <DropdownRoot>
      <DropdownTrigger asChild>
        <Btn disabled>{'Default'}</Btn>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem onClick={console.log}>Source</DropdownItem>
        <DropdownItem onClick={console.log}>Compressed</DropdownItem>
      </DropdownContent>
    </DropdownRoot>
  );
};

export default QualityDropdown;
