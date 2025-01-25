import { Meta, StoryFn } from '@storybook/react';
import ChatListItem, { ChatListItemProps } from './ChatListItem';

// Definir as propriedades básicas para o componente
const meta: Meta = {
  title: 'ChatListItem', // Nome da história no Storybook
  component: ChatListItem,
  parameters: {
    docs: {
      description: {
        component:
          'O componente `ChatListItem` é usado para exibir um item de conversa em uma lista de chats, mostrando o avatar, nome, última mensagem e o número de mensagens não lidas. Ele pode ser usado para chats individuais ou grupos.',
      },
    },
  },
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
Default.parameters = {
  docs: {
    storyDescription:
      'Esta variação mostra um chat individual sem mensagens não lidas. O componente exibe a última mensagem e o horário de envio, com um avatar ao lado do nome do usuário.',
  },
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
};
GroupPlusUnreadMessages.parameters = {
  docs: {
    storyDescription:
      'Este exemplo mostra um chat de grupo com mensagens não lidas. O componente exibe o número de mensagens não lidas ao lado do nome do grupo, além da última mensagem e o horário de envio.',
  },
};
