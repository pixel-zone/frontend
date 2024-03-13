import { toast as toastify } from 'react-toastify';

interface IToast {
  title: string;
  type?: 'success' | 'error' | 'warn' | 'info';
  delay?: number;
}

export const useToast = () => {
  const toast = ({ title, type = 'success', delay }: IToast) => {
    toastify?.[type](title, {
      theme: 'dark',
      position: 'top-right',
      className: 'toast',
      delay,
    });
  };

  return { toast };
};
