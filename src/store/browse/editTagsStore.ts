import { create } from 'zustand';

type EditTagsStore = {
  opened: boolean;
  setOpen: (opened: boolean) => void;
};

export const useEditTags = create<EditTagsStore>((set) => ({
  opened: false,
  setOpen: (opened: boolean) => set({ opened }),
}));
