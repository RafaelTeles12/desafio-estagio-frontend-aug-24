import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const ChatListFilter: React.FC = () => {
  // Lê os parâmetros da URL e fornece funções para atualizá-los
  const [searchParams, setSearchParams] = useSearchParams();

  // Extrai os valores dos filtros da URL
  const showGroupsOnly = searchParams.get('groups') === 'true';
  const showUnreadOnly = searchParams.get('unread') === 'true';

  // Alterna o estado de um filtro específico na URL
  const toggleFilter = (filter: string) => {
    const currentValue = searchParams.get(filter) === 'true';
    setSearchParams({
      ...Object.fromEntries(searchParams),
      [filter]: (!currentValue).toString(),
    });
  };

  return (
    <div className="flex space-x-2 p-4">
      {/* Botão shadcn/ui para alternar o filtro de grupos */}
      <Button
        variant={showGroupsOnly ? "default" : "outline"}
        onClick={() => toggleFilter('groups')}
        className="px-4 py-2"
      >
        Grupos
      </Button>

      {/* Botão shadcn/ui para alternar o filtro de mensagens não lidas */}
      <Button
        variant={showUnreadOnly ? "default" : "outline"}
        onClick={() => toggleFilter('unread')}
        className="px-4 py-2"
      >
        Não Lidas
      </Button>
    </div>
  );
};

export default ChatListFilter;
