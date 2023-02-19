import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

type Props = {};

const ItemDialog = (props: Props) => {
  return (
    <Dialog.Root open={true}>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title />
          <Dialog.Description />
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ItemDialog;
