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

export function addUploadFiles(files: ExtendedFile[]) {
  useUploadStore.setState((s) => ({
    files: [...s.files, ...files],
  }));
}
