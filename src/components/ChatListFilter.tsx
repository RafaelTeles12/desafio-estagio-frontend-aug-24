import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useChatFilterStore } from '../store/chatFilterStore';

const ChatListFilter: React.FC = () => {
  const showGroupsOnly = useChatFilterStore((state) => state.showGroupsOnly);
  const showUnreadOnly = useChatFilterStore((state) => state.showUnreadOnly);
  const toggleShowGroupsOnly = useChatFilterStore((state) => state.toggleShowGroupsOnly);
  const toggleShowUnreadOnly = useChatFilterStore((state) => state.toggleShowUnreadOnly);

  useEffect(() => {
    // Atualiza a URL quando os filtros mudarem
    const params = new URLSearchParams(window.location.search);
    params.set('groups', showGroupsOnly.toString());
    params.set('unread', showUnreadOnly.toString());
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  }, [showGroupsOnly, showUnreadOnly]);

  return (
    <div className="flex space-x-2 p-4">
      <Button
        variant={showGroupsOnly ? "default" : "outline"}
        onClick={toggleShowGroupsOnly}
        className="px-4 py-2"
      >
        Grupos
      </Button>

      <Button
        variant={showUnreadOnly ? "default" : "outline"}
        onClick={toggleShowUnreadOnly}
        className="px-4 py-2"
      >
        Não Lidas
      </Button>
    </div>
  );
};

export default ChatListFilter;
