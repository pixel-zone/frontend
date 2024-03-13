import { ToastContainer } from 'react-toastify';

import { Header, Chat, Menu, Modal } from '@/presentation/components';

// import { ChatIcon } from '@/presentation/assets/chat/chat-icon';

// import { useCloseChat } from '@/core/states/chat';

import { LayoutStyles } from './styles';

interface ILayout {
  children: JSX.Element;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  // const { chat, setChat } = useCloseChat();

  return (
    <>
      <ToastContainer />
      <Modal />
      <Header />
      <LayoutStyles.Content>
        <Menu />
        <LayoutStyles.ChildrenContent>{children}</LayoutStyles.ChildrenContent>
        <Chat />
      </LayoutStyles.Content>
      {/* {chat ? (
        <LayoutStyles.ChatButton onClick={() => setChat(false)}>
          <ChatIcon />
        </LayoutStyles.ChatButton>
      ) : null} */}
    </>
  );
};
