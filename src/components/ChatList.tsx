import React, { useEffect, useState } from 'react';
import ChatListItem from './ChatListItem';
import { useSearchParams } from 'react-router-dom';

// Definição da interface Chat: descreve o formato de cada item da lista de chats
interface Chat {
  id: number;
  avatar: string;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  isGroup: boolean;
}

const ChatList: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>([]); // Estado local para armazenar os chats
  const [loading, setLoading] = useState(true); // Indica se os dados estão sendo carregados

  // Lê os parâmetros da URL para obter filtros
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const showGroupsOnly = searchParams.get('groups') === 'true';
  const showUnreadOnly = searchParams.get('unread') === 'true';

  useEffect(() => {
    // Função para buscar os dados dos chats na API mockada
    const fetchChats = async () => {
      try {
        const response = await fetch('http://localhost:5000/chats');
        const data = await response.json();
        setChats(data);
      } catch (error) {
        console.error('Failed to fetch chats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, []);

  // Exibe mensagem de carregamento enquanto os dados estão sendo buscados
  if (loading) {
    return <p className="text-white text-center">Loading chats...</p>;
  }

  // Filtra os chats com base nos parâmetros da URL
  const filteredChats = chats.filter((chat) => {
    const matchesSearch = chat.name.toLowerCase().includes(searchQuery.toLowerCase()); // Verifica se o nome corresponde à pesquisa
    const matchesGroup = showGroupsOnly ? chat.isGroup : true;
    const matchesUnread = showUnreadOnly ? chat.unreadCount > 0 : true;
    return matchesSearch && matchesGroup && matchesUnread;
  });

  return (
    <div className="bg-white shadow rounded-md h-full overflow-y-auto">
      {/* Cabeçalho da lista */}
      <h2 className="text-xl font-semibold text-gray-800 p-4 border-b">Conversas</h2>

      {/* Renderiza os chats filtrados ou uma mensagem caso nenhum chat corresponda aos filtros */}
      {filteredChats.length > 0 ? (
        filteredChats.map((chat) => (
          <ChatListItem
            key={chat.id} // Identificador único para o React
            avatar={chat.avatar}
            name={chat.name}
            lastMessage={chat.lastMessage}
            time={chat.time}
            unreadCount={chat.unreadCount}
            isGroup={chat.isGroup}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 p-4">Nenhuma conversa encontrada</p>
      )}
    </div>
  );
};

export default ChatList;
