/* eslint-disable react/no-unescaped-entities */
import { useTranslation } from 'react-i18next';

import { Close } from '@/presentation/assets/close';

import { useCloseChat } from '@/core/states/chat';

import { ChatStyles } from './styles';

export const Chat: React.FC = () => {
  const { t } = useTranslation();

  const { chat, setChat } = useCloseChat();

  return (
    <ChatStyles.Container $isClose={chat}>
      <ChatStyles.Header>
        <ChatStyles.Title>{t("Ninja's Chat")}</ChatStyles.Title>
        <div onClick={() => setChat(true)}>
          <Close />
        </div>
      </ChatStyles.Header>
      <ChatStyles.NotAvailable>
        {t('Available soon')}...
      </ChatStyles.NotAvailable>
    </ChatStyles.Container>
  );
};
