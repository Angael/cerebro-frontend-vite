import { create } from 'zustand';
import { FrontItem } from '@vanih/cerebro-contracts';

type SelectItemsStore = {
  turnedOn: boolean;
  setTurnedOn: (turnedOn: boolean) => void; // yet unused
  selectedItems: FrontItem['id'][];
  set: (state: Partial<SelectItemsStore>) => void;
  selectItem: (id: FrontItem['id']) => void;
};

export const useSelectItems$ = create<SelectItemsStore>((set) => ({
  // in case of performance issues, use a Set instead of an array
  turnedOn: false,
  setTurnedOn: (turnedOn: boolean) => set({ turnedOn }),
  selectedItems: [],
  set: (state: Partial<SelectItemsStore>) => set(state),
  selectItem: (id: FrontItem['id']) =>
    set((s) => {
      if (!s.selectedItems.includes(id)) {
        return {
          turnedOn: true,
          selectedItems: [...s.selectedItems, id],
        };
      } else {
        return {
          turnedOn: true,
          selectedItems: s.selectedItems.filter((itemId) => itemId !== id),
        };
      }
    }),
}));
