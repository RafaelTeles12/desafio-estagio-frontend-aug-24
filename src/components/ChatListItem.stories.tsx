import { Meta, StoryFn } from '@storybook/react';
import ChatListItem, { ChatListItemProps } from './ChatListItem';

// Definir as propriedades básicas para o componente
const meta: Meta = {
  title: 'ChatListItem', // Nome da história no Storybook
  component: ChatListItem,
};

export default meta;

const Template: StoryFn<ChatListItemProps> = (args) => <ChatListItem {...args} />;

// Variação 1: Chat sem mensagens não lidas
export const Default = Template.bind({});
Default.args = {
  avatar: 'https://cdn-icons-png.freepik.com/128/9385/9385289.png',
  name: 'Rafael',
  lastMessage: 'Olá, tudo bem?',
  time: '18:30',
  isGroup: false,
};

// Variação 2: Chat de grupo com mensagens não lidas
export const GroupPlusUnreadMessages = Template.bind({});
GroupPlusUnreadMessages.args = {
  avatar: 'https://cdn-icons-png.freepik.com/128/9385/9385295.png',
  name: 'Família',
  lastMessage: 'Reunião no domingo? Confirme sua presença!',
  time: '15:45',
  unreadCount: 10,
  isGroup: true,
}