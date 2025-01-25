import React from 'react';
import { Card } from "@/components/ui/card";

interface ChatListItemProps {
  avatar: string;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  isGroup: boolean;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ avatar, name, lastMessage, time, unreadCount, isGroup }) => {
  return (
    <Card className="flex items-center p-4 hover:bg-gray-100 cursor-pointer transition-colors duration-200">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
      <div className="ml-4 flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold flex items-center">
            {name}
            {isGroup && (
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded">
                Grupo
              </span>
            )}
          </h3>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-500 truncate">{lastMessage}</p>
      </div>
      {unreadCount && (
        <span className="ml-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1">
          {unreadCount > 99 ? "99+" : unreadCount}
        </span>
      )}
    </Card>
  );
};

export default ChatListItem;  