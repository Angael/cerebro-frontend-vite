import { useNavigate } from 'react-router';
import { getItemsCache } from '../../../api/itemsApi';
import { useEventListener } from 'usehooks-ts';
import { itemUrl } from '../../../utils/routing/itemUrl';

export const useWsadNav = (currentItemId: string) => {
  const navigate = useNavigate();

  function goTo(next = true) {
    const { items } = getItemsCache() ?? {};
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
      case 'd':
      case 'ArrowRight':
        goTo(true);
        break;
      case 'a':
      case 'ArrowLeft':
        goTo(false);
        break;
    }
  }

  useEventListener('keydown', handleKey);
};
