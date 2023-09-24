import React from 'react';
import { useSelectItems$ } from '../../store/browse/selectItemsStore';
import * as Dialog from '@radix-ui/react-dialog';
import css from './TagEditor.module.scss';
import { useEditTags } from '../../store/browse/editTagsStore';
import Textfield from '../../styled/textfield/Textfield';
import { useTagInput } from '../../pages/import/useTagInput';
import { Btn } from '../../styled/btn/Btn';
import { addTagsToItems } from '../../api/item/addTagsToItems';

type Props = {};

const TagEditor = (props: Props) => {
  const { selectedItems } = useSelectItems$();
  const { opened, setOpen } = useEditTags();
  const [tags, setTags, tagsArr] = useTagInput();

  const onCancelBubble = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const addTags = async () => {
    await addTagsToItems(selectedItems, tagsArr);
    setOpen(false);
  };

  // TODO: remove radix ui dialog and use your own
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
            <br />
            <Textfield
              label='Add tags'
              input={{
                value: tags,
                onChange: (e) => setTags(e.currentTarget.value),
              }}
            />
            <br />
            <Btn onClick={addTags}>Add</Btn>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default TagEditor;
