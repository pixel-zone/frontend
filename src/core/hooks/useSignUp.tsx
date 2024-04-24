// useSignUp.tsx
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAccountState } from '../states/account';
import { useLogin } from './useLogin';

export const useSignUp = () => {
  const { account } = useAccountState();
  const { retrieveUserData } = useLogin();

  const id = account.id;
  const type = account.user_type_id;

  const createAccount = async ({
    username,
    email,
    senha,
    type,
  }: {
    username: string;
    email: string;
    senha: string;
    type: number;
  }) => {
    try {
      const response = await axios.post(
        'http://localhost:8081/api/v1/pixel_zone/usuario/cria',
        {
          username,
          email,
          senha,
          type,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      toast.dismiss();
      toast.success('Cadastro efetuado com sucesso!');
      console.log('success');
      return response.data;
    } catch (error) {
      if ((error as any).response.status === 409) {
        toast.error('Usuário já cadastrado!');
      }
      console.error('Erro ao criar conta: ', error);
    }
  };

  const updateAccount = async ({
    username,
    email,
    senha,
  }: {
    username?: string;
    email?: string;
    senha?: string;
  }) => {
    try {
      const response = await axios.put(
        'http://localhost:8081/api/v1/pixel_zone/usuario/altera',
        {
          username,
          email,
          senha,
          id,
          type,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      await retrieveUserData(id.toString());
      toast.success('Dados alterados com sucesso');
      return response.data;
    } catch (e) {
      if ((e as any).response.data.status === 409) {
        toast.error('Dados iguais! ');
      }
    }
  };
  return { createAccount, updateAccount };
};
