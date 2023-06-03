import { create } from 'zustand';
import { FrontItem } from '@vanih/cerebro-contracts';

type SelectItemsStore = {
  items: FrontItem['id'][];
  set: (state: Partial<SelectItemsStore>) => void;
  selectItem: (id: FrontItem['id']) => void;
};

export const useSelectItems$ = create<SelectItemsStore>((set) => ({
  // in case of performance issues, use a Set instead of an array
  items: [],
  set: (state: Partial<SelectItemsStore>) => set(state),
  selectItem: (id: FrontItem['id']) =>
    set((s) => {
      if (!s.items.includes(id)) {
        return { items: [...s.items, id] };
      } else {
        return { items: s.items.filter((itemId) => itemId !== id) };
      }
    }),
}));
