import { create } from 'zustand';
import { FrontItem } from '@vanih/cerebro-contracts';

type SelectItemsStore = {
  items: FrontItem['id'][];
};

export const useSelectItems$ = create<SelectItemsStore>((set) => ({
  items: [],
  set: (state: Partial<SelectItemsStore>) => set(state),
  selectItem: (id: FrontItem['id']) =>
    set((s) => {
      if (s.items.includes(id)) {
        return { items: [...s.items, id] };
      } else {
        return { items: s.items.filter((itemId) => itemId !== id) };
      }
    }),
}));
