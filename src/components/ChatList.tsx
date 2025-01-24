import React, { useEffect, useState } from 'react';
import ChatListItem from './ChatListItem';

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
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  if (loading) {
    return <p className="text-white text-center">Loading chats...</p>;
  }

  return (
    <div className="bg-white shadow rounded-md h-full overflow-y-auto">
    <h2 className="text-xl font-semibold text-gray-800 p-4 border-b">Conversas</h2>
      {chats.map(chat => (
        <ChatListItem
          key={chat.id}
          avatar={chat.avatar}
          name={chat.name}
          lastMessage={chat.lastMessage}
          time={chat.time}
          unreadCount={chat.unreadCount}
          isGroup={chat.isGroup}
        />
      ))}
    </div>
  );
};

export default ChatList;