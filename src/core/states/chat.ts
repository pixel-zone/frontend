import { atom, useRecoilState } from 'recoil';

const chatState = atom({
  key: 'chat-close',
  default: true,
});

export const useCloseChat = () => {
  const [chat, setChat] = useRecoilState(chatState);

  return { chat, setChat };
};
