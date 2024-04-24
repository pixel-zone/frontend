// useLogin.tsx
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useAccountState } from '../states/account';

export const useLogin = () => {
  const router = useRouter();
  const { setAccount, account } = useAccountState();

  const retrieveUserData = async (email?: string, id?: number) => {
    try {
      const response = await axios.post(
        `http://localhost:8081/api/v1/pixel_zone/usuario/coleta`,
        {
          email,
          id,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      let userData = response.data.usuarios[0];
      setAccount(prev => ({
        ...prev,
        id: response.data.usuarios[0].id,
        username: response.data.usuarios[0].username,
        email: response.data.usuarios[0].email,
        points: response.data.usuarios[0].points,
        user_type_id: response.data.usuarios[0].user_type_id,
        items: response.data.usuarios[0].items,
        isLogged: true,
      }));

      router.push('/');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados do usuário: ', error);
    }
  };
  const login = async ({ email, senha }: { email: string; senha: string }) => {
    try {
      const response = await axios.post(
        'http://localhost:8081/api/v1/pixel_zone/usuario/login',
        {
          email,
          senha,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      await retrieveUserData(email);

      toast.dismiss();
      toast.success('Login efetuado com sucesso!');
      //   router.push('/');
      console.log('success');
      return response.data;
    } catch (error) {
      toast.error('Email ou senha incorretos!');

      console.error('Erro ao fazer login: ', error);
    }
  };

  return { login, retrieveUserData };
};
