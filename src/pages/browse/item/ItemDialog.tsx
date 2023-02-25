import React, { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import css from './ItemDialog.module.scss';

type Props = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

const ItemDialog = ({ children, open, onClose }: Props) => {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={css.DialogOverlay} onClick={onClose} />
        <Dialog.Content className={css.DialogContent} onClick={onClose}>
          {/*<Dialog.Title>Tytuł itemu</Dialog.Title>*/}
          {children}
          {/*<Dialog.Close onClick={onClose}>Zamknij modala</Dialog.Close>*/}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ItemDialog;
