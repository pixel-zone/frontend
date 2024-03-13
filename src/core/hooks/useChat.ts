import { useCallback, useEffect, useState } from 'react';

import io, { Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';

export const useChat = () => {
  const [socket, setSocket] =
    useState<Socket<DefaultEventsMap, DefaultEventsMap>>();
  const [text, setText] = useState('');
  const [chat, setChat] = useState<string[]>([]);

  const connect = useCallback(async () => {
    try {
      await fetch('/api/chat');
      const newSocket = io();

      setSocket(newSocket);

      newSocket!.on('message', (message: string) => {
        setChat(oldChat => [...oldChat, message]);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    connect();
  }, [connect]);

  return {
    chat,
    setText,
    text,
    socket,
  };
};
