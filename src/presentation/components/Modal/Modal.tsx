import { useModal } from '@/core/hooks/useModal';

import { modals } from './contents';

import { ModalStyles } from './styles';

export const Modal: React.FC = () => {
  const { modal } = useModal();

  return (
    <ModalStyles.Container $isShow={Boolean(modal.name)}>
      {modals({ props: modal?.props })?.[modal.name]}
    </ModalStyles.Container>
  );
};
