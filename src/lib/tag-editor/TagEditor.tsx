import React from 'react';
import { useSelectItems$ } from '../../store/browse/selectItemsStore';
import * as Dialog from '@radix-ui/react-dialog';
import css from './TagEditor.module.scss';
import Card from '../../styled/card/Card';
import { useEditTags } from '../../store/browse/editTagsStore';
import Textfield from '../../styled/textfield/Textfield';

type Props = {};

const TagEditor = (props: Props) => {
  const { selectedItems } = useSelectItems$();
  const { opened, setOpen } = useEditTags();

  const onCancelBubble = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Dialog.Root open={opened}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={css.TagEditorOverlay}
          onClick={() => setOpen(false)}
        >
          <Dialog.Content
            className={css.TagEditorContent}
            onClick={onCancelBubble}
          >
            <Dialog.DialogTitle className='h2'>Edit tags</Dialog.DialogTitle>
            <hr />
            <p>Selected items: {selectedItems.length}</p>
            <Textfield label='Add tags' />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default TagEditor;
