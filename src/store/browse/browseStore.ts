import { create } from 'zustand';
import { PAGINATION_LIMIT } from '../../utils/consts';
import { Tag } from '@vanih/cerebro-contracts';

type BrowseStore = {
  page: number;
  limit: number;
  selectedTags: Tag[];
  set: (state: Partial<BrowseStore>) => void;
};

export const useBrowseStore = create<BrowseStore>((set) => ({
  page: 0,
  selectedTags: [],
  limit: PAGINATION_LIMIT,
  set: (state: Partial<BrowseStore>) => set(state),
}));

// export const browseStoreActions = {
//   set(state: Partial<BrowseStore>) {
//     useBrowseStore.setState(state);
//   },
// };
