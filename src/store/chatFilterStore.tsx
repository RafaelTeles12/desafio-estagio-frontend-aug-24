import { create } from 'zustand';

// Define a interface `FilterState` que especifica o formato do estado global da store
interface FilterState {
  searchQuery: string;
  showGroupsOnly: boolean;
  showUnreadOnly: boolean;
  setSearchQuery: (query: string) => void;
  toggleShowGroupsOnly: () => void;
  toggleShowUnreadOnly: () => void;
}

// Cria a store global usando a função `create` do Zustand
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
