import { create } from 'zustand';

type EditTagsStore = {
  opened: boolean;
  setOpen: (opened: boolean) => void;
};

export const useEditTags = create<EditTagsStore>((set) => ({
  // in case of performance issues, use a Set instead of an array
  opened: false,
  setOpen: (opened: boolean) => set({ opened }),
}));
