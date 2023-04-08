import { useNavigate } from 'react-router';
import { getItemsArray } from '../../../api/itemsApi';
import { useEventListener } from 'usehooks-ts';
import { itemUrl } from '../../../utils/routing/itemUrl';

export const useWsadNav = (currentItemId: string) => {
  const navigate = useNavigate();

  function goTo(next = true) {
    const items = getItemsArray();
    if (!items) {
      return;
    }

    const index = items.findIndex((item) => item.id === Number(currentItemId));
    const previousIndex = (index + items.length - 1) % items.length;
    const nextIndex = (index + 1) % items.length;

    const navigatedIndex = next ? nextIndex : previousIndex;
    const item = items[navigatedIndex];

    navigate(itemUrl(item?.id));
  }

  function handleKey({ key }: KeyboardEvent) {
    switch (key) {
      case 'ArrowRight':
        goTo(true);
        break;
      case 'ArrowLeft':
        goTo(false);
        break;
    }
  }

  useEventListener('keydown', handleKey);
};
