import React from 'react';
import css from './SelectItemBar.module.scss';
import { useSelectItems$ } from '../../../store/browse/selectItemsStore';
import { Btn } from '../../../styled/btn/Btn';
import { Stack } from '../../../styled/stack/Stack';
import { useEditTags } from '../../../store/browse/editTagsStore';

type Props = {};

const SelectItemBar = (props: Props) => {
  const { selectedItems } = useSelectItems$();

  const setOpenTagEditor = useEditTags((s) => s.setOpen);

  return (
    <div className={css.selectItemBarBg}>
      <Stack className={css.selectItemBarFlex}>
        <div style={{ whiteSpace: 'nowrap' }}>
          Selected items: {selectedItems.length}
        </div>
        <Btn onClick={() => setOpenTagEditor(true)}>Add tags</Btn>
        <Btn disabled>Move to folder</Btn>
        <Btn disabled>Delete</Btn>
        <Btn disabled>Report</Btn>
      </Stack>
    </div>
  );
};

export default SelectItemBar;
