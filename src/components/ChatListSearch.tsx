import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input } from "@/components/ui/input";

const ChatListSearch: React.FC = () => {
  // Lê e manipula os parâmetros da URL
  const [searchParams, setSearchParams] = useSearchParams();

  // Obtém o valor atual do termo de pesquisa na URL
  const searchQuery = searchParams.get('search') || '';

  // Atualiza o parâmetro 'search' na URL ao digitar no campo de busca
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchParams({
      ...Object.fromEntries(searchParams),
      search: value,
    });
  };

  return (
    <div className="p-4">
      {/* Campo de entrada para pesquisa estilo shadcn/ui*/}
      <Input
        type="text"
        placeholder="Pesquisar"
        value={searchQuery}
        onChange={handleSearchChange} // Atualiza a URL ao digitar
        className="w-full p-2"
      />
    </div>
  );
};

export default ChatListSearch;
