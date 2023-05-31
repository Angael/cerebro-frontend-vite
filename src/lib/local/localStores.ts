import create from 'zustand';

type LocalStore = {
  filePaths: string[];
  toggleFilePath: (path: string) => void;
  removePaths: (paths: string[]) => void;
  removeAll: () => void;
  addPaths: (paths: string[]) => void;
};

export const useLocalStore = create<LocalStore>((set) => ({
  filePaths: [],
  toggleFilePath: (path) =>
    set((store) =>
      store.filePaths.includes(path)
        ? { filePaths: store.filePaths.filter((p) => p !== path) }
        : { filePaths: [...store.filePaths, path] },
    ),
  removePaths: (paths) => {
    set((store) => ({
      filePaths: store.filePaths.filter((p) => !paths.includes(p)),
    }));
  },
  removeAll: () => {
    set({ filePaths: [] });
  },
  addPaths: (paths) => {
    set((store) => {
      const newPaths = paths.filter((p) => !store.filePaths.includes(p));

      return { filePaths: [...store.filePaths, ...newPaths] };
    });
  },
}));
