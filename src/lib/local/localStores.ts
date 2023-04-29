import create from 'zustand';

type LocalStore = {
  filePaths: string[];
  toggleFilePath: (path: string) => void;
};

export const useLocalStore = create<LocalStore>((set) => ({
  filePaths: [],
  toggleFilePath: (path) =>
    set((store) => {
      if (store.filePaths.includes(path)) {
        return { filePaths: store.filePaths.filter((p) => p !== path) };
      } else {
        return { filePaths: [...store.filePaths, path] };
      }
    }),
}));
