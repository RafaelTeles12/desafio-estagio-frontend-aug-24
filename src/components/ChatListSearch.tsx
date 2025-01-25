import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input } from "@/components/ui/input";

const ChatListSearch: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchParams({ ...Object.fromEntries(searchParams), search: value });
  };

  return (
    <div className="p-4">
      <Input
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Pesquisar conversas"
        className="w-full"
      />
    </div>
  );
};

export default ChatListSearch;
