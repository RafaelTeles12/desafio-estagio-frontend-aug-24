import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const ChatListFilter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const showGroupsOnly = searchParams.get('groups') === 'true';
  const showUnreadOnly = searchParams.get('unread') === 'true';

  const toggleFilter = (filter: string) => {
    const currentValue = searchParams.get(filter) === 'true';
    setSearchParams({
      ...Object.fromEntries(searchParams),
      [filter]: (!currentValue).toString(),
    });
  };

  return (
    <div className="flex space-x-2 p-4">
    <Button
        variant={showGroupsOnly ? "default" : "outline"} // para 'Grupos'
        onClick={() => toggleFilter('groups')}
        className="px-4 py-2">
        Grupos
    </Button>
    <Button
        variant={showUnreadOnly ? "default" : "outline"} // para 'Não Lidas'
        onClick={() => toggleFilter('unread')}
        className="px-4 py-2">
        Não Lidas
    </Button>
    </div>
  );
};

export default ChatListFilter;
