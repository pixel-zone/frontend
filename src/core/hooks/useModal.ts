import { useModalState } from '@/core/states/modal';

export const useModal = () => {
  const { modal, setModal } = useModalState();

  const closeModal = () => {
    setModal({ name: '' });
  };

  return {
    closeModal,
    openModal: setModal,
    modal,
  };
};
