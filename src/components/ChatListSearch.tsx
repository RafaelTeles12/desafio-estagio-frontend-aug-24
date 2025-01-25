import React, { useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { useChatFilterStore } from '../store/chatFilterStore';

const ChatListSearch: React.FC = () => {
  const searchQuery = useChatFilterStore((state) => state.searchQuery);
  const setSearchQuery = useChatFilterStore((state) => state.setSearchQuery);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  useEffect(() => {
    // Atualiza a URL quando o searchQuery mudar
    const params = new URLSearchParams(window.location.search);
    if (searchQuery) {
      params.set('search', searchQuery);
    } else {
      params.delete('search');
    }
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  }, [searchQuery]);

  return (
    <div className="p-4">
      <Input
        type="text"
        placeholder="Pesquisar"
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full p-2"
      />
    </div>
  );
};

export default ChatListSearch;
