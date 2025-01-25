import { create } from 'zustand';

interface FilterState {
  searchQuery: string;
  showGroupsOnly: boolean;
  showUnreadOnly: boolean;
  setSearchQuery: (query: string) => void;
  toggleShowGroupsOnly: () => void;
  toggleShowUnreadOnly: () => void;
}

export const useChatFilterStore = create<FilterState>((set) => ({
  searchQuery: '',
  showGroupsOnly: false,
  showUnreadOnly: false,
  setSearchQuery: (query) => set({ searchQuery: query }),
  toggleShowGroupsOnly: () =>
    set((state) => ({ showGroupsOnly: !state.showGroupsOnly })),
  toggleShowUnreadOnly: () =>
    set((state) => ({ showUnreadOnly: !state.showUnreadOnly })),
}));
