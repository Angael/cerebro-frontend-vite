import React from 'react';
import css from './SelectItemBar.module.scss';
import { useSelectItems$ } from '../../../store/browse/selectItemsStore';
import { Btn } from '../../../styled/btn/Btn';
import { Stack } from '../../../styled/stack/Stack';

type Props = {};

const SelectItemBar = (props: Props) => {
  const { selectedItems } = useSelectItems$();

  return (
    <div className={css.selectItemBarBg}>
      <Stack className={css.selectItemBarFlex}>
        <div>Selected items: {selectedItems.length}</div>
        <Btn disabled>Tag</Btn>
        <Btn disabled>Move to folder</Btn>
        <Btn disabled>Delete</Btn>
        <Btn disabled>Report</Btn>
      </Stack>
    </div>
  );
};

export default SelectItemBar;
