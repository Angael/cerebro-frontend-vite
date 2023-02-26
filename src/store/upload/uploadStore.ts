import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ExtendedFile } from './uploadTypes';

interface UploadStore {
  files: ExtendedFile[];
}

export const useUploadStore = create<UploadStore>()(
  devtools((set) => ({
    files: [],
  })),
);

export const uploadStoreActions = {
  add(files: ExtendedFile[]) {
    useUploadStore.setState((s) => ({
      files: [...s.files, ...files],
    }));
  },

  removeOne(id: string) {
    useUploadStore.setState((s) => ({
      files: s.files.filter((f) => f.id !== id),
    }));
  },

  clear() {
    useUploadStore.setState({ files: [] });
  },
};
